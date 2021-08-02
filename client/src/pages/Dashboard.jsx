import React, {useState} from "react";
import bg from "../assets/images/Home_bg_1.svg";
import Logo from "../assets/images/Logo.svg";
import HomeIllustration from "../assets/images/Home_illustration.svg";
import HomeUser from "../assets/images/Home_user.svg";
import Feedbacklogo from '../assets/images/feedback-logo.svg'
import feedbackEmoji1 from '../assets/images/feedbackEmoji-1.svg'
import feedbackEmoji2 from '../assets/images/feedbackEmoji-2.svg'
import feedbackEmoji3 from '../assets/images/feedbackEmoji-3.svg'
import feedbackEmoji4 from '../assets/images/feedbackEmoji-4.svg'
import feedbackEmoji5 from '../assets/images/feedbackEmoji-5.svg'
import rangeslider from '../assets/images/rangeslider.svg'

import slide from './Dashboard.module.css'

const Dashboard = () => {
    const user = 'ganesh';
    const [feedbackform, setFeedbackForm] = useState(false)
    const [showfeedbackscreen, setShowFeedbackScreen] = useState(false)
    const rangeSliderClasses = {
        background : `url(${rangeslider})`,
        backgroundRepeat : 'no-repeat',
        outline: 'none',
        opacity: '.7',
        appearance : 'none'
    }
    return (
        <div className={["relative w-screen"]}>
      <img src={bg} alt="" className={["h-screen w-screen object-cover"]} />
      <div className={["absolute top-0 left-0 right-0 py-12"]}>
        <div className={["flex w-10/12 mx-auto justify-between"]}>
          <img src={Logo} alt="" />
          <ul className={["flex align-center items-center"]}>
            <li> <a href="#" className={['mx-3 font-light bg-white px-5 py-2 rounded rounded-full text-sm text-gray-500']}>SIGN OUT</a> </li>
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
      <img src={Feedbacklogo} alt="" className={feedbackform ? ['absolute bottom-0 right-72 transform scale-75 cursor-pointer'] : showfeedbackscreen ? [`absolute bottom-5 right-72 transform scale-75 cursor-pointer}`] : [`absolute bottom-5 right-5 transform scale-75 cursor-pointer}`]} style={{zIndex : '1'}} onClick={() =>setFeedbackForm(!feedbackform)} />
      {feedbackform && <div className={['bg-white w-80 h-3/5 shadow-lg rounded-tr-3xl rounded-bl-3xl absolute bottom-5 right-5']} style={{zIndex : '0'}}>
        <div className={['bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 w-36 py-2 px-2 mt-4 ml-4 rounded-lg flex justify-between font-light text-white']}>
            <p>Hi {user ? user : "userName"}</p>
            <span><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
        </div>
         <div className={['mx-auto w-24']}>
         <button href="#" className={['mx-3 bg-gradient-to-r from-yellow-400 via-red-500 to-red-600 rounded rounded-full text-black']} style={{fontSize: '8px', padding : '2px 4px'}}>SIGN OUT</button>
         </div>
         <div className={['sm:mt-4 md:mt-8 w-52 mt-12 mx-auto']}>
             <h3 className={['text-center text-gray-500']}>FEDDUP PORTAL</h3>
             <div className={['bg-pink-500 mt-3 w-full py-4 px-4 text-xs rounded flex justify-between font-light text-white cursor-pointer']} onClick={() => {
                 if(feedbackform) {
                    setFeedbackForm(!feedbackform)
                 }
                 setShowFeedbackScreen(!showfeedbackscreen)}
             }>
             <p className={['opacity-100']}>Feedback</p>
             </div>
             <div className={['bg-pink-500 mt-3 w-full py-4 px-4 text-xs rounded flex justify-between font-light text-white']}>
             <p className={['opacity-100']}>Suggestion</p>
             </div>
             <div className={['bg-pink-500 mt-3 w-full py-4 px-4 text-xs rounded flex justify-between font-light text-white']}>
             <p className={['opacity-100']}>Help</p>
             </div>
             <div className={['bg-pink-500 mt-3 w-full py-4 px-4 text-xs rounded flex justify-between font-light text-white']}>
             <p className={['opacity-100']}>FAQs</p>
             </div>
             <div className={['bg-pink-500 mt-3 w-full py-4 px-4 text-xs rounded flex justify-between font-light text-white cursor-pointer']} onClick={() => {
                 if(feedbackform) {
                    setFeedbackForm(!feedbackform)
                 }
                 setShowFeedbackScreen(!showfeedbackscreen)}
             }>
             <p className={['opacity-100']}>Feedback Portal</p>
             </div>
             <div className={['w-24 rounded mx-auto text-center sm:mt-8 md:mt-4 lg:mt-12 bg-red-500 text-white relative cursor-pointer']} style={{padding : '1px'}} onClick={() =>setFeedbackForm(!feedbackform)}>
             <button className={['text-xs font-thin']}>Close</button>
             <span className={['absolute text-red-500 -top-4 left-10']}><i class="fa fa-caret-up fa-2x" aria-hidden="true"></i></span>
             </div>
         </div>
      </div>}
      {showfeedbackscreen &&
        <div className={['py-7 px-5 bg-white w-72 h-2/4 shadow-lg rounded-tr-3xl rounded-bl-3xl absolute bottom-5 right-5']}>
            <h3 className={['text-center text-lg py-2']}>FEEDBACK</h3>
            <p className={['text-xs font-light mb-5']}>Will you recommend the tool to your friends</p>
            <div className={['flex justify-between px-4']}>
                <img src={feedbackEmoji1} alt="" />
                <img src={feedbackEmoji2} alt="" />
                <img src={feedbackEmoji3} alt="" />
                <img src={feedbackEmoji4} alt="" />
                <img src={feedbackEmoji5} alt="" />
            </div>
            <input type="range" name="rating" id="rating" className={['w-full mt-5 px-2']} style={rangeSliderClasses} min='1' max='5' step="1" />
            <p className={['text-xs font-light mt-2 mb-3']}>Your precious feedback...</p>
            <textarea name="" id="" cols="30" rows="6" className={['w-full border rounded']}></textarea>
            <div className={['flex']}>
            <div className={['w-28 rounded mx-auto text-center sm:mt-8 md:mt-4 lg:mt-6 bg-yellow-500 text-white relative cursor-pointer']} style={{padding : '3px'}} onClick={() =>setFeedbackForm(!feedbackform)}>
             <button className={['text-xs font-light']} onClick={() => {
                 if(feedbackform) {
                     setFeedbackForm(!feedbackform)
                 }
                 setShowFeedbackScreen(!showfeedbackscreen)}
             }>Back</button>
             <span className={['absolute text-yellow-500 -top-4 left-10']}><i class="fa fa-caret-up fa-2x" aria-hidden="true"></i></span>
             </div>
             <div className={['w-28 rounded mx-auto text-center sm:mt-8 md:mt-4 lg:mt-6 bg-green-600 text-white relative cursor-pointer']} style={{padding : '3px'}} onClick={() =>setFeedbackForm(!feedbackform)}>
             <button className={['text-xs font-light']}>Submit</button>
             <span className={['absolute text-green-600 -top-4 left-10']}><i class="fa fa-caret-up fa-2x" aria-hidden="true"></i></span>
             </div>
            </div>
        </div>
      }
    </div>
    )
}

export default Dashboard
