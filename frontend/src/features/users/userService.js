import axios from "axios";

const API_URL = "http://localhost:5000/api/users/";

// Get all users
const getUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Get a single user
const getUser = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + id, config);

  return response.data;
};

// Create a user
const createUser = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, userData, config);

  return response.data;
};

// Create a user
const updateUser = async (userData, token) => {
  const { id, formData } = userData;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + id, formData, config);

  return response.data;
};

// Delete a user
const deleteUser = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + id, config);

  return response.data;
};

// Delete multiple users
const deleteUsers = async (ids, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL, { data: { ids } }, config);

  return response.data;
};

const userService = {
  createUser,
  updateUser,
  getUsers,
  getUser,
  deleteUser,
  deleteUsers,
};

export default userService;
