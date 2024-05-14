import Logo from "../../Assets/Images/Logo.png";
import Images1 from "../../Assets/Images/Images1.png";
import Images2 from "../../Assets/Images/Images2.png";
import Images3 from "../../Assets/Images/Images3.png";
import Images4 from "../../Assets/Images/Images4.png";
import Images5 from "../../Assets/Images/Images5.png";
import Images6 from "../../Assets/Images/Images6.png";
import Images7 from "../../Assets/Images/Images7.png";
import Images8 from "../../Assets/Images/Images8.png";
import Images9 from "../../Assets/Images/Images9.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <section className="section_3">
      <div className="container_3 w-[300px] ">
        <header className="header">
          <div className="header__logo ml-[30px] mt-[31px]">
            <img width={40} height={33} src={Logo} alt="" />
          </div>
          <ul className="header__list">
            <NavLink to={"/home"}>
              <li className="mt-[50px] w-[100px] ml-[70px]">
                <a href="#" className="-link flex gap-3 font-[600] text-[18px]">
                  <img src={Images1} alt="" />
                  Home
                </a>
              </li>
            </NavLink>
            <NavLink to={"/explore"}>
              <li className="mt-[50px] w-[100px] ml-[70px] mt-[30px]">
                <a href="#" className="-link flex gap-3 font-[600] text-[18px]">
                  <img src={Images2} alt="" />
                  Explore
                </a>
              </li>
            </NavLink>
            <NavLink to={"/notifications"}>
              <li className="mt-[50px] w-[100px] ml-[70px] mt-[30px]">
                <a href="#" className="-link flex gap-3 font-[600] text-[18px]">
                  <img src={Images3} alt="" />
                  Notifications
                </a>
              </li>
            </NavLink>
            <NavLink to={"/messages"}>
              <li className="mt-[50px] w-[100px] ml-[70px] mt-[30px]">
                <a href="#" className="-link flex gap-3 font-[600] text-[18px]">
                  <img src={Images4} alt="" />
                  Messages
                </a>
              </li>
            </NavLink>
            <NavLink to={"/bookmarks"}>
              <li className="mt-[50px] w-[100px] ml-[70px] mt-[30px]">
                <a href="#" className="-link flex gap-3 font-[600] text-[18px]">
                  <img src={Images5} alt="" />
                  Bookmarks
                </a>
              </li>
            </NavLink>
            <NavLink to={"/lists"}>
              <li className="mt-[50px] w-[100px] ml-[70px] mt-[30px]">
                <a href="#" className="-link flex gap-3 font-[600] text-[18px]">
                  <img src={Images6} alt="" />
                  Lists
                </a>
              </li>
            </NavLink>
            <NavLink to={"/profile"}>
              <li className="mt-[50px] w-[100px] ml-[70px] mt-[30px]">
                <a href="#" className="-link flex gap-3 font-[600] text-[18px]">
                  <img src={Images7} alt="" />
                  Profile
                </a>
              </li>
            </NavLink>
            <li className="mt-[50px] w-[100px] ml-[70px] mt-[30px]">
              <a href="#" className="-link flex gap-3 font-[600] text-[18px]">
                <img src={Images8} alt="" />
                More
              </a>
            </li>
          </ul>
          <button className="home__button w-[230px] h-[55px] rounded-[27px] fonts-[700] text-[18px] ml-[50px] mt-[30px]">
            Tweet
          </button>

          <div className=" flex gap-[10px] ml-[80px] mt-[270px]">
            <img src={Images9} alt="" />
            <div className="">
              <p className=" fonts-[600] text-[18px]">Bobur</p>
              <p className=" fonts-[600] text-[18px] opacity-[60%]">
                @bobur_mavlonov
              </p>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}
