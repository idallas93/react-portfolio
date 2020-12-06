import axios from "axios";

// Export an object containing methods we'll use for accessing the GitHub Jobs API

export const getNewDog = () => {
  return axios.get("https://dog.ceo/api/breeds/image/random")
}