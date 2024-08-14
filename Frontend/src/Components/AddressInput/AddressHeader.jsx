import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";

const AddressHeader = ({ setAddressOpen }) => {
  return (
    <div className="w-full flex ic justify-between px-4 py-4">
      <MdOutlineKeyboardBackspace
        className="text-textColor text-2xl cursor-pointer"
        onClick={() => setAddressOpen(false)}
      />
      <div className="flex items-center gap-2">
        <p className="text-headingColor">Address</p>
      </div>
      <div>
        <FaAddressCard className="text-xl cursor-pointer text-cartNumBg" />
      </div>
    </div>
  );
};

export default AddressHeader;
