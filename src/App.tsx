import { Route, Routes } from 'react-router-dom';
import MainLayout from './pages/MainLayout/MainLayout';
import MainPage from './pages/MainPage/MainPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage';

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
          path='/privacy-policy'
          element={
            <MainLayout>
              <PrivacyPolicyPage />
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
