import { Link } from "react-router-dom";

const SimpleNavbar = () => {
  return (
    <div className="flex items-center justify-between py-[20px] px-[5%]">
      <img src="/PainPal.png" alt="Logo" className="max-h-[48px]" />
      <ul>
        <li className="text-[26px] font-bold text-white">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default SimpleNavbar;
