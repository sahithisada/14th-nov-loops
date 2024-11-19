import React from 'react'

function Tables() {
  return (
    <div>
        <h1>TABLES</h1>
            <button type='button' onClick={ () => {
                for (let i = 1; i <= 1000; i++) {
                    if (i === 756 ||i === 549 ||i === 643 ||i === 721 ||i === 135 ||i === 601 ||i === 611){
                      continue;
                    }
                  
                for (let j = 1; j <= 100; j++) {
                    if (j === 6 || j === 7 || j === 8 || j === 9 || j === 12 || j === 14 || j === 15 || j === 23 || j === 46 || j === 79 || j === 86) {
                      continue;
                    }
                  
                      console.log(`${i} * ${j} = ${i * j}`);
                    }
                  }
                }}
              
            >TABLES</button>
    </div>
  )
}

export default Tables
