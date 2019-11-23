import React from 'react';
import { withRouter } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class home extends React.Component {

    handleClick = (id)=> {
        this.props.history.push("/"+id);
    }

    handleDelete = (id) =>{
        this.props.handleDelete(id);
    }

    render(){
        const movies = this.props.movies;
        const card = movies.map(el=> {
            return(
                <div>
                    <div style={{
                        margin:"10px auto",
                        width:500,
                        border:"1.5px solid gray"
                    }} onClick={()=>this.handleClick(el.movieId)}>
                        <p>MovieId:{el.movieId}</p>
                        <p>Movie name:{el.movieName}</p>
                        {/* <p>Lead Actor:{el.leadActor}</p>
                        <p>Lead Actress:{el.leadActress}</p> */}
                        {/* <p>Year of Release:{el.yor}</p>
                        <p>Collection:{el.collection}</p> */}
                    </div>
                    <input type="button" value="Delete" onClick={()=>this.handleDelete(el.movieId)}></input>
                </div>
            )
        })
        return(
            <div>
                <Link to="/addMovie">Add Movie</Link>
                {card}
            </div>
        )
    }
    
}

export default withRouter(home);