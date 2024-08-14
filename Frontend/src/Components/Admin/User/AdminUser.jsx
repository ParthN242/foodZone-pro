import React, { useState } from "react";
import AdminHeader from "../Header/AdminHeader";
import { useSelector } from "react-redux";
import userAvatar from "../../../img/avatar.png";
import { MdEmail, MdDelete } from "react-icons/md";
import DeleteUserBox from "./DeleteUserBox";

const AdminUser = () => {
  const { users } = useSelector((state) => state.allUsers);

  return (
    <div className="flex flex-col max-h-screen">
      <AdminHeader pageTitle={"Users"} />

      <div className="flex-1 grid grid-cols-3 gap-4 mt-10 px-5 overflow-auto cartScrollbar">
        {users.map((item) => (
          <UserCard key={item._id} userData={item} />
        ))}
      </div>
    </div>
  );
};

const UserCard = ({ userData }) => {
  const [isBoxOpne, setIsBoxOpne] = useState(false);
  return (
    <>
      {isBoxOpne && (
        <DeleteUserBox
          setIsBoxOpne={setIsBoxOpne}
          id={userData._id}
          email={userData.email}
        />
      )}
      <div className="max-w-sm h-auto bg-orange-600 rounded-lg py-2">
        <div className="flex items-center justify-center flex-col gap-3">
          <div>
            <img src={userAvatar} alt="" className="w-24 h-24 rounded-full" />
          </div>
          <p className="text-white font-medium text-xl">User</p>
          <p className="text-gray-300 text-sm ">{userData.email}</p>
          <div className="flex gap-3 ">
            <button className="flex items-center gap-2 bg-primary shadow-lg text-orange-600 px-2 py-1 rounded-lg">
              <MdEmail />
              <p>password</p>
            </button>
            <button
              className="flex items-center gap-2 bg-primary shadow-lg text-orange-600 px-2 py-1 rounded-lg"
              onClick={() => setIsBoxOpne(true)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUser;
