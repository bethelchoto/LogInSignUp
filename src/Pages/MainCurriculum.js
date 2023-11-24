import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../Styles/MainCurriculum.css';

import CheckBoxIcon from '@mui/icons-material/CheckBox';

const MainCurriculum = () => {
    const navigate = useNavigate()

  return (
      <div className='main-curr'>
            <div className="form-student-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">EXTRA CURRICULUM ACTIVITIES</label>
                  </div>
                  <hr className="long-line"  style={{ width: '100%', border: '1px solid black' }}/>
            </div>

        <div className='row-curriculum'>

            <div className='left-side-curr'>
                <CheckBoxIcon/>
            </div>

            <div className='right-side-curr'>

                <div className="labels-container">
                    <label htmlFor="label1">Organization :</label>
                    <span id="label1"> PEN, Practical Education Network</span>
                </div>

                <div className="labels-container">
                    <label htmlFor="label1">Country :</label>
                    <span id="label1"> Ghana</span>
                </div>

                <div className="labels-container">
                    <label htmlFor="label1">Start Date :</label>
                    <span id="label1"> 12/02/2021</span>
                </div>

                <div className="labels-container">
                    <label htmlFor="label1">End Date :</label>
                    <span id="label1"> 12/02/2021</span>
                </div> 
  
                <div className="labels-container">
                    <label htmlFor="label1">Description :</label>
                    <span id="label1">I am a highly motivated and results-driven professional with a proven track record in project management. I have successfully led cross-functional teams to deliver complex projects on time and within budget. My expertise lies in developing and implementing strategic plans, mitigating risks, and ensuring seamless communication among team members and stakeholders. I excel in identifying and leveraging opportunities for process improvement, driving efficiency, and optimizing project workflows. My commitment to excellence and my ability to adapt to dynamic environments make me a valuable asset in achieving project objectives and organizational success. </span>
                </div>  

            </div>

            <div> 
                <button className='main-curr-btn'>Approved</button>
            </div>
        </div>

        <div className='btn-row-curr'> 
            <button className='main-exp-btn'>Cancel</button>
            <button className='main-exp-btn' onClick={()=> {navigate("/")}}>Edit</button>
            <button className='main-exp-btn' onClick={()=> {navigate("/")}}>Delete</button>
            <button className='main-exp-btn' onClick={()=> {navigate("/activities")}}>Add</button>
            
        </div> 

    </div>
  );
};

export default MainCurriculum;
