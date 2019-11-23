import React from 'react';

class addMovie extends React.Component {

    state = {
        movieId:null, 
        movieName :null, 
        leadActor:null, 
        leadActress:null, 
        yor: null, 
        collection:null
    }
    
    handleChange = (e,param)=>{
        switch(param){
            case "id": this.setState({
                movieId: e.target.value
            })
                break;
            case "name": this.setState({
                movieName: e.target.value
            })
                break;
            case "actor": this.setState({
                leadActor: e.target.value
            })
                break;
            case "actress": this.setState({
                leadActress: e.target.value
            })
                break;
            case "yor": this.setState({
                yor: e.target.value
            })
                break;
            case "col": this.setState({
                collection: e.target.value
            })
                break;
        }
    }

    handleAdd = ()=> {
        console.log("handleAdd", this.state)
        this.props.addMovie(this.state);
    }

    render(){

        return(
            <div>
                <table align="center">
                    <tr>
                        <td>
                            MovieId:
                        </td>
                        <td>
                            <input type="number" onChange={(e)=>this.handleChange(e,"id")}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Movie name:
                        </td>
                        <td>
                            <input type="text" onChange={(e)=>this.handleChange(e,"name")}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Lead Actor:
                        </td>
                        <td>
                            <input type="text" onChange={(e)=>this.handleChange(e,"actor")}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Lead Actress:
                        </td>
                        <td>
                            <input type="text" onChange={(e)=>this.handleChange(e,"actress")}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Year of Release:
                        </td>
                        <td>
                            <input type="number" onChange={(e)=>this.handleChange(e,"yor")}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Collection:
                        </td>
                        <td>
                            <input type="number" onChange={(e)=>this.handleChange(e,"col")}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            
                        </td>
                        <td>
                            <input type="button" value="Add Movie" onClick={this.handleAdd}></input>
                        </td>
                    </tr>
                </table>

            </div>
        )
    }
}

export default addMovie;