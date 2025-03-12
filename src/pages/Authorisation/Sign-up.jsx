import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/clerk-react";
import { Loader2 } from "lucide-react";

const SignUpPage = () => (
  <div className="flex justify-center items-center h-screen">
    <ClerkLoaded>
      <SignUp />
    </ClerkLoaded>
    <ClerkLoading>
      <Loader2 />
    </ClerkLoading>
  </div>
);

export default SignUpPage;
