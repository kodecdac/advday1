import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { hideModalAction } from "../store/genericslice";

function GenericView() {
  let dispatch = useDispatch();

  const params = useParams();
  let [searchParams] = useSearchParams();

  let { genericStore } = useSelector((state) => state);

  return (
    <>
      <h1>Username {params.username}</h1>
      <h1>Email {searchParams.get("email")}</h1>
      <h1>Mobile {searchParams.get("mobile")}</h1>
    </>
  );
}

export default GenericView;
