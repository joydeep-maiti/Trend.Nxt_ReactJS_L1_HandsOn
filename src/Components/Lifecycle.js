import React, { Component } from 'react'

class Home extends Component {

    componentWillMount(){
        console.log("componentWillMount")
    }

    componentDidMount(){
        console.log("componentDidMount")
    }    
    
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    handleClick=()=>{
        this.props.handleClick();
    }

    render() {
        return(
            <div onClick={this.handleClick}>
                <p>Some Nice Thought</p>
            </div>
        )
    }
}

export default Home;