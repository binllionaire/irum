
import './App.css';
import { isMobile } from 'react-device-detect';
import Mobile from './components/Mobile'
import Pc from './components/Pc'
function App() {

const renderItems = () => {
  if(isMobile){
    return <Mobile/>
  }
  else{
    return <Pc/>
  }
  
}
  return(
    <div>
    {renderItems()}
    </div>
  )
}

export default App;
