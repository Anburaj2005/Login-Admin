import React from 'react';
import { Menu } from 'antd';
import { useEffect, useState } from "react";
import { AppstoreOutlined, ShoppingOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"
import { useNavigate, useLocation } from 'react-router-dom';


function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <> 
    <div className='SideMenu'>
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => { navigate(item.key) }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Patients",
            icon: <AppstoreOutlined />,
            key: "/patients"
          },

          {
            label: "Appointments",
            icon: <ShoppingOutlined />,
            key: "/appointments"
          },

          {
            label: "Communication",
            icon: <ShoppingCartOutlined />,
            key: "/communication"
          },

          {
            label: "Survey",
            icon: <UserOutlined />,
            key: "/survey",
          },
          {
            label: "Payment",
            icon: <UserOutlined />,
            key: "/payment",
          },


        ]}>

      </Menu>


    


    </div>

    </>
  )
}

export default SideMenu