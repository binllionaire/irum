import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useState} from 'react';
function Email() {
    const form = useRef();
    const [text, setText] = useState('');
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_eh0vl0l', 'template_71iiefc', form.current, 'zOsccAb2rs_ldUwON')
        .then((result) => {
          alert("온라인 신청이 완료되었습니다.");
        }, (error) => {
          alert("전송을 실패했습니다.");
        });
    };
    const onReset = () => {
        setText('');
      };
    return(
        <form ref={form} onSubmit={sendEmail}>
              <input value={text} type="text" name="name" placeholder="학생 이름" />
              <input value={text} type="text" name="school_grade" placeholder="학교 및 학년" />
              <input value={text} type="text" name="phone" placeholder="휴대폰 번호" />
              <input id="send" type="submit" value="온라인 접수" onClick={onReset}/>
            </form>
    );
}
export default Email;