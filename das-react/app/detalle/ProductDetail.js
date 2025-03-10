import { useState } from "react";
import { useParams } from "react-router-dom"; // para acceder a la página de detalles según el id
import Header from "../Header";
import Footer from "../Footer";

const ProductDetail = () => {
    const {id} = useParams();
    return (
        <>
            <Header/>
            
            <p>This is the page of product {id}</p>
            <Footer/>
        </>
    );
}


export default ProductDetail;