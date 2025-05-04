'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../styles/register.css';

export default function Auth() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    panCard: '',
    gstNumber: '',
    bankName: '',
    bankAccount: '',
    ifscCode: '',
    taxStatus: '',
    course: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        alert('Registration successful!');
        router.push('/login');
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    }
  };

  return (
    <div className="form-wrapper">
      <div className="container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <h3>Personal Information</h3>
          <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
          <input type="text" name="city" placeholder="City" onChange={handleChange} required />
          <input type="text" name="state" placeholder="State" onChange={handleChange} required />
          <input type="number" name="pincode" placeholder="Pincode" onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email ID" onChange={handleChange} required />

          <h3>Password</h3>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />

          <h3>Company Details</h3>
          <input type="text" name="companyName" placeholder="Company Name" onChange={handleChange} required />
          <input type="text" name="panCard" placeholder="PAN Card" onChange={handleChange} required />
          <input type="text" name="gstNumber" placeholder="GST Number" onChange={handleChange} required />
          <input type="text" name="bankName" placeholder="Bank Name" onChange={handleChange} required />
          <input type="text" name="bankAccount" placeholder="Bank Account Number" onChange={handleChange} required />
          <input type="text" name="ifscCode" placeholder="IFSC Code" onChange={handleChange} required />

          <h3>Tax Status</h3>
          <div className="radio-group">
            {['individual', 'proprietorship', 'llp', 'pvtltd', 'ltd'].map((status) => (
              <label key={status}>
                <input
                  type="radio"
                  name="taxStatus"
                  value={status}
                  onChange={handleChange}
                  required
                />{' '}
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </label>
            ))}
          </div>

          <h3>Courses</h3>
          <div className="radio-group">
            {[
              ['cp-bfsi', 'CP-Banking, Financial Services & Insurance'],
              ['ibop', 'Investment Banking Operation'],
              ['bba', 'BBA in BFSI & IBOP'],
              ['mba', 'MBA in Finance'],
              ['upi', 'UPI-Study Abroad'],
              ['bca', 'BCA with Cloud Computing'],
              ['pgditm', 'PGDITM-Cyber Security & Forensics'],
            ].map(([value, label]) => (
              <label key={value}>
                <input
                  type="radio"
                  name="course"
                  value={value}
                  onChange={handleChange}
                  required
                />{' '}
                {label}
              </label>
            ))}
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
