import { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      stance: "",
      name: "",
      obstacle: "",
      tutorial: "",
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
    this.props.postData(newTrick)
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
      <form className="formBody">
        <input className='option' type='text' placeholder='Which Trick You Wanna Do?!' name='name' value={this.state.name} onChange={event => this.handleChange(event)} />
        <select className='option' name='stance' value={this.state.stance} onChange={event => this.handleChange(event)}>
          <option hidden>Select a stance</option>
          <option>Regular</option>
          <option>Switch</option>
        </select>
        <select className='option' name='obstacle' value={this.state.obstacle} onChange={event => this.handleChange(event)}>
          <option hidden>Select a obstacle</option>
          <option>Flatground</option>
          <option>Ledge</option>
          <option>Rail</option>
          <option>Stairs</option>
          <option>Pool</option>
        </select>
        <input className='option' type='text' placeholder='Link To Tutorial' name='tutorial' value={this.state.tutorial} onChange={event => this.handleChange(event)} />
        <button className='option' onClick={event => this.addTrick(event)}>Let's Get Sendy!</button>
      </form>
    )
  }
}

export default Form
