import React from 'react';
import './DossierCriminel.css';

const ServiceAvocat = () => {
  return (
    <div className="service-avocat">
      <h1>تعريف الموقع "Service Avocat"</h1>
      <div className="content-box">
        <p className="intro">موقع «Service Avocat» هو منصة متقدمة تهدف إلى تسهيل وتحسين إدارة العمل اليومي للمحامين. يتميز هذا الموقع بالعديد من الخصائص والوظائف التي تجعل من السهل على المحامين متابعة القضايا وإدارة مواعيدهم والتفاعل مع عملائهم بفعالية. من بين المميزات الرئيسية:</p>
        
        <h2>إدارة القضايا:</h2>
        <p>يمكن للمحامي إدخال رقم القضية وبيانات المحكمة والسنة التي بدأت فيها القضية، ويقوم النظام بإرسال إشعارات عند حدوث أي تطورات في القضية.</p>
        
        <h2>إدارة المواعيد والجلسات:</h2>
        <p>يمكن للمحامي تخزين جميع المواعيد والجلسات المتعلقة بالقضايا، مع إمكانية الحصول على تذكيرات تلقائية.</p>
        
        <h2>إدارة العملاء:</h2>
        <p>يمكن للمحامي تتبع جميع العملاء وإدارة تفاصيلهم وتاريخ قضاياهم والمواعيد المرتبطة بهم.</p>
        
        <h2>الإشعارات والتنبيهات:</h2>
        <p>يقوم الموقع بإرسال إشعارات وتنبيهات تلقائية للمحامي عند حدوث أي تغيير أو تطور في القضايا أو عند اقتراب مواعيد الجلسات.</p>
        
        <h2>التكامل مع البريد الإلكتروني:</h2>
        <p>يمكن للنظام إرسال تحديثات ومعلومات مباشرة إلى البريد الإلكتروني للمحامي، مما يسهل عليه البقاء على اطلاع دائم.</p>
      </div>

      <h1>الاستخدامات والفوائد</h1>
      <div className="content-box">
        <h2>لتنظيم الأعمال:</h2>
        <p>يساعد الموقع المحامين في تنظيم عملهم بشكل فعال وسهل، مما يوفر الوقت والجهد.</p>
        
        <h2>متابعة دقيقة للقضايا:</h2>
        <p>يتيح للمحامين متابعة دقيقة لكافة تفاصيل القضايا والتطورات، مما يساهم في تحسين أداء العمل القانوني.</p>
        
        <h2>التواصل مع العملاء:</h2>
        <p>يسهل الموقع التواصل مع العملاء وتحديثهم بمستجدات قضاياهم، مما يزيد من رضا العملاء وثقتهم.</p>
        
        <h2>تجنب النسيان والتأخير:</h2>
        <p>من خلال الإشعارات والتذكيرات، يساعد الموقع المحامين على عدم نسيان أي موعد أو جلسة مهمة.</p>
      </div>
    </div>
  );
};

export default ServiceAvocat;