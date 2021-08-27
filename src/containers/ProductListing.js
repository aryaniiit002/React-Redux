import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
    // Fetch the product we have in our redux store
    const products = useSelector((state) => state.allProducts.products);
    // const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err: ", err);
            });
        console.log(response.data)
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log(products);
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
}

export default ProductListing
