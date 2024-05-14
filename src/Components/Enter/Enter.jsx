import Logo from "../../Assets/Images/Logo.png";
import { NavLink } from "react-router-dom";
export default function Enter() {
  return (
    <div className=" w-[500px] m-auto">
      <img className="mt-[50px] ml-[200px]" src={Logo} alt="" />

      <NavLink to={"/login"}>
        <button className=" Enter w-[300px] h-[50px] rounded-[55px] mt-[50px] ml-[70px]">
          Login
        </button>
      </NavLink>
      <br />
      <NavLink to={"/signup"}>
        <button className=" Enter w-[300px] h-[50px] rounded-[55px] mt-[50px] ml-[70px]">
          Sign up
        </button>
      </NavLink>
    </div>
  );
}
