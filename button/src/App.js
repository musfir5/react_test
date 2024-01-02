import './App.css';
import {useState} from 'react'
import CountMin  from './CountMin';
import Employee from './employee';

function App() {

  const [count,setCount]=useState(5)


const addCount=()=>{

  setCount(count+1)

}

const minCount=()=>{

  setCount(count-1)
}

let obj1 = {
title: '1st',
minCount,
place:'KWT'
}

let emp =[{name:'musfir',age:22},
{name:'ali',age:55},
{name:'akshay',age:24}
]
return (
    <div className="App">
      <button onClick={addCount}>Add</button> 
      <br/><br/>
      {/*<CountMin title='1st' minCount={minCount}/> {/*passing function minCount  -- with out spread method*/ } 

      <CountMin {...obj1}/>
      <br/><br/>
      <CountMin title='2nd' minCount={obj1.minCount}/> {/* diff read way to spreading */}
      <h1>Counter - {count}</h1>

      <h1>Map Method</h1>
      {   //{} for writing javascript(map())
        emp.map((obj,index)=>{     //mapiing  
                                  // we ca remove the {} and the return, map directly go to the return
        
        return(

          //<Employee key = {index} name={obj.name} age={obj.age}/> -- one way

          <Employee key={index} {...obj}/>        //simple way
        )

        })
      }
    </div>
  );
}

export default App;
