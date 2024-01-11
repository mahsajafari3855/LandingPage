import React, { useState } from "react";
import Image from "next/image";
import Image1 from "../../assets/user.png";
import API_ENDPOINT from "../api/register";

interface Register {
  backgroundClass?: string;
  withSkew: boolean;
}

const RegisterSection: React.FC<Register> = ({ backgroundClass, withSkew }) => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      username,
      phoneNumber,
    };

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Handle response
      if (response.ok) {
        // Request successful, show confirmation box
        setShowConfirmation(true);
        // Clear form fields
        setUsername("");
        setPhoneNumber("");
      } else {
        // Request failed
        console.error("Failed to send data.");
        // always api is 404(its not exist) just for showing message

        setShowConfirmation(true);
        // Clear form fields
        setUsername("");
        setPhoneNumber("");
      }
    } catch (error) {
      console.error("Error sending data:", error);
      // always api is 404(its not exist) just for showing message
      setShowConfirmation(true);
      // Clear form fields
      setUsername("");
      setPhoneNumber("");
    }
  };

  return (
    <div className={`relative mx-auto`}>
      {withSkew && (
        <div
          className={`absolute ${backgroundClass} inset-0 transform -skew-y-15 z-0`}
        ></div>
      )}
      <div
        className={`flex flex-col sm:flex-row md:flex-row-reverse justify-center relative z-10 pb-12`}
      >
        <div className="flex flex-col p-10 md:p-24">
          {!showConfirmation && (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col bg-gray-900 p-8 rounded-lg shadow-md"
            >
              <label htmlFor="username" className="text-md  text-white mb-2">
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border text-black rounded-lg p-3 mb-4 focus:outline-none focus:ring focus:border-yellow"
              />
              <label htmlFor="phoneNumber" className="text-md  text-white mb-2">
                Phone Number:
              </label>
              <input
                type="number"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border text-black rounded-lg p-3 mb-4 focus:outline-none focus:ring focus:border-gray-300"
              />
              <button
                type="submit"
                className="bg-yellow text-white py-2 px-4 rounded-md hover:bg-yellow focus:outline-none focus:ring focus:border-gray-300"
              >
                Submit
              </button>
            </form>
          )}

          {showConfirmation && (
            <div className="bg-gray-900 text-waite p-4 mt-4 rounded-md">
              <p className="text-lg">Thank You!</p>
              <p className="text-lg">Registration Successful!</p>
            </div>
          )}
        </div>
        <div className=" flex flex-col md:pt-20 ">
          <Image src={Image1} alt="Your Image" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
