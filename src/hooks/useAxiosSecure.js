import axios from "axios";

const useAxiosSecure = () => {
  const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
  });

  return axiosSecure;
};

export default useAxiosSecure;
