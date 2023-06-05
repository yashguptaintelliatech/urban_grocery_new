import React, { useState } from 'react'

export const AddressForm = () => {
  const [addressData, setAddressData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddressData({ ...addressData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(addressData);
    setAddressData({
      name: '',
      email: '',
      phone: '',
      city: '',
    })
    
  };
  return (
    <div className="flex justify-center items-center relative">
        <div className="container my-4 px-4 lg:px-20 opacity-70">
            <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold uppercase text-3xl">Address : </h1>
              </div>
              <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=" Name*"
                  name="name" value={addressData.name} onChange={handleInputChange}
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="City"
                  name="city" value={addressData.city} onChange={handleInputChange}
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  placeholder="Email*"
                  type="email" name="email" value={addressData.email} onChange={handleInputChange}
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  placeholder="number*"
                  type="Phone" name="phone" value={addressData.phone} onChange={handleInputChange}
                />
              </div>
             
              <div className="my-2 w-1/2 lg:w-1/4">
                <button
                  className="uppercase text-sm font-bold tracking-wide bg-lime text-gray-100 p-3 rounded-lg w-full 
                  focus:outline-none focus:shadow-outline" 
                >
                  Save Address
                </button>
              </div>
              </form>     
                   
            </div>
          </div>
    </div>
  )
}
