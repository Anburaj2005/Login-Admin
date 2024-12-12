import React, { useEffect ,useState} from 'react'
import axios from 'axios';
// import {Line}from "react-chartjs-2";
import {Card} from 'antd';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
ChartJS.register(PointElement);

function ChartOrder() {
const [chart,setChart]=useState({  labels: [],
    datasets: [],})
useEffect(()=>{
axios.get("https://dummyjson.com/product").then((res)=>{
console.log(res.data.products)
setChart ({
labels:res.data.products.map((products)=>products.title),
datasets:[{
  labels:"count",
  data:res.data.products.map((products)=>products.stock),
  fill:true,
  backgroundColor:"violet"
}]

})

})
},[])
const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Stock Details",
      },
    },
  };
  return (
    <Card style={{ width: 600, height: 300 }}>
 {/* <Line options={options} data={chart} /> */}

</Card>
  )
}

export default ChartOrder