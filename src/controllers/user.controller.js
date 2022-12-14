const userServices = require('../services/user.services');
const appointmentServices = require('../services/appointment.services');

const {
  doctorPropeties,
  patientProperties,
} = require('../constants/user.properties');

const addUser = async (userData, avatarData) => {
  const user = await userServices.addUser(userData, avatarData);

  return user;
};

const getUserById = async (user_id) => {
  const user = await userServices.getUserById(user_id);

  return user;
};

const editUser = async (data) => {
  return await userServices.editUser(data);
};

const deleteUser = async (user_id) => {
  return await userServices.deleteUser(user_id);
};

const getUsers = async (query) => {
  if (query.email) {
    return await userServices.getUserByEmail(query.email);
  }

  return await userServices.getUsers(query);
};

const getUsersByDate = async (start_date, end_date, user_type) => {
  return await userServices.getUsersByDate(start_date, end_date, user_type);
};

const getAppointmentsByUserId = async (user_id) => {
  return await appointmentServices.getAppointmentsByUserId(user_id);
};

module.exports = {
  addUser,
  getUserById,
  editUser,
  deleteUser,
  getUsers,
  getUsersByDate,
  getAppointmentsByUserId,
};
