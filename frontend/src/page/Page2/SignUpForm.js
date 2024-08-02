// In SignUpForm.js
import React, { useState } from 'react';
import './SignUpForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../components/AuthContext';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/submit', formData);
      // Assuming that after signup, the user should be logged in automatically
      await login(formData.email, formData.password);
      navigate('/abdo');
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return (
    <div className="signup-form-container">
      <div className="form-section">
        <h1>إنشاء حساب</h1>
        <p>املأ الحقول لإنشاء حساب جديد</p>
        <form onSubmit={handleSubmit}>
          <label>إسم الشخصي</label>
          <input className='firstname1' type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
          
          <label>إسم العائلي</label>
          <input className='lastname1' type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
          
          <label>البريد الإلكتروني</label>
          <input className='email1' type="email" name="email" value={formData.email} onChange={handleChange} />
          
          <label>كلمة المرور</label>
          <input className='password1' type="password" name="password" value={formData.password} onChange={handleChange} />
          
          <label>تأكيد كلمة المرور</label>
          <input className='confirmPassword1' type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          
          <button className='submit1' type="submit">إنشاء حساب</button>
        </form>
      </div>
      <img src='/TOP.jfif' alt='Side Image' />
    </div>
  );
}

export default SignUpForm;
