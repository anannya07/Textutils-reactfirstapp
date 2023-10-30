
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React ,{useState} from 'react'
import Alert from './components/Alert';
{/*import { 
  BrowserRouter as Router,
  Routes,
   Route
  } from 'react-router-dom';*/}






function App() {
  const [mode,setMode]=useState('light');//whether dark mode is enabled or not using state
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{ 
       setAlert({
        msg:message,
        type:type
       })
       setTimeout(() => {
        setAlert(null);
       }, 1500);//1.5 sec
  }
  //for color palette
  {/*const RemovebodyClasses=()=>{
     document.body.classList.remove('bg-light')
     document.body.classList.remove('bg-success')
     document.body.classList.remove('bg-warning')
     document.body.classList.remove('bg-danger')
     document.body.classList.remove('bg-secondary')
     document.body.classList.remove('bg-info')
  }*/}

  const toggleMode = (cls) =>{
    //first removing so that it will toggle to the color pallete i want without reloading
   // RemovebodyClasses();
    //giving a classname to body
   // document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled","success");
    document.title="Textutils-Dark_mode";
   // setInterval(() => {
      //document.title="Textutils is amazing";//by this the title will change after 2 seconds
    //}, 2000);
    //setInterval(() => {
     // document.title="Install Textutils now";//by this the title will change after 1.5 seconds
   // }, 1500);//to flash the titles
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title="Textutils-light_mode";
    }
  }




  return (
    //Setting the router
   <>
 {/*<Router>*/}
<Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
  {/*PAY ATTENTION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!}
   HERE ARE SOME ENDEAVOURS WHICH WERE USED PREVIOUSLY NOW THE ULTIMATE ONE IS USED PLZ KEEP IN MING
                                ----------------    -----------------                          
                                ----------------    -----------------
                                |              |    |               |
                                |              |    |               |
                                |              |    |               |
                                |              |    |               |
                                \            /\/\/\/\/\/\           /
                                 \           ============          /
                                             \/\/\/\/\/\/
       {/*} <Routes>
            <Route path="/About"><About/></Route>
            <Route path="/"><TextForm  showAlert={showAlert}heading="Enter your text" mode={mode}/></Route>
  </Routes>  */}
 {/*} <Routes>
  <Route path='/'>*/}
   
  {/*</div></Route> 
</Routes>*/}
         {/*} <Routes>
            <Route exact path="/about" element={<About  mode={mode}/>} />
              <Route exact path="/" element={< TextForm  showAlert={showAlert}heading="Enter your text" mode={mode}/>} />
</Routes>
{/*<About/>*/}
< TextForm  showAlert={showAlert}heading="Enter your text" mode={mode}/>
 
  
   </div>
 {/*</Router>*/}
   </> 
  );
}

export default App;
