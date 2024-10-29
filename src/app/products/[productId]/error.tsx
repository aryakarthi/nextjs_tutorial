"use client";
import React from "react";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div className="container">
      <div className="pt-32">
        <h1 className="text-3xl font-bold mb-4">Something went wrong.!</h1>
        <p className="mb-5">{error.message}</p>
        <button className="bg-emerald-500 p-2 rounded-md" onClick={reset}>Try again</button>
      </div>
    </div>
  );
};

export default ErrorBoundary;
