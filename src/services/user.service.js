import axios from "axios";

const API_URL = "http://localhost:3000/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getFormateurBoard = () => {
  return axios.get(API_URL + "formateur");
};

const getAssistantBoard = () => {
  return axios.get(API_URL + "assistant");
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin");
};

const UserService = {
  getPublicContent,
  getFormateurBoard,
  getAssistantBoard,
  getAdminBoard,
}

export default UserService;
