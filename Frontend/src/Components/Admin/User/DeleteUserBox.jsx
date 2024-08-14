import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getAllUserAsync } from "../../../Redux/User/allUserSlice";
import { useDispatch } from "react-redux";

const DeleteUserBox = ({ id, setIsBoxOpne, email }) => {
  const dispatch = useDispatch();
  const HandleDeletUser = async () => {
    try {
      const { data } = await axios.delete(`/api/user/${id}`);
      await dispatch(getAllUserAsync());
      toast.success(data.message);
      setIsBoxOpne(false);
    } catch (error) {
      toast.error(error.response.data.message || error.message);
    }
  };
  return (
    <div className="absolute inset-0 h-full w-full bg-gray-200/20 flex items-center justify-center">
      <div className="min-h-52 bg-white px-8 py-4 rounded-lg flex flex-col justify-between gap-8">
        <div className="flex justify-between">
          <p className="text-2xl text-gray-800 font-semibold">
            Delete Confimation
          </p>
          <button
            className="font-medium text-2xl px-2 py-1 hover:bg-slate-400 rounded-lg"
            onClick={() => setIsBoxOpne(false)}
          >
            X
          </button>
        </div>
        <div>
          <p className="bg-red-300 text-red-600 px-5 py-2 rounded-lg">
            Are you sure you want to delete{" "}
            <span className="underline font-semibold">{email}</span> user?
          </p>
        </div>
        <div className="flex gap-4 items-end justify-end">
          <button
            className="hover:bg-red-300 p-2 rounded-md"
            onClick={() => setIsBoxOpne(false)}
          >
            Cancel
          </button>
          <button
            className="bg-red-600 text-white rounded-md p-2"
            onClick={HandleDeletUser}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserBox;
