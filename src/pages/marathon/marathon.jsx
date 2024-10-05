import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../scss/marathon/_index.scss';  // Import the new CSS
import ReactCarousel from "../../component/carousels/Carousel";
import Spinner from "../../component/spinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';


const MarathonRegisterForm = () => {

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      fatherName: '',
      email: '',
      phone: '',
      age: '',
      gender: 'Male',
      category: 'Half Marathon',
      city: '',
      state: '',
      country: 'India',
      paymentDetails: {
        amount: 1500,
        paymentMethod: 'UPI',
        transactionId: 'ndi873434',
      },
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required'),
      fatherName: Yup.string()
        .required('FatherName is required'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
        .required('Phone number is required'),
      age: Yup.number()
        .min(1, 'Age must be at least 1')
        .max(120, 'Age must be less than or equal to 120')
        .required('Age is required'),
      gender: Yup.string()
        .oneOf(['Male', 'Female', 'Other'], 'Invalid gender')
        .required('Gender is required'),
      category: Yup.string()
        .oneOf(['Half Marathon', 'Full Marathon', '10K', '5K'], 'Invalid category')
        .required('Category is required'),
      city: Yup.string()
        .required('City is required'),
      state: Yup.string()
        .required('State is required'),
      country: Yup.string()
        .required('Country is required'),
      paymentDetails: Yup.object({
        amount: Yup.number()
          .min(1, 'Amount must be greater than 0')
          .required('Amount is required'),
        paymentMethod: Yup.string()
          .oneOf(['UPI', 'Credit Card', 'Debit Card'], 'Invalid payment method')
          .required('Payment method is required'),
        transactionId: Yup.string()
          .required('Transaction ID is required'),
      }),
    }),
    onSubmit: async (e) => {
      console.log('etstsshsh-----')
      // e.preventDefault();
      setLoading(true); // Show loading spinner
      try {
        const response = await axios.post(
          "https://akiyam-backend.onrender.com/marathon/register",
          e,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        toast.success("Registration successful!");
        console.log(response.data);
      } catch (error) {
        toast.error(`${error.response.data.errors[0].msg}`);
        // console.error(error.response.data.errors[0].msg,"------------->err");
      } finally {
        setLoading(false);
      }
    },
  });

  const handleClearForm = () => {
    formik.resetForm();
  };


  return (
    <>
      <div className="carousalDiv">
        <ReactCarousel />
      </div>
      <div className="form-container">
        <h2>Marathon Registration 2025</h2>
        <Spinner isLoading={[loading]} />


        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error-message">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label>Father's Name</label>
            <input
              type="text"
              name="fatherName"
              value={formik.values.fatherName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.fatherName && formik.errors.fatherName ? (
              <div className="error-message">{formik.errors.fatherName}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-message">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="error-message">{formik.errors.phone}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.age && formik.errors.age ? (
              <div className="error-message">{formik.errors.age}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {formik.touched.gender && formik.errors.gender ? (
              <div className="error-message">{formik.errors.gender}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="error-message">{formik.errors.city}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label>State</label>
            <input
              type="text"
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
            />
            {formik.touched.state && formik.errors.state ? (
              <div className="error-message">{formik.errors.state}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              readOnly
            />
            {formik.touched.country && formik.errors.country ? (
              <div className="error-message">{formik.errors.country}</div>
            ) : null}
          </div>
          {/* 

          <h3>Payment Details</h3>
          <div className="form-group">
            <label>Amount</label>
            <input
              type="number"
              name="paymentDetails.amount"
              value={formik.values.paymentDetails.amount}
              onChange={formik.handleChange}
              required
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Payment Method</label>
            <select
              name="paymentDetails.paymentMethod"
              value={formik.values.paymentDetails.paymentMethod}
              onChange={formik.handleChange}
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
              value={formik.values.paymentDetails.transactionId}
              onChange={formik.handleChange}
              required
            />
          </div> */}

          <button type="submit" className="btn-submit">Register</button>
          {/* <button type="button" onClick={handleClearForm} className="btn-submit">
            Clear Form
          </button> */}
        </form>

      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}  // Toast disappears after 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default MarathonRegisterForm;
