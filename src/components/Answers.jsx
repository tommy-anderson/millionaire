import React from 'react'
import arrayShuffle from 'array-shuffle';

function Answers(props){   
    const {answers} = props
    const shuffled = arrayShuffle(answers)

    return (
        <div>
            {shuffled}
        </div>
        
    )
}

export default Answers;