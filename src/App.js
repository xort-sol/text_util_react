import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Carousel from './components/carousel';
import TextForm from './components/textbox';




function App() {
  return (
    <>
      {/* <p>Navbar</p> */}
       <Navbar Name = "Text Util by Bilal"/>
       {/* <Carousel/> */}
       <div className='container'>
       <TextForm heading = "Enter Your Text"/>
       </div>

    </>
 
  );
}

export default App;
