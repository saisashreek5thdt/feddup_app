import React from 'react'

import Registerbg from '../assets/images/Register_bg.svg'
import RegisterLeftIcon from '../assets/images/register_left_icon.svg'
import RegisterRightOne from '../assets/images/register_right-1.svg'
import RegisterRightTwo from '../assets/images/register_right-2.svg'
import Registerusericon from '../assets/images/register-user-icon.svg'
import Logo from "../assets/images/Logo.svg";
import usericon from '../assets/images/user-icon.svg';
import emailicon from '../assets/images/email-icon.svg';
import passwordicon from '../assets/images/password-icon.svg';
import facebook from '../assets/images/facebook.svg'
import instagram from '../assets/images/instagram.svg'
import googleplus from '../assets/images/googleplus.svg'
import linkedin from '../assets/images/linkedin.svg'
import twitter from '../assets/images/twitter.svg'

import {Link} from 'react-router-dom'

const Register = () => {
    return (
        <div className={['relative overflow-hidden']}>
            <div className={['absolute right-20 flex flex-col justify-center top-12 ']}>
                <img src={Logo} alt="" className={['mb-2 transform scale-75']} />
                <Link to="dashboard"><button className={['py-2 px-8 text-sm border font-light rounded-full']}>SKIP</button></Link>
            </div>
            <div className={['w-3/12 mx-auto pt-32']} style={{zIndex : '1000'}}>
                <div className={['flex justify-center']}>
                <img src={Registerusericon} alt="" className={['transform scale-75']} />
                </div>
                <form className={[""]}>
                    <div className={['flex border py-4 px-5 rounded rounded-full mb-10']}>
                        <img src={usericon} alt="" className={['mr-5 transform']} />
                        <input type="text" name="" id="" placeholder="Fullname" className={["bg-transparent w-full focus:outline-none border-0"]} />
                    </div>
                    <div className={['flex border py-4 px-5 rounded rounded-full mb-10']}>
                        <img src={emailicon} alt="" className={['mr-5 transform scale-75']} />
                        <input type="text" name="" id="" placeholder="Email" className={["bg-transparent w-full focus:outline-none border-0"]} />
                    </div>
                    <div className={['flex border py-4 px-5 rounded rounded-full mb-10']}>
                        <img src={passwordicon} alt="" className={['mr-5 transform scale-75']} />
                        <input type="text" name="" id="" placeholder="Password" className={["bg-transparent w-full focus:outline-none border-0"]} />
                    </div>
                    <div className={['flex border py-4 px-5 rounded rounded-full mb-10']}>
                        <img src={passwordicon} alt="" className={['mr-5 transform scale-75']} />
                        <input type="text" name="" id="" placeholder="Re-Password" className={["bg-transparent w-full focus:outline-none border-0"]} />
                    </div>
                    <div className={['flex justify-center mt-16']}>
                        <button className={['py-2 px-8 text-sm font-light border rounded-full']}>SIGN IN</button>
                    </div>
                </form>
            </div>
            <img src={Registerbg} alt="" className={['absolute scale-125 transform object-contain']} style={{top : '520px', zIndex: '-1'}} />
            <img src={RegisterLeftIcon} alt="" className={['absolute transform scale-90 -left-10']} style={{top : '300px', zIndex: '-1'}} />
            <img src={RegisterRightOne} alt="" className={['absolute transform scale-90 right-10']} style={{top : '300px', zIndex: '0'}} />
            <img src={RegisterRightTwo} alt="" className={['absolute transform scale-90 -right-10']} style={{top : '300px', zIndex: '0'}} />
            <div className={["flex justify-center pt-16 pb-12"]}>
                <img src={facebook} alt="" className={['transform scale-75']} />
                <img src={instagram} alt="" className={['transform scale-75']} />
                <img src={googleplus} alt="" className={['transform scale-75']} />
                <img src={linkedin} alt="" className={['transform scale-75']} />
                <img src={twitter} alt="" className={['transform scale-75']} />
            </div>
        </div>
    )
}

export default Register
