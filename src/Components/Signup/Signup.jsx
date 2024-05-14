import { NavLink } from "react-router-dom";
import Logo from "../../Assets/Images/Logo.png";
import { useState } from "react";

export default function Signup() {

  const [ signup , setSignup ] = useState()
  const [ signup1 , setSignup1 ] = useState()

  function signupFn(){
    if(signup=="sardorbekoo831"&&signup1=="940302984"){
      window.location.href = "http://localhost:3001/home";
    }else{
      alert("Malumot yozing")
    }
  }
  
  return (
    <section className="section_1">
      <div className="container_1 max-w-3xl m-auto">
        <img className=" ml-80 mt-8" src={Logo} alt="" />
        <h2 className=" mt-11 ml-10 font-bold font-sans text-3xl">
          Create an account
        </h2>
        <input
        onChange={(evt)=>setSignup(evt.target.value)}
          className=" w-[670px] h-[70px] ml-[40px] mt-[35px] pl-[20px] font-[400px] border-[2px] rounded-[6px] text-[18px]"
          type="text"
          placeholder="Name"
        />
        <input
        onChange={(evt)=>setSignup1(evt.target.value)}
          className=" w-[670px] h-[70px] ml-[40px] mt-[35px] pl-[20px] font-[400px] border-[2px] rounded-[6px] text-[18px]"
          type="number"
          placeholder="Phone number"
        />
        <br />
        <div className="signup pl-[40px] pt-[30px]">
          <a
            className=" signup--link font-[400px] text-[18px] translate-y-[30px]"
            href="#"
          >
            Use email
          </a>
        </div>
        <h4 className=" font-[700] mt-[40px] ml-[40px] text-[18px]">
          Date of birth
        </h4>
        <p className=" w-[670px] mt-[10px] ml-[40px] font-[400]">
          Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
          Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim
          nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra
          dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
        </p>
        <select className=" w-[312px] h-[70px] border-[2px] rounded-[6px] text-[24px] mt-[20px] ml-[40px] text-slate-400">
          <option value="">Month</option>
          <option value="">Month</option>
          <option value="">Month</option>
          <option value="">Month</option>
          <option value="">Month</option>
          <option value="">Month</option>
          <option value="">Month</option>
          <option value="">Month</option>
        </select>
        <select className=" w-[159px] h-[70px] border-[2px] rounded-[6px] text-[24px] mt-[20px] ml-[40px] text-slate-400">
          <option value="">Day</option>
          <option value="">Day</option>
          <option value="">Day</option>
          <option value="">Day</option>
          <option value="">Day</option>
          <option value="">Day</option>
          <option value="">Day</option>
        </select>
        <select className=" w-[159px] h-[70px] border-[2px] rounded-[6px] text-[24px] mt-[20px] ml-[40px] text-slate-400 mb-[50px]">
          <option value="">Year</option>
          <option value="">2008</option>
          <option value="">Year</option>
          <option value="">Year</option>
          <option value="">Year</option>
          <option value="">Year</option>
          <option value="">Year</option>
        </select>
        {/* <NavLink to={"/home"}> */}
          <button onClick={()=>signupFn()} className="signup--button  w-[670px] h-16 ml-[40px] rounded-[76px] text-[18px] text-slate-50 font-[700] mb-[40px]">
            Next
          </button>
        {/* </NavLink> */}
      </div>
    </section>
  );
}
