import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

export default function Home() {
  return (
    <div className="container  flex">
      <Header />
      <div className=" border-[1px] ml-[10px]"></div>
      <Main />
      <div className=" border-[1px]"></div>
      <Footer />
    </div>
  );
}
