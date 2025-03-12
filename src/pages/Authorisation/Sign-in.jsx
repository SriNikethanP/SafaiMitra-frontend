import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/clerk-react";
import { Loader2 } from "lucide-react";

const SignInPage = () => (
  <div className="flex justify-center items-center h-screen">
    <ClerkLoaded>
      <SignIn />
    </ClerkLoaded>
    <ClerkLoading>
      <Loader2 className="animate-spin size-6 text-slate" />
    </ClerkLoading>
  </div>
);

export default SignInPage;
