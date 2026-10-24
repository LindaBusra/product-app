import { type Products } from "@/types/types";
import "./productPage.css";
import ProductsComponent from "@/components/ProductsComponent/ProductsComponent";
import { ReactNode } from "react";
import { PagesRouteModule } from "next/dist/server/route-modules/pages/module.compiled";
import Pagination from "@/components/Pagination/Pagination";
import Link from "next/link";

type Props = {
  searchParams: Promise<{ page?: string }>;
};

const PRODUCTS_PER_PAGE = 9;
const PRODUCTS_API = "https://dummyjson.com/products/";

export default async function ProductsPage({ searchParams }: Props) {
  const { page } = await searchParams;

  let pageNumber = 1;

  if (page) {
    pageNumber = parseInt(page);
  }

  const numSkip = (pageNumber - 1) * PRODUCTS_PER_PAGE;

  //console.log("pageNumber:", pageNumber)
  const response = await fetch(
    `${PRODUCTS_API}?skip=${numSkip}&limit=${PRODUCTS_PER_PAGE}`,
  );

  if (!response.ok) {
    throw new Error("Something wrent wrong fetching data");
  }

  //const data = await response.json();

  const {products, skip, total, limit} = await response.json();
 

  const heading: ReactNode = <h1>Our products</h1>;

  return (
    <>
      <ProductsComponent products={products} heading={heading} />
      <Pagination>
        <nav className="pagination">
          { pageNumber > 1 &&
            <Link href={`/products/?page=${pageNumber - 1}`} className="prevButton">
              <span>Previous</span>
            </Link>
          }

          { total > skip + limit && (
            <Link href={`/products/?page=${pageNumber + 1}`} className="nextButton">
              <span>Next</span>
            </Link>
          )}
        </nav>
      </Pagination>
    </>
  );
}
