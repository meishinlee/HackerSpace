import React from 'react';
import './App.css';
import APIProject from "../api/apiProject";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "project name": null,
      pronouns:null,
      lgbtq:null,
      disabled:null,
      veteran:null,
      projects:null
    };
  }

  projectNameHandler(e) {
    this.setState({ "project name": e.target.value}); // just copy paste this code to the onSelect attribute of each dropdown
  }

  getFilteredData(){
    const filters = {};
    for (var key in this.state){
      if (this.state.key != null){
        data[key] = this.state.key;
      }
    }
    let projects = APIProject.getFilteredProjects(filters).then((data) =>
      this.setState({
        projects: data,
      })
    );
  }

  componentDidMount() {
    try {
      let projects = APIProject.getAllProjects().then((data) =>
        this.setState({
          projects: data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  render(){
     return (
      <main>
        <div class="text title_container" id="name1"> Hacker Space </div>
        <form class="form-inline">
          <div class="form-group">
            <label >Has a female lead</label>
            <select  class="form-control" >
                <option> </option>
                <option>Yes</option>
                <option>No</option>

              </select>
              
            <label >Veteran Led</label>
            <select  class="form-control" >
                <option> </option>
                <option>Yes</option>
                <option>No</option>
              </select>
              
              <label >LGBTQ+ Led</label>
            <select  class="form-control" >
                <option> </option>
                <option>Yes</option>
                <option>No</option>
              </select>
              
              <label> Project Category </label>
              <select  class="form-control" >
                <option> </option>
                <option>Machine Learning/Artificial Intelligence</option>
                <option>Robotics</option>
                <option>Web development</option>
                <option>Cybersecurity</option>
                <option>Algorithmic/Research</option>
                <option>Data analysis</option>
                
          </select>
          </div>
        </form>
      </main>
    );
  }
 
}

export default App;