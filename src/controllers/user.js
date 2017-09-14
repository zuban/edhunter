const bluebird = require('bluebird');
const crypto = bluebird.promisifyAll(require('crypto'));
const nodemailer = require('nodemailer');
const passport = require('passport');
const User = require('../models/User');

/**
 * GET /login
 * Login page.
 */
exports.getLogin = (req, res) => {
  if (req.user) {
    return res.redirect('/contact');
  }
  res.render('account/login', {
    title: 'Login'
  });
};

/**
 * POST /login
 * Sign in using email and password.
 */
exports.postLogin = (req, res, next) => {
  req.assert('email', 'Email не валидный').isEmail();
  req.assert('password', 'Пароль не может быть пустым').notEmpty();
  req.sanitize('email').normalizeEmail({remove_dots: false});

  const errors = req.validationErrors();

  if (errors) {
    return res.status(500).send({errors: 'Не валидный пароль или email'});
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(500).send({errors: 'Пользователя с таким email не существует'});
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      res.status(200).send({success: 'Вход совершен.'});
    });
  })(req, res, next);
};
/**
 * POST /login
 * Sign in using email and password.
 */
exports.testForm = (req, res, next) => {

  console.log('-------------------');
  console.log('req.body');
  console.log(req.body);
  console.log('-------------------');
  // if (
  //   req.body.section11 === true &&
  //   req.body.section21 === true &&
  //   req.body.section32 === true &&
  //   req.body.section44 === true &&
  //   req.body.section51 === true &&
  //   req.body.section63 === true &&
  //   req.body.section71 === '2' &&
  //   req.body.section83 === true &&
  //   req.body.section93 === true &&
  //   req.body.section912 === true &&
  //   req.body.section104 === true &&
  //   req.body.section101 === true &&
  //   req.body.section111 === true &&
  //   req.body.section121 === true) {
  User.findById(req.user.id, (err, user) => {
    if (err) {
      return next(err);
    }
    user.profile.testPassed = true;
    user.save((err) => {
      if (err) {
        return next(err);
      }
      res.status(200).send({success: 'Вы прошли тест, поздравляем!'});
    });
  });
  // }
  // else {
  //   User.findById(req.user.id, (err, user) => {
  //     if (err) {
  //       return next(err);
  //     }
  //     user.profile.testCount = user.profile.testCount ? user.profile.testCount++ : 1;
  //     user.profile.testPassed = false;
  //
  //     console.log(user);
  //     user.save((err) => {
  //       if (err) {
  //         return next(err);
  //       }
  //       res.status(500).send({success: 'Вы не прошли тест. Попробуйте еще раз.'});
  //     });
  //   });
  // }
};

/**
 * GET /logout
 * Log out.
 */
exports.logout = (req, res) => {
  req.logout();
  req.session.destroy();
  res.clearCookie('__cfduid');
  res.clearCookie('connect.sid');
  res.clearCookie('io');
  res.sendStatus(200);
};

// /**
//  * GET /signup
//  * Signup page.
//  */
// exports.getSignup = (req, res) => {
//   if (req.user) {
//     return res.redirect('/contact');
//   }
//   res.render('account/signup', {
//     title: 'Create Account'
//   });
// };

/**
 * GET /signup
 * Signup page.
 */
exports.getSignupEmployer = (req, res) => {
  if (req.user) {
    return res.redirect('/contact');
  }
  res.render('account/signup-employer', {
    title: 'Create Account'
  });
};

/**
 * GET /signup
 * Signup page.
 */
exports.getSignupStudent = (req, res) => {
  if (req.user) {
    return res.redirect('/contact');
  }
  res.render('account/signup-teacher', {
    title: 'Create Account'
  });
};

/**
 * POST /signup
 * Create a new local account.
 */
exports.postSignup = (req, res, next) => {
  if (!req.body) {
    return res.status(500).send({
      errors: 'Заполните все поля'
    });
  }
  if (req.body.password.lenght < 4) {
    return res.status(500).send({
      errors: 'Пароль должен содержать как минимум 4 символа'
    });
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

  User.findOne({email: req.body.email}, (err, existingUser) => {
    if (err) {
      return next(err);
    }
    if (existingUser) {
      return res.status(500).send({errors: 'Аккаунт с данным email уже существует.'});
    }
    user.save((err) => {
      if (err) {
        return next(err);
      }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        res.sendStatus(201)
      });
    });
  });
};

/**
 * GET /account
 * Profile page.
 */
exports.getAccount = (req, res) => {
  res.render('account/profile', {
    title: 'Account Management'
  });
};

/**
 * POST /account/profile
 * Update profile information.
 */
exports.postUpdateProfile = (req, res, next) => {
  req.assert('email', 'Please enter a valid email address.').isEmail();
  req.sanitize('email').normalizeEmail({remove_dots: false});

  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/account');
  }

  User.findById(req.user.id, (err, user) => {
    if (err) {
      return next(err);
    }
    user.email = req.body.email || '';
    user.profile.name = req.body.name || '';
    user.profile.gender = req.body.gender || '';
    user.profile.location = req.body.location || '';
    user.profile.website = req.body.website || '';
    user.save((err) => {
      if (err) {
        if (err.code === 11000) {
          req.flash('errors', {msg: 'The email address you have entered is already associated with an account.'});
          return res.redirect('/account');
        }
        return next(err);
      }
      req.flash('success', {msg: 'Profile information has been updated.'});
      res.redirect('/account');
    });
  });
};

/**
 * POST /account/password
 * Update current password.
 */
exports.postUpdatePassword = (req, res, next) => {
  req.assert('password', 'Password must be at least 4 characters long').len(4);
  req.assert('confirmPassword', 'Passwords do not match').equals(req.body.password);

  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/account');
  }

  User.findById(req.user.id, (err, user) => {
    if (err) {
      return next(err);
    }
    user.password = req.body.password;
    user.save((err) => {
      if (err) {
        return next(err);
      }
      req.flash('success', {msg: 'Password has been changed.'});
      res.redirect('/account');
    });
  });
};

/**
 * POST /account/delete
 * Delete user account.
 */
exports.postDeleteAccount = (req, res, next) => {
  User.remove({_id: req.user.id}, (err) => {
    if (err) {
      return next(err);
    }
    req.logout();
    req.flash('info', {msg: 'Your account has been deleted.'});
    res.redirect('/');
  });
};

/**
 * GET /account/unlink/:provider
 * Unlink OAuth provider.
 */
exports.getOauthUnlink = (req, res, next) => {
  const provider = req.params.provider;
  User.findById(req.user.id, (err, user) => {
    if (err) {
      return next(err);
    }
    user[provider] = undefined;
    user.tokens = user.tokens.filter(token => token.kind !== provider);
    user.save((err) => {
      if (err) {
        return next(err);
      }
      req.flash('info', {msg: `${provider} account has been unlinked.`});
      res.redirect('/account');
    });
  });
};

/**
 * GET /reset/:token
 * Reset Password page.
 */
exports.getReset = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }
  User
    .findOne({passwordResetToken: req.params.token})
    .where('passwordResetExpires').gt(Date.now())
    .exec((err, user) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        req.flash('errors', {msg: 'Password reset token is invalid or has expired.'});
        return res.redirect('/forgot');
      }
      res.render('account/reset', {
        title: 'Password Reset'
      });
    });
};

/**
 * POST /reset/:token
 * Process the reset password request.
 */
exports.postReset = (req, res, next) => {
  req.assert('password', 'Пароль должен быть содержать минимум 4 символа.').len(4);
  req.assert('confirm', 'Пароли должны совпадать.').equals(req.body.password);

  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('back');
  }

  const resetPassword = () =>
    User
      .findOne({passwordResetToken: req.params.token})
      .where('passwordResetExpires').gt(Date.now())
      .then((user) => {
        if (!user) {
          req.flash('errors', {msg: 'Password reset token is invalid or has expired.'});
          return res.redirect('back');
        }
        user.password = req.body.password;
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        return user.save().then(() => new Promise((resolve, reject) => {
          req.logIn(user, (err) => {
            if (err) {
              return reject(err);
            }
            resolve(user);
          });
        }));
      });

  const sendResetPasswordEmail = (user) => {
    if (!user) {
      return;
    }
    const transporter = nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: process.env.SENDGRID_USER,
        pass: process.env.SENDGRID_PASSWORD
      }
    });
    const mailOptions = {
      to: user.email,
      from: 'noreply@edhunter.ru',
      subject: 'Ваш пароль изменился',
      text: `Это письмо - подтверждение, что пароль для ${user.email} изменился.\n`
    };
    return transporter.sendMail(mailOptions)
      .then(() => {
        req.flash('success', {msg: 'Пароль был изменен.'});
      });
  };

  resetPassword()
    .then(sendResetPasswordEmail)
    .then(() => {
      if (!res.finished) res.redirect('/');
    })
    .catch(err => next(err));
};

/**
 * GET /forgot
 * Forgot Password page.
 */
exports.getForgot = (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }
  res.render('account/forgot', {
    title: 'Forgot Password'
  });
};

/**
 * POST /forgot
 * Create a random token, then the send user an email with a reset link.
 */
exports.postForgot = (req, res, next) => {
  req.assert('email', 'Пожалуйста, введите валидный email.').isEmail();
  req.sanitize('email').normalizeEmail({remove_dots: false});

  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/forgot');
  }

  const createRandomToken = crypto
    .randomBytesAsync(16)
    .then(buf => buf.toString('hex'));

  const setRandomToken = token =>
    User
      .findOne({email: req.body.email})
      .then((user) => {
        if (!user) {
          req.flash('errors', {msg: 'Аккаунт с этим email уже существует.'});
        } else {
          user.passwordResetToken = token;
          user.passwordResetExpires = Date.now() + 3600000; // 1 hour
          user = user.save();
        }
        return user;
      });

  const sendForgotPasswordEmail = (user) => {
    if (!user) {
      return;
    }
    const token = user.passwordResetToken;
    const transporter = nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: process.env.SENDGRID_USER,
        pass: process.env.SENDGRID_PASSWORD
      }
    });
    const mailOptions = {
      to: user.email,
      from: 'noreply@edhunter.ru',
      subject: 'Восстановление пароля EdHunter',
      text: `You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n
        Please click on the following link, or paste this into your browser to complete the process:\n\n
        http://${req.headers.host}/reset/${token}\n\n
        If you did not request this, please ignore this email and your password will remain unchanged.\n`
    };
    return transporter.sendMail(mailOptions)
      .then(() => {
        req.flash('info', {msg: `Письмо с инструкциями направлено по адресу ${user.email}.`});
      });
  };

  createRandomToken
    .then(setRandomToken)
    .then(sendForgotPasswordEmail)
    .then(() => res.redirect('/forgot'))
    .catch(next);
};
