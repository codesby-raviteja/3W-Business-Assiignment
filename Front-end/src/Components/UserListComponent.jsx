import React from "react";

function UserListComponent({ data, handleClaimPoints }) {
  return (
    <div className="max-w-3xl min-h-[70%] mx-auto space-y-4">
      {data.map(({ _id, rank, imageUrl, totalPoints, name }) => (
        <div
          key={_id}
          className="grid grid-cols-4 sm:grid-cols-5 items-center   bg-gray-100 rounded-xl p-3 shadow-sm"
        >
          <span className="text-sm sm:text-lg text-center  font-semibold text-gray-700 ">
            {rank}
          </span>

          <div className=" sm:col-span-2 flex flex-col sm:flex-row justify-center items-center sm:space-x-4">
            <img
              src={imageUrl}
              alt="profile"
              className="w-12 h-12 rounded-full object-cover"
            />

            <span className="text-sm sm:text-base  ml-2 font-medium text-center">
              {name}
            </span>
          </div>
          <span className="text-base  text-center font-semibold text-gray-800">
            {totalPoints}
          </span>
          <button
            className="bg-amber-300  text-sm sm:text-base text-center py-2 px-4 rounded cursor-pointer"
            onClick={() => handleClaimPoints(_id)}
          >
            Claim Points
          </button>
        </div>
      ))}
    </div>
  );
}

export default UserListComponent;
