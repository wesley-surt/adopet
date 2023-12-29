import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import users from '../models/Users.js';
import { environment } from '../../environment/env.js';
import { validateField } from '../utils/validate-field.js'

const secret = environment.SECRET_KEY ;

class UsersController {

  static login = async (req, res) => {
    const { email, password } = req.body;

    validateField(email, `Email is required - ${email}`, res);
    validateField(password, `Password is required - ${password}`, res);

    const user = await users.findOne({ email: email });
    validateField(user, 'User not find.', res);

    const checkPassword = await bcrypt.compare(password, user.password);
    validateField(checkPassword, 'Invalid password.', res);

    try {
      const userId = user._id
      const token = jwt.sign(
        {
          id: user.id
        },
        secret,
      );

      res.status(200).json({ token, userId });

    } catch(err) {
      console.log(err);
      res.status(500).json({ message: 'Server error. Try again later' })
    };
  };

  static register =  async (req, res) => {
    const { email, name, password, confirmPassword } = req.body;

    validateField(email, `Email is required - ${email}`, res);
    validateField(name, `ERROR: Name is required - ${name}`, res);
    validateField(password, `ERROR: Password is required - ${password}`, res);
    validateField(confirmPassword, `ERROR: Confirm Password is required - ${confirmPassword}`, res);

    const userExists = await users.findOne({ email: email })
    .then()
    .catch((err) => {
      console.log(err);

      res.status(400).json({
        message: `ERROR: Please, use another email - ${userExists}`,
        error: err.message
      });
    });

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = new users({
      email,
      name,
      password: passwordHash,
    });

    try {
      const result = await user.save();

      if(result)
        return res.status(200).json(result);
      else
        throw new Error(err);

    } catch(err) {
      console.log(err);
      res.status(200).json({ error: err.message});
    };

  };

  static return = async (req, res) => {
    const id = req.params.id;

    await users.findById(id, '-password')
    .then(user => res.status(200).json(user))
    .catch(err => {
      console.log(err.message);
      res.status(404).json({ message: 'User not found. ' + err.message })
    });
  };

  static exists = async (req, res) => {

    const {email} = req.body;
    validateField(email, 'Email is required', res);

    const user = await users.findOne({ email: email });

    if(user) {
      res.status(200).json({ exists: true })
    } else {
      res.status(404).json({})
    };
  }

  static delete = async (req, res) => {
    let id = req.params.id;

    users.findByIdAndDelete(id)
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err.message));
  }
}

export default UsersController;
