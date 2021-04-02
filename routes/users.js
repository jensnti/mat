const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');
const { body, query } = require('express-validator');
const { authByToken } = require('../middleware/auth');

router.post(
  '/',
  body('user.email').isEmail().normalizeEmail(),
  body('user.password').isLength({ min: 8 }),
  body('user.passwordConfirmation').custom((value, { req }) => {
    if (value !== req.body.user.password) {
      throw new Error('Password confirmation does not match password');
    }
    return true;
  }),
  UserController.store
); //Store user
// router.post('/users/login',UserController.loginUser)                //Login for existing user
// router.get('/user', checkJwt, UserController.show); //Gets the currently logged-in user
// router.patch('/user',authByToken,UserController.updateUserDetails)  //Updated user information for current user

router.post(
  '/login',
  body('user.email').isEmail().normalizeEmail(),
  body('user.password').isLength({ min: 8 }),
  UserController.login
);

router.get(
  '/meals',
  query('page').isInt().optional({ nullable: true }),
  authByToken,
  UserController.meals
);
router.get('/dishes', authByToken, UserController.dishes);

// router.get('/dishes/popular', authByToken, UserController.popular);
// router.get('/dishes/menu', authByToken, UserController.menu);
// router.get('/dishes/suggest', authByToken, UserController.suggest);

module.exports = router;
