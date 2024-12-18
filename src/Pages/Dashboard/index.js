import React, { useEffect, useState } from 'react';
import { Statistic, Typography, Space, Card,Table } from 'antd';
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { getOrders,getRevenue,getCustomers, getInventory } from '../../API';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import {  } from "../../API";

// import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function Dashboard() {

  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });
    getCustomers().then((res) => {
      setCustomers(res.total);
    });
  }, []);

  return (
    <div>
           <Space size={4} direction="vertical"> 
      {/* <Typography.Title>
        Dashboard
      </Typography.Title> */}
      <Space direction="horizontal" style={{ marginTop: '20px' }}>
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Orders"}
          value={orders}          
        />


        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Inventory"}
          value={inventory}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Customer"}
          value={customers }
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Revenue"}
          value={revenue}
        />
      </Space>
      <Space>
        <RecentOrders/>
        <DashboardChart/>
      </Space>
  </Space>
    </div>
  )

  function DashboardCard({ title, value ,icon}) {
    return (
      <Card>
        <Space direction="horizontal">
        {icon}
          <Statistic title={title} value={value} icon={icon}  />
          
        </Space>
      </Card>
    )
  }


  function RecentOrders(){
const [dataSource,setDataSource]=useState([]);
const[loading,setLoading]=useState(false)

useEffect(()=>{
setLoading(true);
console.log(getOrders)
getOrders().then((res)=>{
 
setDataSource(res.products)
setLoading(false)
})
},[])



    return(
      <Table 
      columns={[
        {
          title: "Title",
          dataIndex: "title",
        },
        {
          title: "Quantity",
          dataIndex: "quantity",
        },
        {
          title: "Price",
          dataIndex: "price",
        },
        {
          title: "DiscountedPrice",
          dataIndex: "discountedPrice",
        },
        {
          title: "Total",
          dataIndex: "total",
        },
        // {
        //   title: "Photo",
        //   dataIndex: "thumbnail",
        //   render: (link) => {
        //     return <Avatar src={link} />;
        //   },
        // },
      ]}
      loading={loading}
      dataSource={dataSource}
      pagination={false}
    ></Table>
    )
  }

  function DashboardChart() {
    const [reveneuData, setReveneuData] = useState({
      labels: [],
      datasets: [],
    });
  
    useEffect(() => {
      getRevenue().then((res) => {
        const labels = res.carts.map((cart) => {
          return `User-${cart.userId}`;
        });
        const data = res.carts.map((cart) => {
          return cart.discountedTotal;
        });
  
        const dataSource = {
          labels,
          datasets: [
            {
              label: "Revenue",
              data: data,
              backgroundColor: "rgba(35,35,35)",
            },
          ],
        };
  
        setReveneuData(dataSource);
      });
    }, []);
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Order Revenue",
        },
      },
    };
    // return (
    //   <Card >
    //     <Bar options={options} data={reveneuData} />
      
    //   </Card>
    // )
}
}
export default Dashboard