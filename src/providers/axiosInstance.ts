import axios from 'axios';

const token = 'VPmo2U661gTnhMVx0pc0-CtahNg_aqS5DuneLtYfO1o';

const axiosInstance = axios.create({
  headers: { Accept: 'application/json' },
});

axiosInstance.interceptors.request.use(async config => {
  if (token != null) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
