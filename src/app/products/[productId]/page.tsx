"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { Metadata } from "next";

type Product = {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  images: string[];
  reviews?: { comment: string }[];
};

type Props = {
  params: {
    productId: string;
  };
};

const Product = ({ params }: Props) => {
  const [product, setProduct] = useState<Product | null>(null);

  if (params.productId === "100") {
    throw new Error("Invalid Product ID.!");
  }

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${params.productId}`
        );
        const data = await response.json();
        return data;
      } catch (error) {
        const errorMessage = (error as Error).message;
        return { error: `Failed to fetch data: ${errorMessage}` };
      }
    };
    (async () => {
      const data = await getProduct();
      // console.log(data);
      setProduct(data);
    })();
  }, [params.productId, setProduct]);

  return (
    <>
      <div className="container">
        <div className="pt-32">
          <h1 className="text-3xl font-bold mb-5">Product</h1>
          {product && (
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                {product?.images?.map((image, index) => (
                  <div className="relative h-40 w-40" key={index}>
                    <Image
                      src={image}
                      alt={product?.title}
                      fill
                      className="rounded-md object-cover bg-gray-300 dark:bg-gray-700"
                    />
                  </div>
                ))}
              </div>

              <p>ID : {product?.id}</p>
              <p>Title : {product?.title}</p>
              <p>Description : {product?.description}</p>
              <p>Brand : {product?.brand}</p>
              <p>Category : {product?.category}</p>
              <p>Price : {product?.price}</p>
              <p>Rating : {product?.rating}</p>
              <p>Stock : {product?.stock}</p>
              <p>Reviews</p>
              <ul className="flex flex-wrap gap-2 mt-4">
                {product?.reviews &&
                  product?.reviews?.map((review, index) => (
                    <li
                      key={index}
                      className="inline-block px-2 py-1 bg-blue-300 hover:bg-blue-400 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-md"
                    >
                      <Link
                        href={`http://localhost:3000/products/${
                          product.id
                        }/reviews/${index + 1}`}
                      >
                        {index + 1} . {review.comment}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
