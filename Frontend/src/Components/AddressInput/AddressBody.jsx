import React, { useState } from "react";

const AddressBody = ({ setCheckoutOpen, setAddressOpen }) => {
  const addressInfo = localStorage.getItem("addressInfo")
    ? JSON.parse(localStorage.getItem("addressInfo"))
    : null;
  console.log("addresInfo: ", addressInfo);
  const [address, setAddress] = useState(addressInfo?.address || "");
  const [number, setNumber] = useState(addressInfo?.number || "");
  const [postalCode, setPostalCode] = useState(addressInfo?.postalCode || "");
  const [city, setCity] = useState(addressInfo?.city || "");
  const [country, setCountry] = useState(addressInfo?.country || "");
  // handle Adress
  const handleAddress = () => {
    localStorage.setItem(
      "addressInfo",
      JSON.stringify({ address, number, postalCode, city, country })
    );
    setAddressOpen(false);
    setCheckoutOpen(true);
  };
  return (
    <div className="w-full h-full rounded-t-[2rem] p-3 bg-cartBg flex flex-col px-2 max-md:px-1">
      <form className="flex flex-col gap-2">
        <div className="flex flex-col">
          <label
            htmlFor="add"
            className="text-white font-semibold text-sm py-1"
          >
            Address
          </label>
          <textarea
            rows={2}
            type="text"
            name="add"
            id="add"
            placeholder="Enter your Address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            className="bg-transparent border-2 border-gray-500 px-3 py-2 rounded-lg text-orange-500 focus:outline-none focus:border-orange-500"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="phone_number"
            className="text-white font-semibold text-sm py-1"
          >
            Phone Number
          </label>
          <input
            type="number"
            name="phone_number"
            id="phone_number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter your phone number"
            className="bg-transparent border-2 border-gray-500 px-3 py-2 rounded-lg text-orange-500 focus:outline-none focus:border-orange-500"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="postal"
            className="text-white font-semibold text-sm py-1"
          >
            Postal Code
          </label>
          <input
            type="number"
            name="postal"
            id="postal"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="Enter your postal code"
            className="bg-transparent border-2 border-gray-500 px-3 py-2 rounded-lg text-orange-500 focus:outline-none focus:border-orange-500"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="city"
            className="text-white font-semibold text-sm py-1"
          >
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter your city"
            className="bg-transparent border-2 border-gray-500 px-3 py-2 rounded-lg text-orange-500 focus:outline-none focus:border-orange-500"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="country"
            className="text-white font-semibold text-sm py-1"
          >
            Country
          </label>
          <input
            type="text"
            name="country"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Enter your country"
            className="bg-transparent border-2 border-gray-500 px-3 py-2 rounded-lg text-orange-500 focus:outline-none focus:border-orange-500"
          />
        </div>
        <button
          type="button"
          className="text-white text-lg bg-gradient-to-tr from-orange-400 to-orange-600 p-2 rounded-full flex gap-4 items-center justify-center mt-4"
          onClick={handleAddress}
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default AddressBody;
