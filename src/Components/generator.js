import React from 'react'

const generator = (props) => {
    const generate = props.table.map(el=> {
                        return (
                            <tr>
                                {el.map(element=> {
                                    return (
                                        <td>{element}</td>
                                    )
                                })}
                            </tr>
                        )
                    })
    
    return(
        <table>
            {generate}
        </table>
    )
}

export default generator;