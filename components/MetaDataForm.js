



import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
import React, { useState } from "react";
 const MyMetaForm= () => {
  // Define state variables to hold form data
    const [data, setData] = useState([]);
    const [userwallet, setUserWallet] = useState("");
    const [mintingwallet, setMintingWallet] = useState("");


  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));


  // Function to handle form submission
   const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with formData
    console.log('Form Data:', formData);
    const formDataMeta = formData;
    // You can save formData to a variable or send it to an API, etc.


  // Render the component
  return (

    <div>
      <h1>My Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="UID" value={formData.UID} onChange={handleInputChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="number" name="userwallet" value={formData.userwallet} onChange={handleInputChange} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="mintingwallet" value={formData.mintingwallet} onChange={handleInputChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>

)


}
}
}
export default MyMetaForm
