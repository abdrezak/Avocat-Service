import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-info1">
      <h2>من أجل طلب التوضيحات المرجو الاتصال بنا</h2>
      <p>على العنوان التالي</p>
      </div>
      <div className="info-box">
        <div className="info-item">
          <p>وزارة العدل : ساحة المامونية، ص.ب 1015، الرباط، المغرب</p>
        </div>
        <div className="info-item1">
          <p>بالنسبة للأسئلة ذات الطابع التقني المرجو مراسلتنا على</p>
          <p>:البريد التالي</p>
          <p className="email">Avocat Service.support@justice.gov.ma</p>
        </div>
        <div className="info-item2">
          <p>+212 000 00 000</p>
        </div>
          <p className='info-item3'>مركز النداء</p>

        <div className="info-item4">
          <p>+212 000 00 000</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
