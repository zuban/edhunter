const passport = require('passport');
const request = require('request');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const OAuthStrategy = require('passport-oauth').OAuthStrategy;
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy;
const VKontakteStrategy = require('passport-vkontakte').Strategy;

const User = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

/**
 * Sign in using Email and Password.
 */
passport.use(
  new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email: email.toLowerCase() }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { msg: `Email ${email} не найден.` });
      }
      user.comparePassword(password, (err, isMatch) => {
        if (err) {
          return done(err);
        }
        if (isMatch) {
          return done(null, user);
        }
        return done(null, false, { msg: 'Не корректный email или пароль.' });
      });
    });
  }),
);

// /**
//  * OAuth Strategy Overview
//  *
//  * - User is already logged in.
//  *   - Check if there is an existing account with a provider id.
//  *     - If there is, return an error message. (Account merging not supported)
//  *     - Else link new OAuth account with currently logged-in user.
//  * - User is not logged in.
//  *   - Check if it's a returning user.
//  *     - If returning user, sign in and we are done.
//  *     - Else check if there is an existing account with user's email.
//  *       - If there is, return an error message.
//  *       - Else create a new account.
//  */
//
/**
 * Sign in with Facebook.
 */
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      callbackURL: '/auth/facebook/callback',
      profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
      passReqToCallback: true,
    },
    (req, accessToken, refreshToken, profile, done) => {
      if (req.user) {
        User.findOne({ facebook: profile.id }, (err, existingUser) => {
          if (err) {
            return done(err);
          }
          if (existingUser) {
            req.session.flash = {
              level: 'error',
              message:
                'У вас уже есть аккаунт Facebook, который привязан к вам. Войдите через этот аккаунт, или удалите привязку.',
            };
            done(err);
          } else {
            User.findById(req.user.id, (err, user) => {
              if (err) {
                return done(err);
              }
              user.facebook = profile.id;
              user.tokens.push({ kind: 'facebook', accessToken });
              user.profile.name =
                user.profile.name ||
                `${profile.name.givenName} ${profile.name.familyName}`;
              user.profile.gender = user.profile.gender || profile._json.gender;
              user.profile.picture =
                user.profile.picture ||
                `https://graph.facebook.com/${profile.id}/picture?type=large`;
              user.save(err => {
                req.session.flash = {
                  level: 'error',
                  message:
                    'У вас уже есть аккаунт Facebook, который привязан к вам. Войдите через этот аккаунт, или удалите привязку.',
                };
                done(err, user);
              });
            });
          }
        });
      } else {
        User.findOne({ facebook: profile.id }, (err, existingUser) => {
          if (err) {
            return done(err);
          }
          if (existingUser) {
            return done(null, existingUser);
          }
          User.findOne(
            { email: profile._json.email },
            (err, existingEmailUser) => {
              if (err) {
                return done(err);
              }
              if (existingEmailUser) {
                req.session.flash = {
                  level: 'error',
                  message:
                    'Пользователь с таким email уже существует. Возможно, вы уже входили на сайт под другой учетной записью.',
                };
                done(err);
              } else {
                const user = new User();
                user.email = profile._json.email;
                user.facebook = profile.id;
                user.tokens.push({ kind: 'facebook', accessToken });
                user.profile.name = `${profile.name.givenName} ${profile.name
                  .familyName}`;
                user.profile.gender = profile._json.gender;
                user.profile.picture = `https://graph.facebook.com/${profile.id}/picture?type=large`;
                user.profile.location = profile._json.location
                  ? profile._json.location.name
                  : '';
                user.save(err => {
                  done(err, user);
                });
              }
            },
          );
        });
      }
    },
  ),
);

/**
 * Sign in with Google.
 */
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: '/auth/google/callback',
      passReqToCallback: true,
    },
    (req, accessToken, refreshToken, profile, done) => {
      if (req.user) {
        User.findOne({ google: profile.id }, (err, existingUser) => {
          if (err) {
            return done(err);
          }
          if (existingUser) {
            req.session.flash = {
              level: 'error',
              message:
                'У вас уже есть аккаунт Google, который привязан к вам. Войдите через этот аккаунт, или удалите привязку.',
            };
            console.log('----------');
            console.log('error google');
            done(err);
          } else {
            User.findById(req.user.id, (err, user) => {
              if (err) {
                return done(err);
              }
              user.google = profile.id;
              user.tokens.push({ kind: 'google', accessToken });
              user.profile.name = user.profile.name || profile.displayName;
              user.profile.gender = user.profile.gender || profile._json.gender;
              user.profile.picture =
                user.profile.picture || profile._json.image.url;
              user.save(err => {
                req.session.flash = {
                  level: 'error',
                  message: 'Аккаунт Google прилинкован к вашей учетной записи.',
                };
                console.log('----------');
                console.log('error google');
                done(err, user);
              });
            });
          }
        });
      } else {
        User.findOne({ google: profile.id }, (err, existingUser) => {
          if (err) {
            return done(err);
          }
          if (existingUser) {
            return done(null, existingUser);
          }
          User.findOne(
            { email: profile.emails[0].value },
            (err, existingEmailUser) => {
              if (err) {
                return done(err);
              }
              if (existingEmailUser) {
                req.session.flash = {
                  level: 'error',
                  message:
                    'Пользователь с таким email уже существует. Возможно, вы уже входили на сайт под другой учетной записью.',
                };
                console.log('----------');
                console.log('error google');
                done(err);
              } else {
                const user = new User();
                user.email = profile.emails[0].value;
                user.google = profile.id;
                user.tokens.push({ kind: 'google', accessToken });
                user.profile.name = profile.displayName;
                user.profile.gender = profile._json.gender;
                user.profile.picture = profile._json.image.url;
                user.save(err => {
                  done(err, user);
                });
              }
            },
          );
        });
      }
    },
  ),
);
/**
 * Sign in with VK.
 */
passport.use(
  new VKontakteStrategy(
    {
      clientID: process.env.VK_ID,
      clientSecret: process.env.VK_SECRET,
      callbackURL: 'http://www.edhunter.ru/auth/vkontakte/callback',
      scope: ['email'],
      profileFields: ['email', 'city'],
    },
    (accessToken, refreshToken, params, profile, done) => {
      process.nextTick(() => {
        User.findOne({ vkontakte: profile.id }, (err, existingUser) => {
          if (err) {
            return done(err);
          }
          if (existingUser) {
            return done(null, existingUser);
          }
          User.findOne({ email: params.email }, (err, existingEmailUser) => {
            if (err) {
              return done(err);
            }
            if (existingEmailUser) {
              // req.session.flash('errors', { msg: 'There is already an account using this email address. Sign in to that account and link it with Google manually from Account Settings.' });
              done(err);
            } else {
              const user = new User();
              user.email = params.email;
              user.vkontakte = profile.id;
              user.tokens.push({ kind: 'vkontakte', accessToken });
              user.profile.name = profile.displayName;
              user.profile.gender = profile._json.gender;
              user.profile.picture = profile._json.photo;
              user.save(err => {
                done(err, user);
              });
            }
          });
        });
      });
    },
  ),
);

/**
 * Login Required middleware.
 */
exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

/**
 * Authorization Required middleware.
 */
exports.isAuthorized = (req, res, next) => {
  const provider = req.path.split('/').slice(-1)[0];
  const token = req.user.tokens.find(token => token.kind === provider);
  if (token) {
    next();
  } else {
    res.redirect(`/auth/${provider}`);
  }
};
