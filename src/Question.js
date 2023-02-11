import React, { useState } from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
const Question = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  
  const toggleQuestion = function (e) {
    if(!e.target.closest('.questions')) return
    if (e.target.closest('.questions')) setShowInfo(SI => !SI);
  }
  
  
  const { id, title, info, onToggle, show } = props;
  
  const icon = !showInfo ? <AiOutlinePlusSquare className='svg' /> : <AiOutlineMinusSquare className='svg' />;
  
  return (
    <div onClick={toggleQuestion} className='quesAns questions'>
      <div className='question'>
        <h3>{title}</h3>
       <button> {icon}</button>
      </div>
      
      {showInfo && <div className={`answer ${showInfo && 'active'}`}>
        <p>{info}</p>
      </div>}
    </div>
  );
};

export default Question;