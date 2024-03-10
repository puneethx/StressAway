import React from 'react'
import Home1 from "../../assets/home1.svg";
import "./welcome.scss"
import vision from "../../assets/vision.svg";
import care from "../../assets/care.svg";
import idea from "../../assets/idea.svg";
import goal from "../../assets/goal.svg";

const welcome = () => {
  return (
    <div className='welcome'>
      <div className="top">
        <div className="left">
          <img src={Home1} alt="" />
        </div>
        <div className="right">
          <div className="righttop">
            <p className='content'>
              Stress Away is a cutting-edge mental health assist app designed to provide accessible and engaging support tools for your mental well-being. Our mission is to empower individuals to take control of their mental health journey with personalized and effective resources.
            </p>
          </div>
          <div className="rightbottom">
            <div className="sUp">
              <button className='signUp'>Sign Up</button>
            </div>
            <div className="sIn">
              <button className='signIn'>Sign In</button>
            </div>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <img src={vision} alt="" />
          <p className='title'>OUR VISION</p>
          <p className='bod'>
            "At Stress Away, we envision a world where mental well-being is seamlessly integrated into daily life, empowering individuals globally. Our mission is to foster a culture that celebrates mental health on par with physical well-being, creating a resilient society that values holistic well-being.
          </p>
        </div>
        <div className="card">
          <img src={goal} alt="" />
          <p className='title'>OUR MISSION</p>
          <p className='bod'>
            "Stress Away's mission is to provide accessible and empowering mental health support tools. We strive to foster a culture that prioritizes mental well-being alongside physical health, offering innovative resources for individuals to navigate challenges with resilience and connection."
          </p>
        </div>
        <div className="card">
          <img src={care} alt="" />
          <p className='title'>OUR VALUES</p>
          <p className="bod">
            "At Stress Away, our core values are accessibility and empowerment in mental health. We are committed to fostering a supportive community that celebrates and prioritizes holistic well-being."
          </p>
        </div>
        <div className="card">
          <img src={idea} alt="" />
          <p className='title'>OUR IDEA</p>
          <p className="bod">
            "Stress Away is a holistic mental health companion, prioritizing accessibility and empowerment. We aim to seamlessly integrate well-being into daily life, fostering a global community that celebrates mental health with resilience and support."
          </p>
        </div>
      </div>
    </div>
  )
}

export default welcome