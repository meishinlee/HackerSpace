import React from 'react';
// import './App.css';
import APIProject from "./api/apiProject";
import Card from "./components/card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "project name": null,
      femaleLed:null,
      lgbtq:null,
      disabled:null,
      veteran:null,
      projectCategory:null,
      projects:null,
      cardArray:null
    };
  }

  handleChangeProjectName(e) {
    this.setState({ "project name": e.target.value});
  }
  handleChangeFemaleLed(e) {
    this.setState({ femaleLed: e.target.value});
  }
  handleChangeLGBTQPLed(e){
    this.setState({lgbtq:e.target.value});
  }
  handleChangeVeteranLed(e){
    this.setState({veteran:e.target.value});
  }
  handleChangeDisabledLed(e){
    this.setState({disabled:e.target.value});
  }
  handleChangeProjectName(e){
    this.setState({projectCategory:e.target.value});
  }

  getFilteredData(){
    const filters = {};
    for (var key in this.state){
      if (this.state.key != null){
        filters[key] = this.state.key;
      }
    }
    let projects = APIProject.getFilteredProjects(filters).then((data) =>
      this.setState({
        projects: data,
      })
    );
  }

  componentDidMount() {
    let projects = APIProject.getAllProjects().then(data => {
      this.setState({projects:data})
      this.displayAll()
    }
    );
  }

  displayAll() {
    let projectListHTMLArr = [];
    let data = this.state.projects;
    for (var i = 0; i < data.length; i++){
      projectListHTMLArr.push(
        <Card
          projectName={data[i]['project name']}
          projectDescription={data[i]['project description']}
          ownerName={data[i].name}
          email={data[i].email}
          pronouns={data[i].pronouns}
          lgbtq={data[i].lgbtq}
          disabled={data[i].disabled}
          veteran={data[i].veteran}
        />
      );
    }
    this.setState({cardArray:projectListHTMLArr});
  }

  displayFiltered(){
    const filters = {};
    if (this.state["project name"] != null){
      filters["project name"] = this.state["project name"];
    }
    if (this.state.femaleLed != null){
      filters.femaleLed = this.state.femaleLed;
    }
    if (this.state.lgbtq != null){
      filters.lgbtq = this.state.lgbtq;
    }
    if (this.state.veteran != null){
      filters.veteran = this.state.veteran;
    }
    if (this.state.disabled != null){
      filters.disabled = this.state.disabled;
    }
    if (this.state.projectCategory != null){
      filters.projectCategory = this.state.projectCategory;
    }
    let projects = APIProject.getFilteredProjects(filters).then(data => {
      this.setState({projects:data})
      this.displayAll()
    }
    );
  }

  render(){
    let results = [];
    if (this.state.cardArray){
      results = this.state.cardArray;
    }
     return (
      <main class="main-container">
        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div class="container px-5">
                <a class="navbar-brand" href="#page-top">Hacker Space</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="#page-top"> Home </a></li>
                        <li class="nav-item"><a class="nav-link" href="//forms.gle/nUWeKcENLTWiBJX67" target="_blank"> Add Project</a></li>
                        <li class="nav-item"><a class="nav-link" href="#footer"> Contact </a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <header class="masthead text-center text-white" id="page-top">
            <div class="masthead-content">
                <div class="container px-5">
                    <h1 class="masthead-heading mb-0">Hacker Space</h1>
                    <h2 class="masthead-subheading mb-0">The choice is in your hands.</h2>
                    <a class="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Browse projects</a>
                </div>
            </div>
        </header>

        <div class="input-group">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
            aria-describedby="search-addon" onChange={(e)=>this.handleChangeProjectName(e)}/>
            <span class="input-group-text border-0" id="search-addon" onClick={() => this.displayFiltered()}>
              <i class="fas fa-search">Search</i>
            </span>
        </div>


        <div class="form-group">
          <div class = "form-item">
            <label >Female or Non-binary Led?</label>
            <select  class="form-control" onChange={(e)=>this.handleChangeFemaleLed(e)}>
                <option> Select one: </option>
                <option>Yes</option>
                <option>No</option>
            </select>
          </div>

          <div class = "form-item">
            <label >Veteran Led?</label>
            <select  class="form-control" onChange={(e)=>this.handleChangeVeteranLed(e)}>
                <option> Select one: </option>
                <option>Yes</option>
                <option>No</option>
            </select>
          </div>

          <div class = "form-item">
            <label >LGBTQ+ Led?</label>
            <select  class="form-control" onChange={(e)=>this.handleChangeLGBTQPLed(e)}>
                <option> Select one: </option>
                <option>Yes</option>
                <option>No</option>
              </select>
          </div>

          <div class = "form-item">
            <label >Disabled Led?</label>
            <select  class="form-control" onChange={(e)=>this.handleChangeDisabledLed(e)}>
                <option> Select one: </option>
                <option>Yes</option>
                <option>No</option>
              </select>
          </div>

          <div class = "form-item">
              <label> Project Category </label>
              <select  class="form-control" onChange={(e)=>this.handleChangeProjectCategory(e)}>
                <option> Select one: </option>
                <option>Machine Learning/Artificial Intelligence</option>
                <option>Robotics</option>
                <option>Web development</option>
                <option>Cybersecurity</option>
                <option>Algorithmic/Research</option>
                <option>Data analysis</option>
              </select>
            </div>
        </div>

        <section id="scroll">
          <div class="projects_container">
            {results}
          </div>
        </section> 

        <div class="footer footer_text">
        Inclusion is the practice of providing everyone with equal access to opportunities and resources. Inclusion efforts in the workplace help to give traditionally marginalized groups, like those based on gender, race or even those with physical or mental disabilities, a means for them to feel equal in the workplace. Inclusive actions, like creating employee resource groups or hosting information sessions, make the workplace a safer, more respectful environment for all employees.
       </div>

      </main>
    );
  }
 
}

export default App;