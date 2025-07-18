import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { BASE_URL } from "../constants";

export default function AddNewUser({ setIsAddNewUserClicked ,handleSubmit,formData, setFormData}) {


  const overLayRef = useRef();

  useEffect(() => {

    //Closing DialogBox on Clicking Ovelay
    const closeAddUser = (e) => {
      if (e.target === overLayRef.current) {
        setIsAddNewUserClicked(false);
      }
    };

    overLayRef.current.addEventListener("click", closeAddUser);
    return () => {
      overLayRef.current?.removeEventListener("click", closeAddUser);
    };
  }, []);


  //Handling inputChanges
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


 


  return (
    <div
      className="fixed inset-0 bg-gray-500/80 flex items-center justify-center z-50"
      ref={overLayRef}
    >
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}
