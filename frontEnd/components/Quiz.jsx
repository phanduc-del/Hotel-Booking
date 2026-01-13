import React from 'react'
const gay=["mẹ mày béo","ba mày gay","ông mày hói"
]
const QuizApp = () => {
  return (
    <div className='btn-container'>
      {gay.map((item, index)=>(<button key={index}>{item}</button>))}
    </div>
  )
}

export default QuizApp
