import React from "react";
import bg from "../assets/images/Home_bg_1.svg";
import Logo from "../assets/images/Logo.svg";
import HomeIllustration from "../assets/images/Home_illustration.svg";
import HomeUser from "../assets/images/Home_user.svg";

const Home = () => {
  return (
    <div className={["relative w-screen"]}>
      <img src={bg} alt="" className={[""]} />
      <div className={["absolute top-0 left-0 right-0 py-12"]}>
        <div className={["flex w-10/12 mx-auto justify-between"]}>
          <img src={Logo} alt="" />
          <ul className={["flex align-center items-center"]}>
            <li> <a href="#" className={['mx-3 font-light bg-white px-5 py-2 rounded rounded-full text-sm text-gray-500']}>SIGN UP</a> </li>
            <li> <a href="#" className={['mx-3 font-light bg-white px-5 py-2 rounded rounded-full text-sm text-gray-500']}>SIGN UP</a> </li>
            <li> <a href="#" className={['']}> <img src={HomeUser} alt="" /> </a> </li>
          </ul>
        </div>
        <div className={['mt-16 w-10/12 mx-auto flex']}>
          <div className={['w-2/5 pr-10']}>
            <h2 className={['text-9xl font-extrabold text-white leading-0']}>Business <span className={['font-thin mt-0']}>workflow</span></h2>
            <p className={['text-2xl font-thin text-white mt-10 leading-10']}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              amet aliquam itaque harum accusantium perferendis cum quas
              expedita rerum magnam.
            </p>
          </div>
          <div>
            <img src={HomeIllustration} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
