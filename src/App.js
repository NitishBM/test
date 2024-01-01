import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textforms from './Components/TextForm'; 
import Alert from './Components/Alert';

function App() {
  
  //This UseState is for Dark Mode
  const [mode, setMode] = useState ('light');

  //This UseState is for Alert
  const [alert, setAlert] = useState(null);

  //This Method returns setting the Alert message
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  //This method returns weather dark mode is light or dark
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#161623";
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>

      <Alert alert={alert}/>

      <Textforms showAlert={showAlert} heading = "Enter the text to analyze" mode={mode} />
      {/* <About/> */}

      

    </>
  );
}



export default App;
