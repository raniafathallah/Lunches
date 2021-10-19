import React, { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Table} from 'reactstrap';
import axios from "axios";
import { SET_BUNCHES_COMING} from "../../redux/actions/bunchesActionsupcoming";
import BunchComponentUpcoming from "./BunchComponentupcoming";
function ProductUpcoming () {
  const bunchescoming = useSelector((state) => state.allbunchescoming.bunchescoming);
  const dispatch = useDispatch();
 const fetchProducts =async () => {
     const response = await axios 
       .get("https://api.spacexdata.com/v5/launches/upcoming")
       .catch((err) => {
         console.log("Err: ", err);
       });
     dispatch(SET_BUNCHES_COMING(response.data));
   };
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", bunchescoming);
  return (
    <div className="">
          
    <Table  >
      <tbody>
        <BunchComponentUpcoming />
      </tbody>
      </Table>
     
    </div>
  );
};
export default ProductUpcoming;
