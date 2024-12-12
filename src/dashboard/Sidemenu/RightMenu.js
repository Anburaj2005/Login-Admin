import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Avatar, Menu } from "antd";
import "../../App.css"
function RightMenu() {
  const [comments, setComments] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/users').then((res) => {


      console.log(res.data.users);
      setComments(res.data.users)
    })

  }, [])

  return (
    <div className='SideMenu'>


      <Menu className='SideMenuVertical right-menu'>
      <h1 className='user-lst'>User List </h1>
        {comments.map(person =>


          <div className='com-cont'>
      
            <Avatar img src={person.image} />
            <p key={person.id}>{person.address.city}</p>
          </div>
     
        )
        }

      </Menu>



    </div>

  )
}

export default RightMenu