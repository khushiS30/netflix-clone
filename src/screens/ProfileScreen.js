import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'



const ProfileScreen = () => {
    const user = useSelector(selectUser);
    return(
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen_body'>
               <h1>Edit Profile</h1>
               <div className="profileScreen_info">
               <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                  alt="avatar" />
              
              <div className='profileScreen_details'>
                  <h2>{user.email}</h2>
                <div className='profileScreen_plans' >
                    <h3>Plans</h3>

                    {/* <div className='plansScreen_plan'>
           <div className='plansScreen_info'>
               <h4>Premium</h4>
               <h6>4K + HDR</h6>
               <button>Subscribe</button>
               <h4>Basic</h4>
               <h6>720p</h6>
               <button>Subscribe</button>
               <h4>Standard</h4>
               <h6>1080</h6>
               <button>Subscribe</button>
               </div>  
        </div> */}
                   <button onClick={() => auth.signOut()}   //it will go in app.js then it will logout and user will be null
                   className='profileScreen_signOut'>Sign Out</button> 
                </div>

                  
                  </div>  
                  </div>
            </div>

        </div>

    )
} 

export default ProfileScreen;