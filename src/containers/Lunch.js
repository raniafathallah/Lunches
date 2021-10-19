///import React from "react";
import {useState,useEffect} from 'react';
import {useParams, useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
import {Row, Col,NavItem,Nav,TabContent,NavLink,TabPane} from 'reactstrap';
import Header from './Header';
import ProductPage from './ProductListing';
import ProductPast from './bunchComponent/ProductPast';
//import ProductLatest from './bunchComponent/ProductLatest';
import  ProductUpcoming  from './bunchComponent/ProductUpcoming';
import { useDispatch, useSelector } from "react-redux";
  function Lunches() {
    const dispatch = useDispatch();
   const DEFAULT_ACTIVE_TAB = "latest";
      const tabs = {
          "past": {
              title: "Past",
              content: (
                  <Row className="p-2">
                      <Col>      
                          <ProductPast />
                      </Col>
                  </Row>
              )
          },
          "latest": {
              title: "Latest",
              content: (
                  <Row className="p-2">
                      <Col sm="12" >
                          <ProductPage />
                      </Col>
                  </Row>
              )
          },
          "upcoming": {
              title: "Upcoming",
              content: (
                  <Row className="p-2">
                      <Col sm="12" >
                         <ProductUpcoming/>
                      </Col>
                  </Row>
              )
          }
      }
      const {active_tab} = useParams();
      const history = useHistory();
  

      useEffect(() => {
          if(!active_tab){
              history.push(`/${DEFAULT_ACTIVE_TAB}`);
          }
      }, [tabs]);

      const toggle = tab => {
         if (active_tab !== tab) {
              history.push(`/${tab}`);
            
         }
      }
  
      return (
          <div className="row body">
              <div className="col-lg-12 body">
                  <Header/>
                  <Nav tabs className="paddingContainer">
                      {
                          Object.entries(tabs).map((tab) => (
                              <NavItem key={tab[0]}>
                                  <NavLink
                                      className={active_tab === tab[0] ? "active " : ""}
                                      onClick={() => {
                                          toggle(tab[0]);
                                        
                                      }}
                                      role="button"
                                  >
                                      {tab[1].title}
                                  </NavLink>
                              </NavItem>
                          ))
                      }
                  </Nav>
  
                  <TabContent activeTab={active_tab}  className="paddingContainer">
                      {
                          Object.entries(tabs).map((tab) => (
                              <TabPane key={tab[0]} tabId={tab[0]}>
                                  {tab[1].content}
                              </TabPane>
                          ))
                      }
                  </TabContent>
              </div>
          </div>
      );
  }
  
 

export default Lunches;