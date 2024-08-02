// AddClientModal.js
import React from 'react';
import './AddClientModal.css';

const AddClientModal = ({ close }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={close}>×</button>
        <h2>إضافة موكل</h2>
        <form className="add-client-form">
          <div className="form-group radio-group">
            <label>النوع *</label>
            <div>
              <label>
                <input type="radio" name="type" value="مادي" />
                مادي
              </label>
              <label>
                <input type="radio" name="type" value="معنوي" />
                معنوي
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>الإسم الكامل *</label>
            <input type="text" placeholder="أدخل الإسم الكامل" />
          </div>
          <div className="form-group">
            <label>البريد الإلكتروني</label>
            <input type="email" placeholder="أدخل البريد الإلكتروني" />
          </div>
          <div className="form-group">
            <label>الهاتف</label>
            <input type="tel" placeholder="أدخل الهاتف" />
          </div>
          <div className="form-group">
            <label>العنوان</label>
            <input type="text" placeholder="أدخل العنوان" />
          </div>
          <div className="form-group">
            <label>المدينة *</label>
            <select>
              <option value="">اختر من القائمة</option>
              <option value="city1">مدينة 1</option>
              <option value="city2">مدينة 2</option>
            </select>
          </div>
          <div className="form-group">
            <label>رقم البطاقة الوطنية</label>
            <input type="text" placeholder="أدخل رقم البطاقة الوطنية" />
          </div>
          <div className="form-group">
            <label>ICE (التعريف الموحد للمقاولة)</label>
            <input type="text" placeholder="أدخل ICE" />
          </div>
          <div className="form-group radio-group">
            <label>الجنس *</label>
            <div>
              <label>
                <input type="radio" name="gender" value="ذكر" />
                ذكر
              </label>
              <label>
                <input type="radio" name="gender" value="أنثى" />
                أنثى
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>ملاحظة</label>
            <textarea placeholder="أدخل ملاحظة"></textarea>
          </div>
          <button type="submit" className="save-button">حفظ</button>
        </form>
      </div>
    </div>
  );
};

export default AddClientModal;