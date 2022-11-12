import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Email() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_eh0vl0l', 'template_71iiefc', form.current, 'zOsccAb2rs_ldUwON')
        .then((result) => {
          alert("온라인 신청이 완료되었습니다.");
         document.getElementById('name').value='';
         document.getElementById('school_grade').value='';
         document.getElementById('phone').value='';
        }, (error) => {
          alert("전송을 실패했습니다.");
        });
    };
   
    return(
        <form ref={form} onSubmit={sendEmail}>
              <input id="name" type="text" name="name" placeholder="학생 이름" />
              <input id="school_grade"type="text" name="school_grade" placeholder="학교 및 학년" />
              <input id="phone" type="text" name="phone" placeholder="휴대폰 번호" />
              <input id="send" type="submit" value="온라인 접수"/>
            </form>
    );
}
export default Email;