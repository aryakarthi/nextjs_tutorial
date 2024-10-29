import { notFound } from "next/navigation";
import React from "react";

const Review = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  if (parseInt(params.reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      <h2>Review Details</h2>
      <h4>
        Review {params.reviewId} for Product {params.productId}
      </h4>
    </div>
  );
};

export default Review;
