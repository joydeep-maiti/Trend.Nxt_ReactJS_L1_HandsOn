import React from 'react';

const details = (props) =>{
    const std =  props.studentInfo.map((el, i)=> {
        return (
            <tr style={{border:"2px dashed green"}}>
                <td style={{border:"2px dashed green"}}>{el.studentId}</td>
                <td style={{border:"2px dashed green"}}>{el.studentName}</td>
                <td style={{border:"2px dashed green"}}>{el.studentMarks}</td>
            </tr>
        )
    })

    return(
        <table align="center"style={{borderCollapse:"collapse"}}>
            <tr style={{border:"2px dashed green"}}>
                <th style={{border:"2px dashed green"}}> Student ID</th>
                <th style={{border:"2px dashed green"}}> Student Name</th>
                <th style={{border:"2px dashed green"}}> Student Marks</th>
            </tr>
            {std}
        </table>
    )

    
}

export default details;