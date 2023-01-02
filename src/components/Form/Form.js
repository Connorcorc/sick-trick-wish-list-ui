import { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      obstacle: "",
      stance: ""
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  addTrick = event => {
    event.preventDefault()
    const newTrick = {
      id: Date.now(),
      ...this.state
    }
    this.props.addTricks(newTrick)
    this.clearInput()
  }

  clearInput = () => {
    this.setState({
      trick: "",
      obstacle: "",
      stance: ""
    })
  }

  render() {
    return (
      <form>
        <input type='text' placeholder='Which Trick You Wanna Do?!' name='name' value={this.state.name} onChange={event => this.handleChange(event)} />
        <select name='stance' value={this.state.stance} onChange={event => this.handleChange(event)}>
          <option>Regular</option>
          <option>Switch</option>
        </select>
        <select name='obstacle' value={this.state.obstacle} onChange={event => this.handleChange(event)}>
          <option>Flatground</option>
          <option>Ledge</option>
          <option>Rail</option>
          <option>Stairs</option>
          <option>Pool</option>
        </select>
        <button onClick={event => this.addTrick(event)}>Let's Get Sendy!</button>
      </form>
    )
  }
}

export default Form
