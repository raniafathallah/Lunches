import React, { useEffect, useCallback, useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";
import {Table} from 'reactstrap';
import axios from "axios";
import { setProducts ,setProducts1} from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
function ProductPage () {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

 const fetchProducts =async () => {
     const response = await axios
     //latest is not working well
       .get("https://api.spacexdata.com/v5/launches/upcoming")
       .catch((err) => {
         console.log("Err: ", err);
       });
     dispatch(setProducts(response.data));
   };
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div className="">
          
    <Table  >
      <tbody>
        <ProductComponent />
      </tbody>
      </Table>
     
    </div>
  );
};
export default ProductPage;
