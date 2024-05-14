import Images27 from "../../Assets/Images/Images27.png";
import Images29 from "../../Assets/Images/Images29.png";
import Images30 from "../../Assets/Images/Images30.png";
import LinkIcon from "../../Assets/Images/Link.png";
import Images31 from "../../Assets/Images/Images31.png";
import Images32 from "../../Assets/Images/Images32.png";
import Images17 from "../../Assets/Images/Images17.png";
import Images18 from "../../Assets/Images/Images18.png";
import Images19 from "../../Assets/Images/Images19.png";
import Images20 from "../../Assets/Images/Images20.png";
import Images21 from "../../Assets/Images/Images21.png";
import Images22 from "../../Assets/Images/Images22.png";
import Images23 from "../../Assets/Images/Images23.png";
import Images24 from "../../Assets/Images/Images24.png";
import Rel from "../../Assets/Images/Rel.png";

export default function Wrapper() {
  return (
    <section className="section_6">
      <main className="main">
        <div className=" flex">
          <img
            className="ml-[31px] mt-[47px] w-[20px] h-[20px]"
            src={Images27}
            alt=""
          />
          <div className=" ml-[40px] mb-[15px]">
            <h4 className="font-[700] text-[20px] mt-[22px]">Bobur</h4>
            <p className=" opacity-[60%]">1,070 Tweets</p>
          </div>
        </div>
        <div className="wrapper__item"></div>
        <div className="flex">
          <img
            className="mt-[-80px] ml-[25px]"
            width={150}
            src={Images29}
            alt=""
          />
          <button className="border-[1px] w-[120px] h-[44px] rounded-[50px] font-[600] text-[18px] mt-[20px] ml-[530px]">
            Edit profile
          </button>
        </div>
        <div className="">
          <h4 className="font-[700] text-[24px] ml-[25px] mt-[10px]">Bobur</h4>
          <p className=" opacity-[60%] ml-[25px] mt-[-7px]">@bobur_mavlonov</p>
          <p className="ml-[25px]">
            UX&UI designer at{" "}
            <a className="cc" href="">
              {" "}
              @abutechuz
            </a>
          </p>
          <ul className="flex">
            <li className="flex gap-[10px] ml-[25px]">
              <img width={24} height={24} src={Images30} alt="" />
              <p className=" opacity-[60%]">Mashag’daman</p>
            </li>
            <li className="flex gap-[10px] ml-[25px]">
              <img width={24} height={24} src={LinkIcon} alt="" />
              <a href="" className="cc">
                t.me/boburjon_mavlonov
              </a>
            </li>
            <li className="flex gap-[10px] ml-[25px]">
              <img width={24} height={24} src={Images31} alt="" />
              <p className=" opacity-[60%]">Born November 24, 2000</p>
            </li>
            <li className="flex gap-[10px] ml-[25px]">
              <img width={24} height={24} src={Images32} alt="" />
              <p className=" opacity-[60%]">Joined May 2020</p>
            </li>
          </ul>
          <ul className="flex gap-[30px] mt-[10px] ml-[25px]">
            <li>
              <span className="font-[700]">67</span> Following
            </li>
            <li>
              <span className="font-[700]">47</span> Followers
            </li>
          </ul>
          <ul className="flex gap-[170px] ml-[25px] mt-[10px]">
            <li className="font-[700]">Tweets</li>
            <li className="">Tweets & replies</li>
            <li className="">Media</li>
            <li className="">Likes</li>
          </ul>
        </div>
        <div className=" border-[1px] mt-[20px]"></div>
        <div className="asida">
          <div className="asida__box flex gap-[10px] mt-[30px]">
            <img
              className="asida__img ml-[25px] mt-[10px]"
              src={Images29}
              alt=""
            />
            <div className=" flex">
              <h4 className="font-[700] text-[20px]">Bobur</h4>
              <p className=" opacity-[60%] ml-[10px] mt-[5px]">
                @bobur_mavlonov · Apr 1
              </p>
            </div>
            <p className=" w-[747px] font-[400] text-[18px] mt-[30px] ml-[-260px] mb-[20px]">
              4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish
              uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va
              jismoniy holatni normallashtirishni reja qildim
            </p>
          </div>
          <ul className=" flex gap-[40px] ml-[100px] mb-[21px]">
            <li className="flex">
              <img src={Images17} alt="" />
              10
            </li>
            <li className="flex">
              <img src={Images18} alt="" />1
            </li>
            <li className="flex">
              <img src={Images19} alt="" />8
            </li>
            <li className="flex">
              <img src={Images20} alt="" />
            </li>
            <li className="flex">
              <img src={Images21} alt="" />
            </li>
          </ul>
        </div>
        <div className="border-[1px] "></div>
        <div className="asida">
          <div className="asida__box flex gap-[10px] mt-[30px]">
            <img
              className="asida__img ml-[25px] mt-[10px]"
              src={Images29}
              alt=""
            />
            <div className=" flex">
              <h4 className="font-[700] text-[20px]">Bobur</h4>
              <p className=" opacity-[60%] ml-[10px] mt-[5px]">
                @bobur_mavlonov · Apr 1
              </p>
            </div>
            <p className=" w-[747px] font-[400] text-[18px] mt-[30px] ml-[-260px] mb-[20px]">
              A bo'pti maskamasman
            </p>
          </div>
          <img
            className=" asida__1 ml-[100px] mb-[50px]"
            src={Rel}
            alt=""
          />
          <ul className=" flex gap-[40px] ml-[100px] mb-[21px]">
            <li className="flex">
              <img src={Images17} alt="" />
              10
            </li>
            <li className="flex">
              <img src={Images18} alt="" />1
            </li>
            <li className="flex">
              <img src={Images19} alt="" />8
            </li>
            <li className="flex">
              <img src={Images20} alt="" />
            </li>
            <li className="flex">
              <img src={21} alt="" />
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
}
