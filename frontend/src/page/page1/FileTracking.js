import React from 'react';
import './FileTracking.css';
import Top from '../../components/top/Top';  // Import the Top component

const FileTracking = ({ showTop, onShowTop, onHideTop }) => {
  return (
    <div className='tatabo3-section'>
      <h1 className="title">تتبع الملفات</h1>
      <div className='containers'>
        <div className="container">
          <main>
            <section className="search-section">
              <div className="form">
                <div className="form-group1">
                  <label className="label1">البحث عن :</label>
                  <button className="input1">ملف التنفيذ على شركات التأمين</button>
                </div>
                <div className="form-group">
                  <label className="label">المحكمة :</label>
                  <select className="select1">
                    <option>اختيار محكمة الاستئناف</option>
                  </select>
                  <select className="select">
                    <option>اختيار المحكمة الابتدائية</option>
                  </select>
                </div>
              </div>
            </section>
          </main>
        </div>

        {!showTop ? (
          <div className="container1">
            <div className="form-group2">
              <button className="input-button1">رقم التنفيذ</button>
              <button className="input-button" onClick={onShowTop}>متعدد الخصائص</button>
            </div>
            <div className="file-number">
              <label className="labelé">الرقم الكامل للملف :</label>
              <input type="text" className="input-sana" placeholder="رقم الملف" />
              <input type="text" className="input-ramz" placeholder="رمز الملف"/>
              <input type="text" className="input-year" placeholder="السنة" />
              <button className="search-btn">بحث</button>
            </div>
          </div>
        ) : (
          <Top onHideTop={onHideTop} />
        )}
      </div>
    </div>
  );
}

export default FileTracking;
