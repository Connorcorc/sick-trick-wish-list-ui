import { Component } from 'react';
import Trick from '../Trick/Trick.js'
import Form from '../Form/Form.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }

  componentDidMount = async () => {
    let response = await fetch('http://localhost:3001/api/v1/tricks')
    let data = await response.json()
    this.setState({ tricks: data })
  }

  addTricks = (newTrick) => {
  this.setState({tricks: [...this.state.tricks, newTrick]})
}

  render() {
    console.log(this.state.tricks)
    return (
      <main className="App">
        <h1>Sick Trick Wish List</h1>
        <div className='trickForm'>
          <Form addTricks={this.addTricks}/>
        </div>
        <div className='trickBox'>
          <Trick tricks={this.state.tricks} />
        </div>
      </main>
    );
  }
}

export default App;
