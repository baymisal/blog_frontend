import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://blog-backend-1-ay9b.onrender.com/api', // updated from localhost
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;



// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:8000/api/blog',
//   withCredentials: true,
// });


// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default axiosInstance;
