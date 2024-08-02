import React from 'react';
import './home.css';
import { GoHomeFill } from "react-icons/go";
import { useAuth } from '../AuthContext';
import { Link } from 'react-router-dom';



function Home() {

  const { user, logout } = useAuth();
  return (
  
      // <main className="main-content">
      //   <div className="section text-section"></div>
      //   <div className="video-container">
      //      <video className="background-video" autoPlay loop muted />
      //      <video src='./img.mp4' type="video/mp4" />
      //   </div>

      //   <div className='grop'>
      //    <div class="text-box">
      //    <p>موقع "Service Avocat" هو منصة متقدمة تهدف إلى تسهيل وتحسين إدارة العمل اليومي للمحامين. يتميز هذا الموقع بالعديد من الخصائص والوظائف التي تجعل من السهل على المحامين متابعة القضايا وإدارة مواعيدهم والتفاعل مع عملائهم بفعالية.</p>
      //    </div>
      //     {user ? 
      //      null :
      //      <Link  to={"/login"}><button className="login-button2">تسجيل دخول</button></Link>
      //     }
      //   </div>
      // </main>

      <div className='all'>
        <div className='video'>
            <video style={{width:'50rem'}} src='./img.mp4' autoPlay loop muted ></video>
        </div>
        <div className='description'>
          <div>

        <h3>موقع "Service Avocat" هو منصة متقدمة تهدف إلى تسهيل وتحسين إدارة العمل اليومي للمحامين. يتميز هذا الموقع بالعديد من الخصائص والوظائف التي تجعل من السهل على المحامين متابعة القضايا وإدارة مواعيدهم والتفاعل مع عملائهم بفعالية.</h3>
          </div>
        

        <div className='tafssir'>
          {user ?

         null :

        <Link  to={"/login"}>
        <button className="tassjil-btn">تسجيل دخول</button>
        </Link>
        }
        </div>


        </div>

      </div>
   
  );
}

export default Home;
