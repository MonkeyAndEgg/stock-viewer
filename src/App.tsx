import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { useAuthContext } from './hooks/useAuthContext';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Stock from './pages/Stock/Stock';
import { theme } from './theme';

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <ThemeProvider theme={theme}>
      {authIsReady && <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={
            <ProtectedRoute condition={user} redirectUrl="/login">
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/stock" element={
            <ProtectedRoute condition={user} redirectUrl="/login">
              <Stock />
            </ProtectedRoute>
          } />
          <Route path="/signup" element={
            <ProtectedRoute condition={!user} redirectUrl="/">
              <Signup />
            </ProtectedRoute>
          } />
          <Route path="/login" element={
            <ProtectedRoute condition={!user} redirectUrl="/">
              <Login />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>}
    </ThemeProvider>
  );
}

export default App;
