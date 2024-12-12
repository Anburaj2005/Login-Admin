import {   Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import {  getOrders } from "../../API";
import ChartOrder from "./Chart";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    < div className="container" > 
    <div size={1} direction="vertical"  style={{paddingLeft:"40px",paddingTop:"60px" }}>
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table 
        loading={loading}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "DiscountedPrice",
            dataIndex: "discountedPrice",
            render: (value) => <span>${value}</span>,
          },
          // {
          //   title: "Quantity",
          //   dataIndex: "quantity",
          // },
          {
            title: "Total",
            dataIndex: "total",
          },
        ]}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </div>

    <div  style={{paddingLeft:"40px",paddingTop:"120px" }}>
      <Space direction="horizontal">
      <ChartOrder/>

      </Space>

    </div>
   
    </div>
  );
}
export default Orders;