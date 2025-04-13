import axios from "./axiosConfig.js";

export const authSignIn = async (email, password) => {
  try {
    const userData = await axios.post(`auth/login`, {
      email,
      password,
    });
    // return !_.isEmpty(userData) ? userData : null;
    return userData;
  } catch (error) {
    throw new Error(error?.response?.data?.message);
  }
};

export const getCategoriesForModal = async (alias) => {
  const categoriesData = await axios
    .get(`/category`, {
      params: {
        data: alias,
      },
    })
    .then(({ data }) => data)
    .catch((e) => e);

  return categoriesData;
};
