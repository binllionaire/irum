
import './App.css';
import Iframe from 'react-iframe'
import mainimg from "./img/main.png"
import Mmainimg from "./img/Mmain.png"
import winterimg from "./img/winter.png"
import contentsimg from "./img/contents.png"
import goalimg from "./img/goal.png"
import stepimg from "./img/step.png"
import guideimg from "./img/guide.png"
import instaimg from "./img/instagram.png"
import talkimg from "./img/talk.png"
import youtubeimg from "./img/youtube.png"
import menubarimg from "./img/menubar.png"
import { Link } from 'react-scroll';
import { isMobile } from 'react-device-detect';
import {useState} from 'react';

function App() {
  const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
  const toggleMenu = () => {
        setMenu(isOpen => !isOpen); // on,off 개념 boolean
    }
const renderItems = () => {
  if(isMobile){
     return (
      <div className="App">
        <header id='Mheader'>
        <img id="menu" onClick={()=>toggleMenu()} src={menubarimg} width="45px"></img>
          <div id="Mlogo">
          <p>IRUM</p>
          </div>
  
        </header>
        <body id="MBody">
        <div className={isOpen ? "show-menu" : "hide-menu"}> 
        <div id="Mtab" >
          <Link to="home" spy={true} smooth={true}>
          <p id="tabhome" onClick={()=>toggleMenu()}>홈</p>
          </Link>
          <Link to="winter" spy={true} smooth={true}>
          <p id="tabwinter" onClick={()=>toggleMenu()}>윈터스쿨</p>
          </Link>
          <Link to="contents" spy={true} smooth={true}>
          <p id="tabcontents" onClick={()=>toggleMenu()}>콘텐츠</p>
          </Link>
         <Link to="goal" spy={true} smooth={true}>
          <p id="tabgoal" onClick={()=>toggleMenu()}>핵심목표</p>
          </Link>
         <Link to="step" spy={true} smooth={true}>
          <p id="tabstep" onClick={()=>toggleMenu()}>입학절차</p>
          </Link>
         <Link to="guide" spy={true} smooth={true}>
          <p id="tabguide" onClick={()=>toggleMenu()}>모집개요</p>
          </Link>
          <Link to="map" spy={true} smooth={true}>
          <p id="tabmap" onClick={()=>toggleMenu()}>오시는길</p>
          </Link>
          </div>
          </div>
          <div id="home">
          <img src={Mmainimg} />
          </div>
          <div id="winter">
            <p className="subTitle">윈터스쿨</p>
            <hr/>
            <img src={winterimg} width = "70%"/>
          </div>
          <div id="contents">
            <p className="subTitle">컨텐츠</p>
            <hr/>
            <img src={contentsimg} width = "70%"/>
          </div>
          <div id="goal">
            <p className="subTitle">핵심목표</p>
            <hr/>
            <img src={goalimg} width = "70%"/>
          </div>
          <div id="guide">
            <p className="subTitle">모집개요</p>
            <hr/>
            <img src={guideimg} width = "70%"/>
          </div>
          <div id="step">
            <p className="subTitle">입학절차</p>
            <hr/>
            <img src={stepimg} width = "70%"/>
          </div>
          <div id="map">
            <p className="subTitle">오시는길</p>
            <hr/>
            <Iframe id="googlemap" url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.873550955096!2d129.09977507637822!3d37.48731022866639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3561b8fd4ace2685%3A0x6b22507ca18b3d7d!2z6rCV7JuQ64-EIOuPme2VtOyLnCDssq3smrTroZwgODM!5e0!3m2!1sko!2skr!4v1668051414121!5m2!1sko!2skr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
          </div>
        </body>
        <footer id="MFooter">
          <div id="footerLeft">
          <p id="footerlogo" align="left">IRUM</p>
          <p align="left">이룸입시센터</p>
          <p align="left">강원도 동해시 청운로 83</p>
          <p align="left">+82 10-7472-6563</p>
  ​        <p align="left">MADE BY IRUM IPSI CENTER</p>
          </div>
          <div id="MfooterRight">
          <img src={youtubeimg} width="30px" onClick={() => window.open('https://www.youtube.com/channel/UChuejmRm3YhXvQ4ytzosh6g', '_blank')}></img>
          <img src={instaimg} width="30px" onClick={() => window.open(' https://www.instagram.com/invites/contact/?i=1jke3ik6an90q&utm_content=pqvyjzl', '_blank')}></img>
          <img src={talkimg} width="30px" onClick={() => window.open('http://pf.kakao.com/_BjFbxj', '_blank')}></img>
          </div>
        </footer>
      </div>
    );
  }
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
        <Link to="step" spy={true} smooth={true}>
        <p id="tabstep">입학절차</p>
        </Link>
        <Link to="guide" spy={true} smooth={true}>
        <p id="tabguide">모집개요</p>
        </Link>
        <Link to="goal" spy={true} smooth={true}>
        <p id="tabgoal">핵심목표</p>
        </Link>
        <Link to="contents" spy={true} smooth={true}>
        <p id="tabcontents">콘텐츠</p>
        </Link>
        <Link to="winter" spy={true} smooth={true}>
        <p id="tabwinter">윈터스쿨</p>
        </Link>
        <Link to="home" spy={true} smooth={true}>
        <p id="tabhome">홈</p>
        </Link>
        </div>
      </header>
      <body>
        <div id="home">
        <img src={mainimg} width = "70%"/>
        </div>
        <div id="winter">
          <p className="subTitle">윈터스쿨</p>
          <hr/>
          <img src={winterimg} width = "70%"/>
        </div>
        <div id="contents">
          <p className="subTitle">컨텐츠</p>
          <hr/>
          <img src={contentsimg} width = "70%"/>
        </div>
        <div id="goal">
          <p className="subTitle">핵심목표</p>
          <hr/>
          <img src={goalimg} width = "70%"/>
        </div>
        <div id="guide">
          <p className="subTitle">모집개요</p>
          <hr/>
          <img src={guideimg} width = "70%"/>
        </div>
        <div id="step">
          <p className="subTitle">입학절차</p>
          <hr/>
          <img src={stepimg} width = "70%"/>
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
  return(
    <div>
    {renderItems()}
    </div>
  )
}

export default App;