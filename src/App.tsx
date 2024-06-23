import { Route, Routes } from 'react-router-dom';
import MainLayout from './pages/MainLayout/MainLayout';
import MainPage from './pages/MainPage/MainPage';
import DisclaimerPage from './pages/DisclaimerPage/DisclaimerPage';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <MainLayout>
              <MainPage />
            </MainLayout>
          }
        />
        <Route
          path='/about'
          element={
            <MainLayout>
              <MainPage />
            </MainLayout>
          }
        />
        <Route
          path='/bars'
          element={
            <MainLayout>
              <MainPage />
            </MainLayout>
          }
        />
        <Route
          path='/contacts'
          element={
            <MainLayout>
              <MainPage />
            </MainLayout>
          }
        />
        <Route
          path='/discleimer'
          element={
            <MainLayout>
              <DisclaimerPage />
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
