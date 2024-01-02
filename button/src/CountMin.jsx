import React from 'react'

function CountMin({title,...obj}) {  {/*rest operator*/}

  //const  {title,minCount}= props  //de sturcturing

  return (
    <div>
      <button onClick={obj.minCount}>{title} - Minues ({obj.place})</button>
    </div>
  )
}

export default CountMin
