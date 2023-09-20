import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers = {
  accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWEyYjVkODRiMDI5YTNkNmI3ODJjYWI0MDM5NDM2MSIsInN1YiI6IjY1MDBhNjg4ZmZjOWRlMGVkZWQ0NDM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DBpPzdh_xDNK2b4lthob9TnOTsJbTHp8xNZgeluLuGQ',
};

export async function fetchMovies(str, page) {
  const { data } = await axios(str, { params: { page: page } });
  return data;
}
