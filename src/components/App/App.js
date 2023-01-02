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

  removeTrick = async (id) => {
    const filterTrick = this.state.tricks.filter(trick => trick.id !== id)
    this.setState({ tricks: filterTrick })
    fetch(`http://localhost:3001/api/v1/tricks/${id}`, {
      method: 'DELETE'
    })
  }

  postData = async (newTrick) => {
    const response = await fetch ('http://localhost:3001/api/v1/tricks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTrick),
    })
    const data = await response.json()
    console.log(data)
    console.log(newTrick)
  }


  render() {
    console.log(this.state.tricks)
    return (
      <main className="App">
        <h1>Sick Trick Wish List</h1>
        <div className='trickForm'>
          <Form addTricks={this.addTricks} postData={this.postData}/>
        </div>
        <div className='trickBox'>
          <Trick tricks={this.state.tricks} removeTrick={this.removeTrick}/>
        </div>
      </main>
    );
  }
}

export default App;
