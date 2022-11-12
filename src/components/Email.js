import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Email() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
          alert("온라인 신청이 완료되었습니다.");
        }, (error) => {
          alert("전송을 실패했습니다.");
        });
    };
    return(
        <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="학생 이름" />
              <input type="tel" name="school_grade" placeholder="학교 및 학년" />
              <input type="email" name="email" placeholder="휴대폰 번호" />
              <input type="submit" value="Send" />
            </form>
    );
}
export default Email;