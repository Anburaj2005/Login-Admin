import { Avatar,  Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../API";
import Chart from "./Chart";

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products.slice(0, 4));
      setLoading(false);
    });
  }, []);

  return (
    < div className="container">
      <div size={20} direction="vertical" style={{paddingLeft:"40px",paddingTop:"40px" }}>
        <Typography.Title level={4}>Inventory</Typography.Title>
        <Table
          loading={loading}
          columns={[
            {
              title: "Thumbnail",
              dataIndex: "thumbnail",
              render: (link) => {
                return <Avatar src={link} />;
              },
            },
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Price",
              dataIndex: "price",
              render: (value) => <span>${value}</span>,
            },
            // {
            //   title: "Rating",
            //   dataIndex: "rating",
            //   render: (rating) => {
            //     return <Rate value={rating} allowHalf disabled />;
            //   },
            // },
            {
              title: "Stock",
              dataIndex: "stock",
            },

            {
              title: "Brand",
              dataIndex: "brand",
            },
            // {
            //   title: "Category",
            //   dataIndex: "category",
            // },
          ]}
          dataSource={dataSource}
          pagination={false}
        // pagination={{ pageSize: 5,}}
        ></Table>

      </div>
      <div style={{paddingLeft:"40px",paddingTop:"100px" }}>
        <Space>


          <Chart />
        </Space>

      </div>
    </div>
  );
}
export default Inventory;