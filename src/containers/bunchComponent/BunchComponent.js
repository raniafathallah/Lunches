import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {Row, Col,NavItem,Nav,TabContent,NavLink,TabPane} from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';
import { Badge } from 'reactstrap';
//import ProductDetails from "./ProductDetails";
const BunchComponent = () => {
  const bunches = useSelector((state) => state.allbuches.bunches);
  
  //const products = useSelector((state) => state.allProducts.products);
  
  const model =  bunches.map((product) => {
   // const { id, name, flight_number, links ,title,date_utc} = product;
    const { id, name, flight_number, links ,title,date_utc} = product;
    return (
        <tr key={id} className="tr">
          <Card>
             <Link to={`/lunch/${id}`} > 
            <CardImg top width="100%" src={links.patch.small} alt={title}/>
            <CardBody>
              <CardTitle tag="h5">{name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">{date_utc}</CardSubtitle>
              <CardSubtitle tag="h3" className="mb-2 text-muted card-number"> {flight_number}</CardSubtitle>
            </CardBody>
            </Link>
          </Card>
          </tr>
    );
  });
  return <>{model}</>;
};




///export default [ProductComponent,ProductComponent1];
export default BunchComponent;

