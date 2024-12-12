import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

import AppHeader from "../dashboard/AppHeader";
import AppFooter from "../dashboard/AppFooter";
import SideMenu from "../dashboard/Sidemenu";
import PageContent from "../dashboard/Pagecontent";
import RightMenu from "../dashboard/Sidemenu/RightMenu";
import "../App.css"

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
  
    <div className="App">
      <AppHeader />
      
      <div className='SideMenuAndSideMenu App-1'>
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      
        <RightMenu></RightMenu>
        
      </div>

      <AppFooter />
    </div>


  );
}
export default Profile;