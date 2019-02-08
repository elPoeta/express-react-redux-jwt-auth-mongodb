const auth = require('../controllers/auth');
const passport = require('passport');
const passportService = require('../services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

module.exports = app => {
    app.get('/', requireAuth, (req, res, next) => {
        res.send({ hi: '@elPoeta' });
    });
    app.post('/signin', requireSignIn, auth.signIn);
    app.post('/signup', auth.signUp);
};
