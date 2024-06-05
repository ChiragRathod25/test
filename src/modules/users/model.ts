import mongoose from 'mongoose';

const { Schema } = mongoose;

const usersSchema = new Schema(
  {},
  {
    timestamps: true,
  },
);
// edit by harsh.
const Users = mongoose.model('Users', usersSchema);

export default Users;