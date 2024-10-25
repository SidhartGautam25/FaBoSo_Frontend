// components/Header.js
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-5 bg-gray-200">
      {/* Left Side: Company Logo */}
      <div className="flex items-center font-semibold text-2xl">
        BoFoSo
        {/* <Image
          src="/company-logo.png" // replace with your logo path
          alt="Company Logo"
          width={40}
          height={40}
          className="h-10 w-auto"
        /> */}
      </div>
      <div>India's Best Song Rating Website</div>
      {/* Right Side: User Icon */}
      <div className="flex items-center">
        <div>Login</div>
        {/* <Image
          src="/user-logo.png" // replace with your user icon path
          alt="User Logo"
          width={40}
          height={40}
          className="h-10 w-auto rounded-full"
        /> */}
      </div>
    </header>
  );
};

export default Header;
