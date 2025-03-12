import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import SignInPage from "./pages/Authorisation/Sign-in";
import SignUpPage from "./pages/Authorisation/Sign-up";
import HistoryPage from "./pages/Dashboard/HistoryPage";
import NotificationPage from "./pages/Dashboard/NotificationPage";
import UploadPage from "./pages/Dashboard/UploadPage";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />

          {/* Private Route - Dashboard */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* <Route path="/profile" element={<ProfilePage />} /> */}
          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <HistoryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <NotificationPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/upload"
            element={
              <ProtectedRoute>
                <UploadPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
