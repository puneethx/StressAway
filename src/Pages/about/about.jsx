import React from 'react'
import "./about.scss"
import charan from "../../assets/charan.svg"
import puneeth from "../../assets/puneeth.svg"
import aniesh from "../../assets/aniesh.svg"
import rion from "../../assets/rion.svg"
import insta from "../../assets/instagram.svg"
import github from "../../assets/github.svg"
import twitter from "../../assets/twitter.svg"
import linkedin from "../../assets/linkedin.svg"

const about = () => {
  return (
    <div className='about'>
      <h1>Meet The Team</h1>
      <div className='cards'>
        <div className="card">
          <img className='main' src={rion} alt="" />
          <p className='name'>Rion Sebastian Dsilva</p>
          <p className='content'>"Hi, I'm Rion Sebastian D'Silva, a Computer Science Engineering student 
            at VIT-AP University. Proficient in Java, HTML5, CSS3, Python, and more, 
            I seamlessly blend technology with creativity using Adobe After Effects 
            and Figma. From data science to cloud deployment, I'm passionate about 
            exploring the diverse facets of the digital world. Let's connect and 
            delve into the exciting intersection of technology and creativity!"</p>
          <div className='icons'>
            <img src={insta} alt="" />
            <img src={github} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
        <div className="card">
          <img className='main' src={puneeth} alt="" />
          <p className='name'>T Puneeth Reddy</p>
          <p className='content'>"Hello, I'm T Puneeth Reddy, a third-year Computer Science Engineering student at VIT-AP University. My tech journey spans CSS3, HTML5, Java, JavaScript, TypeScript, and more. Specializing in React, NodeJS, and Firebase, I'm committed to crafting seamless user experiences. Beyond code, I explore creativity with Adobe Creative Suite, Blender, and TensorFlow, merging technology and innovation in pursuit of excellence."
</p>
          <div className='icons'>
            <img src={insta} alt="" />
            <img src={github} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
        <div className="card">
          <img className='main' src={charan} alt="" />
          <p className='name'>Sai Charan Arikala</p>
          <p className='content'>"Hello, I'm Sai Charan Arikala, a Computer Science Engineering student at VIT-AP University and the visionary behind Stress Away. I bring a wealth of expertise in Natural Language Processing, LLM, Streamlit, Python, AI/ML, Fine Tuning, and Chatbots. Proficient in UI/UX design with CSS3, HTML5, Figma, and Canva, I also master Java, Android, Flutter, and have a strong foundation in GitHub, MySQL, SQLite. Together, let's harness these skills to redefine the landscape of mental well-being through Stress Away."</p>
          <div className='icons'>
            <img src={insta} alt="" />
            <img src={github} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
        <div className="card">
          <img className='main' src={aniesh} alt="" />
          <p className='name'>Aniesh Reddy Gundam</p>
          <p className='content'>"Hi, I'm G. Aniesh Reddy, a third-year Computer Science Engineering student at VIT-AP University. I'm deeply passionate about AI and Machine Learning, with a focus on Deep Learning, NLP, and Power BI. My expertise extends to Python and Java, and I enjoy working with databases like MySQL and Vector. Eager to contribute to technological advancements, I'm on a journey to explore, learn, and innovate in the dynamic world of artificial intelligence."
</p>
          <div className='icons'>
            <img src={insta} alt="" />
            <img src={github} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default about