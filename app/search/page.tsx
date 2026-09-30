import ProductsComponent from "@/components/ProductsComponent/ProductsComponent";
import { Products } from "@/types/types";
import { ReactNode } from "react";

type Props = {
    searchParams: Promise<{ q?: string }>
};

export default async function SearchPage({ searchParams }: Props) {

    const { q } = await searchParams;

    const response = await fetch(`https://dummyjson.com/products/search?q=${q}`);

    if (!response.ok) {
        throw new Error("Something went wrong");
    }

    if (!q) {
        return <h1>Du har ikke søkt på noe produkt</h1>
    }

    const data = await response.json();
    const products: Products = data.products;

    const heading: ReactNode = (
        <h1>Du har søkt på <span className="red">{q}</span></h1>
    );

    return (
        <>
            <ProductsComponent
                products={products}
                heading={heading}
            />
        </>
    );
}