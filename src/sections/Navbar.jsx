import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div className="relative select-none py-[15px]">
      <header className="flex items-center gap-4 padding lg:justify-between">
        <Link to="/">
          <img
            alt="logo"
            className=" w-[130px] lg:w-[232px] "
            src="/PainPal.png"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-10 text-[18px] text-black leading-[19.53px] ">
          <Link className="hover:text-primary-200 transition-all" to="">
            Home
          </Link>
          <Link className="hover:text-primary-200 transition-all" to="">
            My Profile
          </Link>
          <Link className="hover:text-primary-200 transition-all" to="">
            About Us
          </Link>
          <Link className="hover:text-primary-200 transition-all" to="">
            Contact Us
          </Link>
          <Link to="/login">
            <button className="bg-primary-100 w-24 px-2 py-2 text-[16px] rounded-full text-white" type="button">Login</button>
          </Link>
        </nav>
        <svg
          className="text-primary-100 ml-auto cursor-pointer lg:hidden hover:text-primary-100/50 transition-all"
          fill="none"
          height="30"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <line x1="21" x2="3" y1="10" y2="10"></line>
          <line x1="21" x2="3" y1="6" y2="6"></line>
          <line x1="21" x2="3" y1="14" y2="14"></line>
          <line x1="21" x2="3" y1="18" y2="18"></line>
        </svg>
      </header>

      {isOpen && (
        <div className="min-h-screen inset-0 lg:hidden">
          <nav className="flex flex-col text-[15px] font-normal leading-[19.53px] text-primary-100 mt-6">
            <Link
              className="transition-all hover:text-primary-200 text-2xl font-medium hover:bg-primary-200/10 px-[3%] py-2 border-y"
              to=""
            >
              My Profile
            </Link>

            <Link
              className="transition-all hover:text-primary-200 text-2xl font-medium hover:bg-primary-200/10 px-[3%] py-2 border-b"
              to=""
            >
              About Us
            </Link>
            <Link
              className="transition-all hover:text-primary-200 text-2xl font-medium hover:bg-primary-200/10 px-[3%] py-2 border-b"
              to=""
            >
              Contact Us
            </Link>
            <Link
              className="transition-all hover:text-primary-200 text-2xl font-medium hover:bg-primary-200/10 px-[3%] py-2 border-b"
              to=""
            >
              Home
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
