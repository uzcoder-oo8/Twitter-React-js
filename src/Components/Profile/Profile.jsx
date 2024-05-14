import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Wrapper from "../Wrapper/Wrapper";

export default function Profile() {
  return (
    <div className=" container max-[1900px] flex">
      <Header />
      <div className=" border-[1px] ml-[20px]"></div>
      <Wrapper />
      <div className=" border-[1px] ml-[-0px]"></div>
      <Footer />
    </div>
  );
}
