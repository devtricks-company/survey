import React from 'react'
import PropTypes from 'prop-types'

const QuestionTitle = ({title}) => {
    return (
       <h1>
           {title}
       </h1>
            
        
    )
}

QuestionTitle.propTypes = {
    title:PropTypes.string.isRequired
}

export default QuestionTitle
