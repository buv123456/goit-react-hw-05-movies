import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers = {
  accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWEyYjVkODRiMDI5YTNkNmI3ODJjYWI0MDM5NDM2MSIsInN1YiI6IjY1MDBhNjg4ZmZjOWRlMGVkZWQ0NDM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DBpPzdh_xDNK2b4lthob9TnOTsJbTHp8xNZgeluLuGQ',
};

const controller = {};
export async function fetchMovies(str, value) {
  if (controller.current) {
    controller.current.abort();
  }
  controller.current = new AbortController();

  const toastId = toast.loading('Loading...');
  const toastIdOptions = {
    id: toastId,
    duration: 3000,
  };
  try {
    const { data } = await axios(str, {
      signal: controller.current.signal,
    });
    if (value && data[value].length === 0) {
      toast('There are no data for your request', toastIdOptions);
    } else {
      toast.success(`Ok. We found something!`, toastIdOptions);
    }
    return data;
  } catch (error) {
    toast.error('Something goes wrong. Reload page', toastIdOptions);
  }
}
