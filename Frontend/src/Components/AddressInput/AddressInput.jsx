import React from "react";
import AddresBody from "./AddressBody.jsx";
import AddressHeader from "./AddressHeader.jsx";
import { motion } from "framer-motion";

const AddressInput = ({ setAddressOpen, setCheckoutOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="w-[350px] max-md:w-full h-screen fixed top-0 right-0 bg-white z-[100] backdrop-blur-md drop-shadow-md flex flex-col"
    >
      <AddressHeader setAddressOpen={setAddressOpen} />
      <AddresBody
        setAddressOpen={setAddressOpen}
        setCheckoutOpen={setCheckoutOpen}
      />
    </motion.div>
  );
};

export default AddressInput;
