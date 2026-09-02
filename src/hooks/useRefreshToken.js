import {axiosPrivate} from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const res = await axiosPrivate.post('/refresh', {});
    setAuth((prev) => {
      return {
        ...prev,
        accessToken: res.data.token,
      };
    });
    return res.data.token;
  };
  return refresh;
};

export default useRefreshToken;
