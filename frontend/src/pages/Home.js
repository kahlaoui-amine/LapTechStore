import axios from "../axios";
import React, { useEffect} from "react";
import {Container, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import rubriques from "../rubriques";

import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";
import Banner from "../components/Banner";
import Marque from "../components/marque";
import Header from "../components/header";
import Footer from "../components/footer";
import Footer2 from "../components/footer2";





function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const lastProducts = products.slice(0, 8);
    useEffect(() => {
        axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
    }, []);
    return (
        
        <div className="bg2">
            <Header/>
            <Container>
            <Banner/>
            </Container>

            
            <div className="featured-products-container container mt-4 conatin">
                <br/>
                <h2 className="font">Last products</h2>
                {/* last products here */}
                <div className="d-flex justify-content-center flex-wrap">
                    {lastProducts.map((product) => (
                        <ProductPreview {...product} />
                    ))}
                </div>
                <div>
                    <Link to="/category/all" style={{ textAlign: "right", display: "block", textDecoration: "none" }}>
                        See more {">>"}
                    </Link>
                </div>
            </div>
        
           
            <div className="recent-products-container container mt-4">
            <br/>
                <h2 className="font">Categories</h2>
                <div className="modif">
                <Row>
                    
                    {categories.map((category) => (
                        <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col md={4}>
                                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px" }} className="category-tile">
                                    {category.name}
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
                 
                </Row>
                </div>  
                <br/><br/>
                <h2 className="font">Sous Catégories</h2>
                
                <Row>
                    {rubriques.map((rubrique) => (
                        <LinkContainer to={`/rubrique/${rubrique.name.toLocaleLowerCase()}`}>
                            <Col md={4}>
                                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${rubrique.img})`, gap: "10px" }} className="category-tile">
                                    {rubrique.name}
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
                </Row>

                
            </div><br/><br/>
            <div className="featured-products-container container mt-4 conatin2">
                <br/>
                <h2 className="font">Marques</h2>
                    <br/><Marque/>
            </div>
            <br/>
            <br/>
            <br/>  
            <Footer/>    

        </div>
        
        

    );
}

export default Home;

