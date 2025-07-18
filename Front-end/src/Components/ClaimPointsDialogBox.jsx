import React from "react";

function ClaimPointsDialogBox({ pointsAdded }) {
  return (
    <div className="fixed top-2 bg-green-300 px-5 py-4 rounded left-1/2 -translate-x-1/2">
      <p className="font-medium">{`${pointsAdded} Points were added.`}</p>
    </div>
  );
}

export default ClaimPointsDialogBox;
