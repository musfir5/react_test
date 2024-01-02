import Header from './components/Header';
import './App.css';


function App() {

  const param = '  - passed param '

  return (
    
    <div>
     
     <Header param={param}/>
      <Hello/>
      <p style={{color:'red',background:'blue'}}>Paragraph</p>

      <h2 className='hello' >CSS - Import</h2>
    
    </div>
  );
}

export default App;


function Hello(){
  const data = 'Grand - '

  return (
    <h1 align="center">{data}Test-Project</h1> 
  )
}