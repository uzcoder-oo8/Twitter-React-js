import Images10 from "../../Assets/Images/Images10.png";
import Imgaes9 from "../../Assets/Images/Images9.png";
import Images11 from "../../Assets/Images/Images11.png";
import Images12 from "../../Assets/Images/Images12.png";
import Images13 from "../../Assets/Images/Images13.png";
import Images14 from "../../Assets/Images/Images14.png";
import Images15 from "../../Assets/Images/Images15.png";
import Images16 from "../../Assets/Images/Images16.png";
import Images17 from "../../Assets/Images/Images17.png";
import Images18 from "../../Assets/Images/Images18.png";
import Images19 from "../../Assets/Images/Images19.png";
import Images20 from "../../Assets/Images/Images20.png";
import Images21 from "../../Assets/Images/Images21.png";
import Images22 from "../../Assets/Images/Images22.png";
import Images23 from "../../Assets/Images/Images23.png";
import Images24 from "../../Assets/Images/Images24.png";

export default function Main() {
  return (
    <section className="section_4">
      <div className="container_4">
        <main className="main w-[850px]">
          <div className="small flex">
            <h4 className=" m-[20px] font-[700]">Home</h4>
            <img
              className="small__images mt-[25px] ml-[650px]"
              src={Images10}
              alt=""
            />
          </div>
          <div className="border-[1px] "></div>
          <div className="wrap flex">
            <img className="ml-[22px] wrap__images" src={Imgaes9} alt="" />
            <div className="">
              <textarea
                className=" w-[650px] pl-[5px] pt-[5px] h-[70px] resize-none"
                placeholder="What’s happening"
              ></textarea>
              <div className="wrap__box flex gap-[22px]">
                <img src={Images11} alt="" />
                <img src={Images12} alt="" />
                <img src={Images13} alt="" />
                <img src={Images14} alt="" />
                <img src={Images15} alt="" />
              </div>
              <button className=" wrap__button w-[108px] h-[50px] rounded-[120px] ml-[550px] mt-[-30px] mb-[5px]">
                Tweet
              </button>
            </div>
          </div>
          <div className="border-[1px]"></div>
          <div className="asida">
            <div className="asida__box flex gap-[10px] mt-[30px]">
              <img className="ml-[25px] mt-[10px]" src={Images16} alt="" />
              <div className=" flex">
                <h4 className="font-[700] text-[20px]">Designsta</h4>
                <p className=" opacity-[60%] ml-[10px] mt-[5px]">
                  @inner · 25m
                </p>
              </div>
              <p className="font-[400] text-[18px] mt-[30px] ml-[-206px]">
                Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar
                zerikmadinglarmi?
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
                src={Images22}
                alt=""
              />
              <div className=" flex">
                <h4 className="font-[700] text-[20px]">cloutexhibition</h4>
                <p className=" opacity-[60%] ml-[10px] mt-[5px]">
                  @RajLahoti · 22m
                </p>
              </div>
              <p className=" w-[747px] font-[400] text-[18px] mt-[30px] ml-[-290px] mb-[20px]">
                YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
                Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini
                ko’rib hursand bo’ladi odam.
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
                src={Images23}
                alt=""
              />
              <div className=" flex">
                <h4 className="font-[700] text-[20px]">CreativePhoto</h4>
                <p className=" opacity-[60%] ml-[10px] mt-[5px]">
                  @cloutexhibition · 1h
                </p>
              </div>
              <p className=" w-[747px] font-[400] text-[18px] mt-[30px] ml-[-290px] mb-[20px]">
                Обетда..... <br />
                Кечиринглар
              </p>
            </div>
            <img className=" asida__1 ml-[100px] mb-[50px]" src={Images24} alt="" />
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
        </main>
      </div>
    </section>
  );
}
