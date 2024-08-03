import React from 'react';
import './FileTracking.css';

const FileTracking = ({ showTop, onShowTop, onHideTop }) => {
  return (
    <div className="file-tracking">
      <h1>تتبع الملفات</h1>
      <div className="search-section">
        <div className="search-row">
          <label>البحث عن :</label>
          <input type="text" placeholder="ملف التنفيذ على شركات التأمين" className="search-input" />
        </div>
        <div className="search-row">
          <label>المحكمة :</label>
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" />
              اختيار محكمة الاستئناف
            </label>
            <label className="checkbox-label">
              <input type="checkbox" />
              اختيار المحكمة الابتدائية
            </label>
          </div>
        </div>
      </div>
      <div className="file-details-section">
        <div className="button-row">
          <button className="secondary-button">رقم التنفيذ</button>
          <button className="primary-button">متعدد الخصائص</button>
        </div>
        <div className="file-number-row">
          <label>الرقم الكامل للملف :</label>
          <div className="file-number-input">
            <input type="text" placeholder="رقم الملف" />
            <input type="text" placeholder="رمز الملف" />
            <input type="text" placeholder="السنة" />
          </div>
          <button className="search-button">بحث</button>
        </div>
    ) : (
       <top onHideTo={onHideTop} />
    )}
      </div>
    </div>
  );
};

export default FileTracking;
