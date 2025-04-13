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

export const getAllAnimals = async (data) => {
  const animalsData = await axios
    .post(`/animals`, {
      searchQuery: "string",
      orderBy: 0,
      orderByField: "string",
      except: "string",
      page: 0,
      amountOnPage: 0,
      favoritesOnly: true,
      type: 0,
      minAge: 0,
      maxAge: 0,
      healthStatus: 0,
      location: "string",
      sex: true,
      isSterilized: true,
      hasPassport: true,
    })
    .then(({ data }) => data)
    .catch((e) => e);

  return animalsData;
};
