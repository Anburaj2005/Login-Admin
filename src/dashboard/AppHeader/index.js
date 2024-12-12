import React from 'react';
import '../../App.css';
import { Typography, Space, Badge } from "antd";


import { BellFilled, MailOutlined } from "@ant-design/icons";

import { Drawer,List } from "antd";
// import Logo from '../../Assets/Logo.jpg'
import Profile from '../../components/profile1';
function AppHeader() {
 

  return (
    <div className='AppHeader'>

{/* <Image
        width={100}
        src={Logo}
      ></Image> */}
      <Space  direction="horizontal" align="center" >
      <Typography.Title >Admin Dashboard</Typography.Title>

      </Space>
      <Space>
      <Badge  dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            
          />
        </Badge>
        <Badge  >
          <BellFilled
            style={{ fontSize: 24,paddingRight:50 }}
           
            
          />
        </Badge>
<Profile/>
      </Space>
      
      <Drawer
        title="Notifications"
        
        maskClosable
      >
        <List
          dataSource={12}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    
    </div>
  )
        }

export default AppHeader