import React, { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Table} from 'reactstrap';
import axios from "axios";
import { SET_BUNCHES } from "../../redux/actions/bunchesActions";
import BunchComponent from "./BunchComponent";
function ProductPast () {
  const bunches = useSelector((state) => state.allbuches.bunches);
  const dispatch = useDispatch();
 const fetchProducts =async () => {
     const response = await axios
       .get("https://api.spacexdata.com/v5/launches/past")
       .catch((err) => {
         console.log("Err: ", err);
       });
     dispatch(SET_BUNCHES(response.data));
   };
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", bunches);
  return (
    <div className="">
          
    <Table  >
      <tbody>
        <BunchComponent />
      </tbody>
      </Table>
     
    </div>
  );
};
export default ProductPast;
