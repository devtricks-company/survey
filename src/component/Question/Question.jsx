import React from 'react'
import PropTypes from 'prop-types'

const Question = ({questionNumber,question,questionType,answers}) => {
    return (
        
        <div>
           <p> <span>{questionNumber}</span> <span>{question}</span> </p>
          

        </div>
    )
}

Question.propTypes = {
    questionNumber:PropTypes.number.isRequired,
    question:PropTypes.string.isRequired,
    questionType:PropTypes.string.isRequired,
    answers:PropTypes.array.isRequired,
}


export default Question
