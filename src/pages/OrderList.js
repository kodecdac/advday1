import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeUserListApiAction } from "../store/genericslice";
import { orderListApiAction } from "../store/orderslice";
import GenericModal from "./GenericModal";

function OrderList() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderListApiAction());
  }, []);

  let { orderStore } = useSelector((state) => state);

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">QTY</th>
                <th scope="col">PRICE</th>
                <th scope="col">Actoins</th>
              </tr>
            </thead>
            <tbody>
              {orderStore.orderList.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.productId}</td>
                  <td>{item.productName}</td>
                  <td>{item.productQty}</td>
                  <td>{item.productPrice}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <GenericModal />
    </>
  );
}

export default OrderList;
