import React from "react";

function ListHeaderbar() {
  return (
    <div className="grid grid-cols-4 items-center sm:grid-cols-5  max-w-3xl  sm:text-lg font-semibold mb-4 mx-auto bg-gray-100 rounded p-3 shadow-sm">
      <span className="text-center">Rank</span>
      <span className="sm:col-span-2 sm:ml-6 text-center">Name</span>
      <span className="text-center">Total Points</span>
      <span className="text-center">Reward Points</span>
    </div>
  );
}

export default ListHeaderbar;
