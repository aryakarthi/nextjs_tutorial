import React from "react";

const Docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  console.log(params.slug);

  return (
    <div className="container">
      <div className="pt-32">
        {params.slug?.length === 2 ? (
          <h2>
            Docs: {params.slug[0]} / {params.slug[1]}
          </h2>
        ) : params.slug?.length === 1 ? (
          <h2>Docs: {params.slug[0]}</h2>
        ) : (
          <h2>Docs Page</h2>
        )}
      </div>
    </div>
  );
};

export default Docs;
