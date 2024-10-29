"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { Metadata } from "next";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      // return data;
      return data.products;
    } catch (error) {
      const errorMessage = (error as Error).message;
      return { error: `Failed to fetch data: ${errorMessage}` };
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getProducts();
      console.log(data);
      setProducts(data);
    })();
  }, []);

  // fetch("https://dummyjson.com/products/1")
  //   .then((res) => res.json())
  //   .then(console.log);

  return (
    <div className="container">
      <div className="pt-32">
        <h1 className="text-3xl font-bold mb-5">Products</h1>
        <div className="flex flex-wrap gap-2">
          {products?.map((product) => (
            <Link
              key={product?.id}
              href={`http://localhost:3000/products/${product.id}`}
              className="inline-block px-3 py-2 bg-emerald-300 hover:bg-emerald-400 dark:bg-emerald-700 dark:hover:bg-emerald-800 rounded-md"
            >
              {product?.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
