import React, { Component } from 'react';
import Header from './Header';
import Details from './Details';

class Main extends Component {

    state= {
        studentInfo:[
            {studentId:101, studentName :"Shahrukh Khan", studentMarks:100},
            {studentId:102, studentName :"Salman Khan", studentMarks:90},
            {studentId:103, studentName :"Aamir Khan", studentMarks:80},
            {studentId:104, studentName :"Ranbir Kapoor", studentMarks:70},
            {studentId:105, studentName :"Ranveer Singh", studentMarks:60}
        ]
    }

    render() {
        return(
            <div>
                <Header/>
                <Details studentInfo={this.state.studentInfo}/>
            </div>
        );
    }
}

export default Main;