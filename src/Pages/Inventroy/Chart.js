import React, { useEffect ,useState} from 'react'
import axios from 'axios';
// import {Bar} from "react-chartjs-2";
import {Card} from 'antd'

function Chart() {
const [chart,SetChart]=useState({  labels: [],
    datasets: [],})


useEffect(() => {
    axios.get("https://dummyjson.com/carts").then((response) => {
      console.log(response.data.carts)
    const labels=response.data.carts.map((cart)=>{
     
        return  cart.userId
    })
   
    const data= response.data.carts.map((cart) => {
        return cart.total;
      });
      const dataSource = {
        labels,
        datasets: [
          {
            labels: "UserID",
            data: data,
            backgroundColor: "rgba(35,35,35)",
          },
        ],
      };

      SetChart(dataSource);
    },[]);
})
const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Details",
      },
    },
  };

  return (

    <Card style={{ width: 500, height: 250 }}>
 {/* <Bar options={options} data={chart} /> */}
<h2>ndnv</h2>
</Card>
  )
}

export default Chart