import React from "react";
import { InventoryProduct } from "../../../data/InventoryProduct";
import { OrderProduct } from "../../../data/OrderProduct";
import { Order } from "../../../data/Order";
import OrderCard from "../components/order_card";
import img1 from "../../../media/Salmon.jpeg";
import img2 from "../../../media/Tuna.jpeg";
import img3 from "../../../media/Cod.jpeg";
import img4 from "../../../media/Shrimp.jpeg";
import img5 from "../../../media/Lobster.jpeg";
import "../../../css/profile.css";
const MyOrders = () => {
  const product1 = new InventoryProduct("Salmon", "P001", 15.99, 100, img1);
  const product2 = new InventoryProduct("Tuna", "P002", 12.99, 50, img2);
  const product3 = new InventoryProduct("Cod", "P003", 10.99, 80, img3);
  const product4 = new InventoryProduct("Shrimp", "P004", 18.99, 60, img4);
  const product5 = new InventoryProduct("Lobster", "P005", 25.99, 30, img5);

  const orderProduct1 = new OrderProduct(product1, 2);
  const orderProduct2 = new OrderProduct(product2, 3);
  const orderProduct3 = new OrderProduct(product3, 1);
  const orderProduct4 = new OrderProduct(product4, 5);
  const orderProduct5 = new OrderProduct(product5, 2);

  const orders = [
    new Order(
      "G7aB4k8LxM2Z",
      new Date("2024-08-04"),
      null,
      "Pending",
      [orderProduct1, orderProduct2, orderProduct3],
      "789 Harbor Rd, Seaville",
      "SUMMER15",
      79.94,
      4.0,
      6.0,
      0.0
    ),
    new Order(
      "F3nP1K9dC7Xj",
      new Date("2024-08-06"),
      null,
      "Pending",
      [orderProduct5, orderProduct2],
      "654 Ocean Breeze Ln, Seaville",
      "LOBSTERLOVE",
      51.98,
      3.0,
      5.0,
      7.8
    ),
    new Order(
      "Z5Yl2rA8Qk9B",
      new Date("2024-08-07"),
      null,
      "Cancelled",
      [orderProduct2, orderProduct4],
      "987 Sea View Dr, Seaville",
      "SEAFOOD10",
      103.93,
      8.0,
      9.0,
      15.0
    ),
    new Order(
      "Qw8Z3R1jXy7N",
      new Date("2024-08-01"),
      new Date("2024-08-03"),
      "Delivered",
      [
        orderProduct1,
        orderProduct3,
        orderProduct4,
        orderProduct5,
        orderProduct2,
      ],
      "123 Ocean Avenue, Seaville",
      "SAVE20",
      40.97,
      2.5,
      5.0,
      0.0
    ),
    new Order(
      "aD4L9xY2Kz7Q",
      new Date("2024-08-02"),
      new Date("2024-08-05"),
      "Delivered",
      [orderProduct2],
      "456 Marine Blvd, Seaville",
      "WELCOME10",
      38.97,
      2.0,
      4.5,
      4.0
    ),
    new Order(
      "pH2M6rV8Jb5T",
      new Date("2024-08-05"),
      new Date("2024-08-07"),
      "Delivered",
      [orderProduct4],
      "321 Fisherman Wharf, Seaville",
      "FISHFAN",
      94.95,
      7.0,
      8.0,
      12.0
    ),
  ];

  return (
    <>
      <div className="myorders col-lg-6 col-md-7 col-sm-9 col-12 mb-5 m-auto p-3">
        {orders.map((item, index) => (
          <OrderCard key={index} order={item} />
        ))}
      </div>
    </>
  );
};

export default MyOrders;
