import { type Products } from "@/types/types";
import "./productPage.css";
import ProductsComponent from "@/components/ProductsComponent/ProductsComponent";
import { ReactNode } from "react";


export default async function ProductsPage() {

    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
        throw new Error("Something wrent wrong fetching data");
    }

    const data = await response.json();
    const products: Products = data.products;

    const heading: ReactNode = (
        <h1>Our products</h1>
    );

    return (
        <>
            <ProductsComponent products={products} heading={heading} />
        </>
    );
}