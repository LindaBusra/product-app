import "./ProductsComponent.css";
import { Products } from "@/types/types";
import ProductComponent from "../ProductComponent/ProductComponent";
import { ReactNode } from "react";



type Props = {
    products: Products;
    heading: ReactNode;
}

export default function ProductsComponent({ products, heading }: Props) {
    return (
        <>
            {heading}
            <section className="products">
                {
                    products.map(product => (
                        <ProductComponent
                            product={product}
                            key={product.id}
                        />
                    ))
                }
            </section>
        </>
    );
}