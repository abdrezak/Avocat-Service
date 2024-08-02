import React, { useState } from 'react';
import './ClientList.css';
import AddClientModal from '../../ajouter/AddClientModal';

const ClientList = () => {

const [open , setOpen] =useState(false)


const openModal = () => {
  setOpen((perv) => !perv)
}

  return (
    <>
  <div className="client-list">
      <div className="client-list-header">
        <h2>إدارة الموكلين</h2>
      </div>


    <div className='ness'>
      <div className="client-list-actions">
        <select className='tasdir_lbayanat'>
        <option>تصدير البيانات</option>
        </select> 
        <button className='hadf'>حذف</button>
        <button className='idafat_mowakil' onClick={openModal}>إضافة موكل</button>
      </div>
      <div className="filter-sort">
        <button className='baht'>الفلاتر</button>
        <select className='trtib'>
        <option>ترتيب</option>
          </select>    
        <input className='rochirch' type="text" placeholder="البحث" />
      </div>

      <div><select className='achra'>
        <option>10</option>
          </select>    
      </div>

      <div className='tableau'>
      <table>
        <thead>
          <tr>
            <th><input type='checkbox'/></th> 
            <th>الرمز</th>
            <th>الاسم الكامل</th>
            <th>الهاتف</th>
            <th>المدينة</th>
            <th>الإجراءات</th>
          </tr>
        </thead>
      </table>
      <div className='sode'>لم يتم العثور على بيانات</div>
      </div>
    
      <div className="pagination">
        <button className='lisar'>&lt;</button>
        <span>1</span>
        <button className='liman'>&gt;</button>
      </div>
    </div>
  </div>

  {open ? <AddClientModal close={openModal}/>
  :
  null}
  </>
  );
};

export default ClientList;
