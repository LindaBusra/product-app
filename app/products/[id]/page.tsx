import { Product } from "@/types/types";

type Props = {
    params: Promise<{ id: string }>
};

export default async function ProductPage({ params }: Props) {

    const { id } = await params;

    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (!response.ok) {
        throw new Error("Fant ikke produkt");
    }

    const product: Product = await response.json();

    return (
        <article>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </article>
    );
}