import Search from "../../Assets/Images/Images25.png";
import Images26 from "../../Assets/Images/Images26.png";

export default function Footer() {
  return (
    <section className="section_6">
      <footer className="footer">
        <div className="my-[20px]">
          <img
            className="footer__search ml-[45px] mt-[17px]"
            src={Search}
            alt=""
          />
          <input
            className="w-[250px] h-[55px] a rounded-[31px] pl-[40px] ml-[30px]"
            type="text"
            placeholder="Search Twitter"
          />
        </div>
        <div className="footer__boxw w-[270px] rounded-[10px] ml-[25px] pb-[10px]">
          <h3 className="font-[700] text-[24px] mt-[20px] ml-[15px]">
            Trends for you
          </h3>
          <p className="ml-[15px] opacity-[60%]">Trending in Germany</p>
          <h4 className="font-[700] text-[24px] mt-[20px] ml-[15px] mt-[0px]">
            Revolution
          </h4>
          <p className="ml-[15px] opacity-[60%]">50.4K Tweets</p>
          <p className="ml-[15px] opacity-[60%]">Trending in Germany</p>
          <h4 className="font-[700] text-[24px] mt-[20px] ml-[15px] mt-[0px]">
            Revolution
          </h4>
          <p className="ml-[15px] opacity-[60%]">50.4K Tweets</p>
          <p className="ml-[15px] opacity-[60%]">Trending in Germany</p>
          <h4 className="font-[700] text-[24px] mt-[20px] ml-[15px] mt-[0px]">
            Revolution
          </h4>
          <p className="ml-[15px] opacity-[60%] mb-[20px]">50.4K Tweets</p>
        </div>
        <div className="footer__boxw w-[270px] rounded-[10px] ml-[25px] pb-[10px] mt-[20px]">
          <h3 className="font-[700] text-[24px] mt-[20px] ml-[15px]">
            You might like
          </h3>
          <div className="pb-[20px]">
            <div className="flex">
              <img className="ml-[15px] mt-[25px]" src={Images26} alt="" />
              <div className="">
                <h5 className="font-[600] text-[18px] ml-[13px] mt-[30px]">
                  Mushtariy
                </h5>
                <p className="font-[400] opacity-[60%] text-[18px]">
                  @Mushtar565266
                </p>
              </div>
            </div>
            <div className="flex">
              <img className="ml-[15px] mt-[25px]" src={Images26} alt="" />
              <div className="">
                <h5 className="font-[600] text-[18px] ml-[13px] mt-[30px]">
                  Shuhratbek
                </h5>
                <p className="font-[400] opacity-[60%] text-[18px]">
                  @mrshukhrat
                </p>
              </div>
            </div>
            <a className="linkn ml-[15px] mt-[20px]" href="">
              Show more
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
