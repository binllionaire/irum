import Iframe from 'react-iframe'
import mainimg from "../img/main.png"
import winterimg from "../img/winter2.png"
import contentsimg from "../img/contents1.png"
import contents2img from "../img/contents2.png"
import goalimg from "../img/goal2.png"
import stepimg from "../img/step2.png"
import guideimg from "../img/guide2.png"
import instaimg from "../img/instagram.png"
import talkimg from "../img/talk.png"
import youtubeimg from "../img/youtube.png"
import welcomeimg from "../img/welcome.png"
import { Link } from 'react-scroll';
import Email from "./Email";
function Pc() {
    return (
        <div className="App">
          <header>
            <div id="logo">
            <Link to="home" spy={true} smooth={true}>
            <p align="left">IRUM</p>
            </Link>
            </div>
            <div id="tab">
            <Link to="map" spy={true} smooth={true}>
            <p id="tabmap">오시는길</p>
            </Link>
            <Link to="welcome" spy={true} smooth={true}>
            <p id="tabcontents">인사말</p>
            </Link>
            <Link to="submit" spy={true} smooth={true}>
            <p id="tabsubmit">온라인접수</p>
            </Link>
            <Link to="step" spy={true} smooth={true}>
            <p id="tabstep">입학절차</p>
            </Link>
            <Link to="guide" spy={true} smooth={true}>
            <p id="tabguide">모집개요</p>
            </Link>
            
            <Link to="winter" spy={true} smooth={true}>
            <p id="tabwinter">윈터스쿨</p>
            </Link>
            <Link to="contents" spy={true} smooth={true}>
            <p id="tabcontents">콘텐츠</p>
            </Link>
            
            </div>
          </header>
          <body>
            <div id="home">
            <img src={mainimg} width = "70%"/>
            </div>
            
            <div id="contents">
              <p className="subTitle">컨텐츠</p>
              <hr/>
              <img src={contentsimg} width = "50%"/><br/><br/>
              <img src={contents2img} width = "50%"/>
            </div>
            <div id="winter">
              <p className="subTitle">윈터스쿨</p>
              <hr/>
              <img src={winterimg} width = "50%"/>
            </div>
            
            <div id="guide">
              <p className="subTitle">모집개요</p>
              <hr/>
              <img src={guideimg} width = "50%"/>
            </div>
            <div id="step">
              <p className="subTitle">입학절차</p>
              <hr/>
              <img src={stepimg} width = "50%"/>
            </div>
            <div id="submit">
            <p className="subTitle">온라인 접수</p>
              <hr/>
            <Email/>
            </div>
            <div id="welcome">
              <p className="subTitle">인사말</p>
              <hr/>
              <p id="welcomep">
              안녕하세요 이룸입시센터입니다.<br/><br/>

              끊임없이 변화하는 교육환경 속에서<br/>

              학생들이 입시를 확실하게 알고 대비할 수 있도록 <br/>

              도움을 주기 위해 입시센터를 개원하게 되었습니다. <br/><br/>

              이룸입시센터는 차별화된 1:1 맞춤형 프로그램을 구축하고 있으며<br/>

              체계적인 스케줄 훈련과 공부패턴 훈련으로<br/>

              학교 내신 및 학생부 관리는 물론<br/>

              모의고사와 수능을 준비하게 합니다. <br/><br/>

              또한 학생들은 대치동 현장 강의 학습 콘텐츠를 비롯해<br/>

              여러 퀄리티 높은 자료를 제공 받으며 학습하고,<br/>

              정확한 수치를 기반으로 한<br/>

              현실성 있는 수시, 정시 컨설팅을 받게 됩니다. <br/><br/>

              갈 수 있는 대학이 아닌, 가고 싶은 대학에<br/>

              진학할 수 있도록 돕겠습니다.<br/><br/>

              최선의 노력과<br/>
              최고의 커리큘럼으로 <br/>
              최상의 결과를 약속드립니다.<br/>

              감사합니다.<br/><br/>

              이룸입시센터장 김하은 올림
              </p>
            </div>
            <div id="map">
              <p className="subTitle">오시는길</p>
              <hr/>
              <Iframe id="googlemap" url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.873550955096!2d129.09977507637822!3d37.48731022866639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3561b8fd4ace2685%3A0x6b22507ca18b3d7d!2z6rCV7JuQ64-EIOuPme2VtOyLnCDssq3smrTroZwgODM!5e0!3m2!1sko!2skr!4v1668051414121!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
            </div>
          </body>
          <footer>
            <div id="footerLeft">
            <p id="footerlogo" align="left">IRUM</p>
            <p align="left">이룸입시센터</p>
            <p align="left">강원도 동해시 청운로 83</p>
            <p align="left">+82 10-7472-6563</p>
    ​        <p align="left">MADE BY IRUM IPSI CENTER</p>
            </div>
            <div id="footerRight">
            <img src={youtubeimg} width="30px" onClick={() => window.open('https://www.youtube.com/channel/UChuejmRm3YhXvQ4ytzosh6g', '_blank')}></img>
            <img src={instaimg} width="30px" onClick={() => window.open(' https://www.instagram.com/invites/contact/?i=1jke3ik6an90q&utm_content=pqvyjzl', '_blank')}></img>
            <img src={talkimg} width="30px" onClick={() => window.open('http://pf.kakao.com/_BjFbxj', '_blank')}></img>
            </div>
          </footer>
        </div>
      );
}
export default Pc;
