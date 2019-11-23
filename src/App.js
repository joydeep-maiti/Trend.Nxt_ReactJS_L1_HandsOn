import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Components/Main'
import PropTypes from 'prop-types';
import Generator from './Components/generator'
import Lifecycle from './Components/Lifecycle'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { withRouter } from "react-router";
import Home from './Components/Home'
import AddMovie from './Components/AddMovie'
import MovieDetails from './Components/MovieDetails'

class App extends React.Component {

  state = {
    lastInt : 0,
    table : [],
    Physics:0,
    Chemistry:0, 
    Biology:0, 
    Mathematics:0,
    show:true,
    movies:
    [{movieId:101, movieName :"Baazigar", leadActor:"Shahrukh", leadActress:"Kajol", yor: 1995, collection:50},
    {movieId:102, movieName :"Andhadhun", leadActor:"Ayshman", leadActress:"Radhika", yor: 2018, collection:150},
    {movieId:103, movieName :"Barfi", leadActor:"Ranbir", leadActress:"Priyanka", yor: 2012, collection:100},
    {movieId:104, movieName :"3 idiots", leadActor:"Aamir", leadActress:"Kareena", yor: 2009, collection:200},
    {movieId:105, movieName :"My Name is Khan", leadActor:"Shahrukh", leadActress:"Kajol", yor: 2010, collection:210}]
  }

  handleClick = ()=> {
    this.setState({
      show:false
    })
  }

  generateTable = () => {
    let table = this.state.table;
    let arr = [];
    for (let i = this.state.lastInt+1; i <= this.state.lastInt+10; i++) {
      arr.push(5*i);
    }
    table.push(arr);
    this.setState({
      lastInt : this.state.lastInt+10,
      table
    })
  }

  rows = () => {
    let rowval  = []
    console.log("===========2",)
    for (let i = 1; i < 11; i++) {
      
      rowval.push (
      <td>5*{i} = {5*i}</td>
      )
    }
    return rowval;
  }

  onMarksChange = (sub,e)=> {
    switch(sub){
      case "Physics": this.setState({
        Physics: e.target.value
                      })
                      break;
      case "Chemistry": this.setState({
        Chemistry: e.target.value
                      })
                      break;
      case "Biology": this.setState({
        Biology: e.target.value
                      })
                      break;
      case "Mathematics": this.setState({
        Mathematics: e.target.value
                      })
    }
  }

  findAverage = ()=> {
    console.log(this.state)
    let sum = parseInt(this.state.Biology) + parseInt(this.state.Chemistry) + parseInt(this.state.Mathematics) + parseInt(this.state.Physics);
    let avg = sum/4;
    alert(avg);
  }

  addMovie = (movie)=> {
    const self = this;
    console.log(movie);
    let movies = this.state.movies;
    movies.push(movie);
    this.setState({
      movies
    },
    ()=>self.props.history.push("/")
    )
  }

  handleDelete = (id) =>{
    console.log("IN DELETE")
    let movies = this.state.movies;
    let i = null;
    for (let index = 0; index < movies.length; index++) {
      if(movies[index].movieId == id){
        i = index;
      }
    }
    if(i){
      movies.splice(i,1);
    }
    this.setState({
      movies
    })
  }

  render(){
    const val =this.rows();
    let companyName = "WIPRO";
    let companyLocation = "BANGALORE";
    if(this.props.companyName)
      companyName = this.props.companyName
    if(this.props.companyLocation)
      companyLocation = this.props.companyLocation
    return (
      <div className="App">
        {/* ReactJS Environment*/}
        <h2>ReactJS Environment: Assisgnment 1</h2>
        <div>
          <h1>Happy Learning-React</h1>
        </div>
        <div style={{margin:30}}></div>

        {/* ReactJS JSX*/}
        <h2>ReactJS JSX:Assignment1</h2>
        <table align='center' >
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Email</th>
          </tr>
          <tr>
            <td>101</td>
            <td>Shahrukh Khan</td>
            <td>shahrukh@wipro.com</td>
          </tr>
          <tr>
            <td>102</td>
            <td>Salman Khan</td>
            <td>salman@wipro.com</td>
          </tr>
          <tr>
            <td>103</td>
            <td>Aamir Khan</td>
            <td>aamir@wipro.com</td>
          </tr>
          <tr>
            <td>104</td>
            <td>Ranbir Kapoor</td>
            <td>ranbir@wipro.com</td>
          </tr>
          <tr>
            <td>105</td>
            <td>Ranveer Singh</td>
            <td>ranveer@wipro.com</td>
          </tr>
        </table>

        <div style={{margin:30}}></div>



        <h2>ReactJS JSX:Assignment2</h2>
        <table align='center' className="table_class">
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Email</th>
          </tr>
          <tr>
            <td>101</td>
            <td>Shahrukh Khan</td>
            <td>shahrukh@wipro.com</td>
          </tr>
          <tr>
            <td>102</td>
            <td>Salman Khan</td>
            <td>salman@wipro.com</td>
          </tr>
          <tr>
            <td>103</td>
            <td>Aamir Khan</td>
            <td>aamir@wipro.com</td>
          </tr>
          <tr>
            <td>104</td>
            <td>Ranbir Kapoor</td>
            <td>ranbir@wipro.com</td>
          </tr>
          <tr>
            <td>105</td>
            <td>Ranveer Singh</td>
            <td>ranveer@wipro.com</td>
          </tr>
        </table>
        <div style={{margin:30}}></div>



        <h2>ReactJS JSX:Assignment3</h2>
        <table align="center" className="table_class2">
          <tr>
            {val}
          </tr>
        </table>
        <div style={{margin:30}}></div>

        {/*ReactJS–Components-State */}
        <h2>ReactJS–Components-State:Assignment1</h2>
        <div>
          <Main />
        </div>
        <div style={{margin:30}}></div>

        {/*ReactJS–Props */}
        <h2>ReactJS–Props:Assignment1</h2>
        <div>
          {companyName}
          <br></br>
          {companyLocation}
        </div>
        <div style={{margin:30}}></div>

        {/*ReactJS-PropsValidation */}
        <h2>ReactJS-PropsValidation:Assignment1</h2>
        <div>
          <p>{this.props.name}</p>
          <p>{this.props.preferredCities[0]}</p>
          <p>{this.props.age}</p>
        </div>
        <div style={{margin:30}}></div>

        {/*ReactJS-ComponentAPI */}
        <h2>ReactJS-ComponentAPI:Assignment1</h2>
        <div>
          <button onClick={this.generateTable}>Click to generate Multiplication tables of 5</button>
          <Generator table={this.state.table} lastInt={this.state.lastInt}/>
        </div>
        <div style={{margin:30}}></div>

        {/*.ReactJS-ComponentLifeCycle */}
        <h2>.ReactJS-ComponentLifeCycle:Assignment1</h2>
        <div>
        {this.state.show?<Lifecycle handleClick={this.handleClick} />: null}
        </div>
        <div style={{margin:30}}></div>
        
        {/*ReactJS–Forms-Events */}
        <h2>ReactJS–Forms-Events:Assignment1</h2>
        <div>
          <form>
            <table align="center">
              <tr>
                  <td>Physics</td>
                  <td><input type="number" onChange={(e)=>this.onMarksChange("Physics", e)}></input></td>
              </tr>
              <tr>
                  <td>Chemistry</td>
                  <td><input type="number" onChange={(e)=>this.onMarksChange("Chemistry", e)}></input></td>
              </tr>
              <tr>
                  <td>Biology</td>
                  <td><input type="number" onChange={(e)=>this.onMarksChange("Biology", e)}></input></td>
              </tr>
              <tr>
                  <td>Mathematics</td>
                  <td><input type="number" onChange={(e)=>this.onMarksChange("Mathematics", e)}></input></td>
              </tr>
              <tr>
                  <td></td>
                  <td><input type="button" onClick={this.findAverage} value="Find Average"></input></td>
              </tr>
              
            </table>
          </form>
        </div>
        <div style={{margin:30}}></div>

        {/*ReactJS-Router */}
        <h2>ReactJS-Router:Assignment1</h2>
        <div>
          <Switch>
            <Route exact path="/">
              <Home movies={this.state.movies} handleDelete={(id)=>this.handleDelete(id)}/>
            </Route>
            <Route path="/addMovie">
              <AddMovie addMovie={(movie)=>this.addMovie(movie)} />
            </Route>
            <Route path="/:movieId">
              <MovieDetails movies={this.state.movies}/>
            </Route>
          </Switch>
        </div>
        <div style={{margin:30}}></div>
  
      </div>
    );
  }
  
}

App.propTypes = {
  name:PropTypes.string,
  preferredCities:PropTypes.array.isRequired,
  age:PropTypes.number
}

App.defaultProps = {
  name:"Steve",
  preferredCities: ["Bangalore", "Chennai"] ,
  age:18
}

export default withRouter(App);
