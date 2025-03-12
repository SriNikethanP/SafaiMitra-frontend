import { UserButton } from "@clerk/clerk-react";

const Header = () => {
  return (
    <nav className="flex justify-between bg-black text-white p-2 h-16">
      <h1 className="text-3xl font-semibold p-2">SafaiMitra</h1>
      <div className="flex items-center justify-center gap-2">
        <ul className="flex gap-12 items-center font-light text-md mr-4">
          <a href="/">Home</a>
          <a href="/upload">Upload</a>
          <a href="/history">History</a>
          <a href="/dashboard">Dashboard</a>
        </ul>
        <p className="font-light text-md mr-2 ">20🪙</p>
        <UserButton />
      </div>
    </nav>
  );
};

export default Header;
