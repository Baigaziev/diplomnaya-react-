import { useContext } from "react";
import { AppContext } from "../../App";
import "./OrderList.css";

export default function OrderList() {
  //! получить заказы и продукты из контекста
  const { orders, products } = useContext(AppContext);

  if (!orders.length || !products.length) {
    return "No orders found.";
  }
  //! Выводим все заказы
  const output = orders.map((order) => {
    //! Вывезти содерижимое корзины для этого заказа
    const cartOutput = Object.keys(order.cart).map((productId) => {
      const product = products.find((product) => product.id === productId);

      if (!product) {
        return "Product not found";
      }

      return (
        <div>
          <img src={product.picture} alt={product.name} />
          {product.name}: {order.cart[productId]} X {product.price} som ={" "}
          {order.cart[productId] * product.price} som
        </div>
      );
    });

    return (
      <div className="Order">
        <div>Name: {order.name}</div>
        <div>Phone: {order.phone}</div>
        <div>Address: {order.address}</div>
        <div>Cart: {cartOutput}</div>
      </div>
    );
  });

  return <div className="OrderList">{output}</div>;
}
