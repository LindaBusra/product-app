import "./ProductComponent.css";
import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
    product: Product;
}

export default function ProductComponent({ product }: Props) {
    return (
        <article className="product-article">
            <Image
                src={product.thumbnail}
                width={300}
                height={300}
                alt=""
            />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <Link href={`/products/${encodeURIComponent(product.id)}`}>
                Buy product
            </Link>

        </article>
    );
}