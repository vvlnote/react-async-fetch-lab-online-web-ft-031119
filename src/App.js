// create your App component here
import React, { Component } from 'react';

class App extends Component {
  state = {
    peopleInSpace: []
  }

  render() {
    return(
      <div>
<<<<<<< HEAD
        <p>{this.state.peopleInSpace.map(person => person.name)}</p>
=======
        <p>{this.state.pepoleInSpace.map(person => perons.name)}</p>
>>>>>>> df0b4747d12c15077879a718536a7a2e3e1104d1
      </div>
    )
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
<<<<<<< HEAD
      .then(response => response.json())
      .then(data => {
        this.setState ({
=======
      .then(response => response.json)
      .tnen(data => {
        setState ({
>>>>>>> df0b4747d12c15077879a718536a7a2e3e1104d1
          peolpleInSpace: data.people
        })
      })
  }
}

export default App;
