import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { Container } from './App.style';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={30}
        containerStyle={{
          top: 50,
          right: 100,
          opacity: 0.9,
        }}
        toastOptions={{
          style: {
            scale: '1.5',
            fontWeight: '700',
            background: 'grey',
          },
          success: {
            style: {
              background: 'lightgreen',
            },
          },
          error: {
            style: {
              background: 'red',
            },
          },
          loading: {
            style: {
              background: 'lightblue',
            },
          },
        }}
      />
    </Container>
  );
};
