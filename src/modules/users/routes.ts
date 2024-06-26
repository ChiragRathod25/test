//added by smit patel
//hello i am smit patel
import express from 'express';
import {
  createUsers,
  deleteUsers,
  getUsers,
  searchUsers,
  updateUsers,
} from './controller';
import {
  validateCreateUsersRequest,
  validateDeleteUsersRequest,
  validateUpdateUsersRequest,
} from './validators';
//easy
const router = express.Router();

router.get('/users/search', searchUsers);
router.get('/users/:id', getUsers);
router.post(
  '/users/',

  validateCreateUsersRequest(),
  createUsers,
);
router.put('/users/:id', validateUpdateUsersRequest(), updateUsers);
router.delete('/users/:id', validateDeleteUsersRequest(), deleteUsers);

export default router;
