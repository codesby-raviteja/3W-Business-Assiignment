// App.jsx
import React, { useEffect, useState } from "react";
import ListHeaderbar from "./ListHeaderbar";
import UserListComponent from "./UserListComponent";
import AddNewUser from "./AddNewUser";
import axios from "axios";
import { BASE_URL } from "../constants";
import PageNumbersComponent from "./PageNumbersComponent";
import ClaimPointsDialogBox from "./ClaimPointsDialogBox";

function LeaderBoard({ isAddNewUserClicked, setIsAddNewUserClicked }) {
  const [data, setData] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [totalUsers, setTotalUsers] = useState();
  const [openDialogBox, setOpenDialogBox] = useState(false);
  const [pointsAdded, setPointsAdded] = useState();
  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
  });

  useEffect(() => {
    getData(pageNumber);
  }, [pageNumber]);

  //Fetching Data from server
  const getData = async (page) => {
    try {
      const URL = BASE_URL + `/users?page=${page}`;
      const res = await axios.get(URL);
      // const data = await res.json();
      setTotalUsers(res?.data?.data?.totalUsers);
      setData(res?.data?.data?.users);
    } catch (error) {
      console.log(error.message);
    }
  };

  //Handing new Data submission to server
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const URL = BASE_URL + "/create/user";
      const res = await axios.post(URL, formData);
      getData(pageNumber);
      setIsAddNewUserClicked(false);
      setFormData({
        name: "",
        imageUrl: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  //HandilingClaim Points
  const handleClaimPoints = async (id) => {
    try {
      const URL = BASE_URL + `/claimpoints/${id}`;
      const res = await axios.post(URL);
      setPointsAdded(res?.data?.pointsAdded);
      setOpenDialogBox(true);
      getData(pageNumber);
      setTimeout(() => {
        setOpenDialogBox(false);
      }, 3000);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!data) return;

  return (
    <div className="min-h-screen bg-white p-4">
      <ListHeaderbar />
      <UserListComponent data={data} handleClaimPoints={handleClaimPoints} />
      <PageNumbersComponent
        totalUsers={totalUsers}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      {isAddNewUserClicked && (
        <AddNewUser
          setIsAddNewUserClicked={setIsAddNewUserClicked}
          handleSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {openDialogBox && <ClaimPointsDialogBox pointsAdded={pointsAdded} />}
    </div>
  );
}

export default LeaderBoard;
