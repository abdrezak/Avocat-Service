import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-container">
      <h2>من أجل طلب التوضيحات المرجو الاتصال بنا</h2>
      <h3>على العنوان التالي</h3>
      <div className="info-box">
        <div className="info-item">
          <p>وزارة العدل : ساحة المامونية، ص.ب 1015، الرباط، المغرب</p>
        </div>
        <p className="subtitle">بالنسبة للأسئلة ذات الطابع التقني المرجو مراسلتنا على البريد التالي:</p>
        <div className="info-item">
          <p>Avocat Service.support@justice.gov.ma</p>
        </div>
        <div className="info-item">
          <p>+212 000 00 000</p>
        </div>
        <p className="subtitle">مركز النداء</p>
        <div className="info-item">
          <p>+212 000 00 000</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
