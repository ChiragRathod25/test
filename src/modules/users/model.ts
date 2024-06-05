import mongoose from 'mongoose';

const { Schema } = mongoose;

const usersSchema = new Schema(
  {},
  {
    timestamps: true,
  },
);

const Users = mongoose.model('Users', usersSchema);

export default Users;

//This comment is made by Chirag 