import React from "react";

function PageNumbersComponent({ totalUsers, pageNumber, setPageNumber }) {
  const noOfPages = Math.ceil(totalUsers / 10);
  const pageNumberArray = new Array(noOfPages).fill(" ");

  return (
    <div className="mt-6  max-w-3xl mx-auto ">
      <div className="flex  space-x-2 justify-center">
        <button className="px-3 py-1 bg-yellow-300 font-medium">Pages:</button>
        {pageNumberArray.map((item, idx) => {
          return (
            <button
            key={idx}
              className={`${
                pageNumber === idx+1 ? "border-green-600" : "border-yellow-300"
              } px-3 text-lg border-2  py-1 bg-yellow-300 font-medium cursor-pointer`}
              onClick={() => setPageNumber(idx + 1)}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default PageNumbersComponent;
