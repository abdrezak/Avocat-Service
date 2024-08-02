import React from 'react';
import './top.css';

const Top = ({ onHideTop }) => {
  return (
    <div className='tatabo3-section1'>
      <div className="container2">     
        <main>
          <section className="search-section">
            <div className="form">
              <div className="form-group3">
                <button className="input-button2" onClick={onHideTop}>رقم التنفيذ</button>
                <button className="input-button3">متعدد الخصائص</button>
              </div>
              <div className="form-group4">
                <label className="label2">سنة التسجيل :</label>
                <input type="text" className="input2" placeholder="سنة التسجيل" />
              </div>
              <div className="form-group5">
                <label className="label3">نوعية الملف :</label>
                <input type="text" className="input3" placeholder="---" />
              </div>
              <div className="form-group6">
                <label className="label4">المحكمة المصدرة للحكم :</label>
                <select className="select2"><option>اختيار محكمة الاستئناف</option>
                </select>
                <select className="select3">
                  <option>اختيار المحكمة الابتدائية</option>
                </select>
              </div>
              <div className="form-group7">
                <label className="label5">إسم طالب التنفيذ :</label>
                <input type="text" className="input4" placeholder="الإسم الشخصي" />
                <input type="text" className="input5" placeholder="الإسم العائلي" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Top;
