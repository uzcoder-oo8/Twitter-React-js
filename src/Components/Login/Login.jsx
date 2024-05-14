import { useState } from "react";
import Logo from "../../Assets/Images/Logo.png";
import { NavLink } from "react-router-dom";

export default function Login() {
  const [num1, setnum1] = useState();
  const [num2, setnum2] = useState();

  function NextFn() {
    if (num1 == "sardorbekoo831" && num2 == "salomlar") {
      window.location.href = "http://localhost:3001/home";
    } else {
      alert("Please check again if the username or password you entered is incorrect");
    }
  }

  return (
    <section className="section_2">
      <div className="container_2 w-[450px] m-auto pt-16">
        <div className="login__box">
          <img className="login--logo" src={Logo} alt="" />
        </div>
        <h2 className=" text-[42px] mt-[36px] font-[900]">Log in to Twitter</h2>
        <input
          onChange={(e) => setnum1(e.target.value)}
          className="w-[450px] h-[70px] pl-[20px]  border-[2px] rounded-[6px] mt-[36px] text-[24px]"
          type="text"
          placeholder="Phone number, email address"
        />
        <input
          onChange={(e) => setnum2(e.target.value)}
          className="w-[450px] h-[70px] pl-[20px]  border-[2px] rounded-[6px] mt-[36px] text-[24px]"
          type="Password"
          placeholder="Password"
        />
        {/* <NavLink to={"/home"}> */}
        <button
          onClick={() => NextFn()}
          className="signup--button  w-[450px] h-16 mt-[25px] rounded-[76px] text-[18px] text-slate-50 font-[700] mb-[40px]"
        >
          Next
        </button>
        {/* </NavLink> */}
        <div className="login__link">
          <a
            className=" signup--link font-[400px] text-[18px] translate-y-[30px]"
            href="#"
          >
            Forgot password?
          </a>
          <a
            className=" signup--link font-[400px] text-[18px] translate-y-[30px] ml-[160px]"
            href="#"
          >
            Sign up to Twitter
          </a>
        </div>
      </div>
    </section>
  );
}
