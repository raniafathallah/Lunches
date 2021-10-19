import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
} from "../redux/actions/productsActions";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Jumbotron
} from 'reactstrap';
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { id, name, flight_number, flickr_images ,title,date_utc,payloads,first_flight,country,
    company,wikipedia,description,success_rate_pct} = product;

  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
    
   .get(`https://api.spacexdata.com/v4/rockets/5e9d0d95eda69955f709d1eb`)
     // .get(`https://api.spacexdata.com/v4/rockets/${id}`) didn't work 
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
     // dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>  ) : (

          <div key={id} className="DatailsBar">
          <Card className="DetailsImage">
             <CardImg top width="100%" src={flickr_images[0]} alt={title}/>
          </Card>
          <Jumbotron className="DetailsRighrbar">
          <CardTitle className="display-5" tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted country">country: {country}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted FirstFligh"> first flight:{first_flight}</CardSubtitle>
            
            <p className="lead">{description}</p>
         
              <CardSubtitle tag="h6" className="mb-2 text-muted">{date_utc}</CardSubtitle>
          
              <CardSubtitle tag="h6" className="mb-2 text-muted success">success :{success_rate_pct}</CardSubtitle>
            
         
              <Button color="primary" className="mb-2 text-muted LearnMore">
                <a href={wikipedia}>  Learn More
              </a></Button>
          </Jumbotron>
        </div>
      )}
    </div>
  );
};
   
export default ProductDetails;
