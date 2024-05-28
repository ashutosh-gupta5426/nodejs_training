const mongoose = require("mongoose");
const userModel = require("../mongodb/user_schema");

const createUser = async function (req, res) {
  let userData = req.body;

  let savedData = await userModel.create(userData);
    return res
      .status(201)
      .send({
        status: true,
        message: "User Created Successfully",
        data: savedData,
      });
}

const updateUser = async function (req, res) {
  let userData = req.body;
  let phone = req.params.phone;

  let updatedData = await userModel.findOneAndUpdate({phone}, userData, {
    new: true,
  });

  return res.status(200).send({
    status: true,
    message: "User details updated successfully",
    data: updatedData,
  });
}

const getUserData = async function (req, res) {
  let phone = req.params.phone;

  let userData = await userModel.findOne({phone});

  res.status(200).send({
    status: true,
    message: "User details fetched successfully",
    data: userData,
  });
}

const getAllUsers = async function (req, res) {
  let usersData = await userModel.find();

  res.status(200).send({
    status: true,
    message: "User List fetched successfully",
    data: usersData,
  });
}

const deleteUser = async function (req, res) {
  let phone = req.params.phone;

  await userModel.deleteOne({phone});
  res.status(204).send();
}

module.exports = {createUser, updateUser, getUserData, getAllUsers, deleteUser};