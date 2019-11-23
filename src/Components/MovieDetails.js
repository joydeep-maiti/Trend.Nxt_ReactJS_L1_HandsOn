import React from 'react';
import { withRouter } from "react-router";

class MovieDetails extends React.Component {
    render(){
        const moviesArray = this.props.movies;
        let movie = null;
        const find = ()=> moviesArray.map(el=> {
            if(el.movieId == this.props.match.params.movieId){
                movie = el;
            }
        })
        find();
        console.log("movie", movie)
        if(movie == null ) {
            return (
                <div>
                    No Movie find with this id
                </div>
            )
        }else{
            return (
                <div style={{
                    width:500,
                    border:"1.5px solid gray"
                }}>
                    <p>MovieId:{movie.movieId}</p>
                    <p>Movie name:{movie.movieName}</p>
                    <p>Lead Actor:{movie.leadActor}</p>
                    <p>Lead Actress:{movie.leadActress}</p>
                    <p>Year of Release:{movie.yor}</p>
                    <p>Collection:{movie.collection}</p>
                </div>
            )
        }
        
    }
    
}

export default withRouter(MovieDetails);