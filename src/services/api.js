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
  try {
    const { data } = await axios(str, {
      signal: controller.current.signal,
    });
    if (value && data[value].length === 0) {
      toast('There are no data for your request', { id: toastId });
    } else {
      toast.success(`Ok. We found something!`, { id: toastId });
    }
    return data;
  } catch (error) {
    toast.dismiss(toastId);
    if (error.name !== 'CanceledError') {
      toast.error('Something goes wrong. Reload page', {
        duration: 10000,
      });
    }
  }
}
