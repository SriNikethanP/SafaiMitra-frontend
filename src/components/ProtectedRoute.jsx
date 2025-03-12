import { useUser } from "@clerk/clerk-react";
import { Loader2 } from "lucide-react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  // console.log("Auth Status:", { isSignedIn, isLoaded }); // Debugging

  if (!isLoaded) {
    return <Loader2 />; // Prevent flickering issues
  }

  return isSignedIn ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
