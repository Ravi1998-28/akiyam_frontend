import React, { useState } from "react";
import axios from "axios";
import '../../scss/marathon/_index.scss';  // Import the new CSS
import ReactCarousel from "../../component/carousels/Carousel";

const MarathonRegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    email: "",
    phone: "",
    age: "",
    gender: "Male",
    category: "Half Marathon",
    city: "",
    state: "",
    country: "India",
    paymentDetails: {
      amount: 1500,
      paymentMethod: "UPI",
      transactionId: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("paymentDetails.")) {
      const field = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        paymentDetails: {
          ...prevData.paymentDetails,
          [field]: value,
        },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://akiyam-backend.onrender.com/marathon/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Registration successful!");
      console.log(response.data);
    } catch (error) {
      alert("Registration failed.");
      console.error(error);
    }
  };

  return (
    <>
        <ReactCarousel/>
    <div className="form-container">
      <h2>Marathon Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Father's Name</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Half Marathon">Half Marathon</option>
            <option value="Full Marathon">Full Marathon</option>
            <option value="10K Run">10K Run</option>
            <option value="5K Run">5K Run</option>
          </select>
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        <h3>Payment Details</h3>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            name="paymentDetails.amount"
            value={formData.paymentDetails.amount}
            onChange={handleChange}
            required
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Payment Method</label>
          <select
            name="paymentDetails.paymentMethod"
            value={formData.paymentDetails.paymentMethod}
            onChange={handleChange}
          >
            <option value="UPI">UPI</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Net Banking">Net Banking</option>
          </select>
        </div>
        <div className="form-group">
          <label>Transaction ID</label>
          <input
            type="text"
            name="paymentDetails.transactionId"
            value={formData.paymentDetails.transactionId}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-submit">Register</button>
      </form>
    </div>
    </>
  );
};

export default MarathonRegisterForm;
