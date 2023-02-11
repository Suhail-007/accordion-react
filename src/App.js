import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  
  const Questions = data.map(question =>
                  <SingleQuestion
                    key={question.id}
                    {...question}
                  />);


  return (
    <>
    <main>
    <section className='container two__col card'>
        <div className='title'>
          <h2>Questions and answers about login</h2>
        </div>
          
        <div className='questions__cont'>
          { Questions }
        </div>
      </section>
    </main>
    </>
  )
}

export default App;