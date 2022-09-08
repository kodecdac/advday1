import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { hideModalAction } from "../store/genericslice";

function GenericView() {
  let dispatch = useDispatch();

  const params = useParams();
  console.log(params);

  let { genericStore } = useSelector((state) => state);

  return (
    <>
      <h1>Hello {params.username}</h1>
    </>
  );
}

export default GenericView;
