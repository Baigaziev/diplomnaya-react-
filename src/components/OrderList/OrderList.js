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
        <div className="OrderList-product">
          <img
            src={product.picture}
            alt={product.name}
            className="OrderList-productImage"
          />
          <div className="OrderList-productDetails">
            <div className="OrderList-productName">{product.name}</div>
            <div className="OrderList-productPrice">{product.price} $</div>
            <div className="OrderList-productQuantity">
              Quantity: {order.cart[productId]}
            </div>
            <div className="OrderList-productTotal">
              Total: {order.cart[productId] * product.price} $
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="OrderList-order">
        <div className="OrderList-orderHeader">
          <div className="OrderList-orderName">Name: {order.name}</div>
          <div className="OrderList-orderPhone">Phone: {order.phone}</div>
          <div className="OrderList-orderAddress">Address: {order.address}</div>
        </div>
        <div className="OrderList-orderCart">{cartOutput}</div>
      </div>
    );
  });

  return <div className="OrderList">{output}</div>;
}
