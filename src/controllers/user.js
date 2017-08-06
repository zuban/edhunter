const bluebird = require('bluebird');
const crypto = bluebird.promisifyAll(require('crypto'));
const nodemailer = require('nodemailer');
const passport = require('passport');

/**
 * POST /signup
 * Create a new local account.
 */
const postSignup = (req, res, next) => {
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('password', 'Password must be at least 4 characters long').len(4);
  req.assert('confirmPassword', 'Passwords do not match').equals(req.body.password);
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/signup');
  }

  const user = new User({
    email: req.body.email,
    password: req.body.password,
    type: req.body.type,
    name: req.body.name,
    phone: req.body.phone,
    about: req.body.about,
    course: req.body.course,
    company: req.body.company,
    contactPerson: req.body.contactPerson,
    university: req.body.university,
  });

  User.findOne({ email: req.body.email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }
    if (existingUser) {
      req.flash('errors', { msg: 'Аккаунт с данным email уже существует.' });
      return res.redirect('/signup');
    }
    user.save((err) => {
      if (err) {
        return next(err);
      }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        res.redirect('/contact');
      });
    });
  });
};


/**
 * POST /login
 * Sign in using email and password.
 */
const postLogin = (req, res, next) => {
  req.assert('email', 'Email не валидный').isEmail();
  req.assert('password', 'Пароль не может быть пустым').notEmpty();
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  const errors = req.validationErrors();

  if (errors) {
    // req.flash('errors', errors);
    return res.redirect('/login');
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash('errors', info);
      return res.redirect('/login');
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      req.flash('success', { msg: 'Вход совершен. ' });
      res.redirect(req.session.returnTo || '/contact');
    });
  })(req, res, next);
};

export {
  postSignup,
  postLogin
}
