import React, { Component } from 'react'
import Event from './Components/Event/Event'
import AddEvent from './Components/AddEvent/AddEvent'
import axios from 'axios';
import './App.css'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      events:[],
      loading: false,

      name: "",
      event: "",
      about: ""
    }
  }

  componentDidMount(){
    this.getData()
  }

  getData = () => {
    this.setState({loading: true})
    axios({
      method: "GET",
      url: "http://nameless-brook-40943.herokuapp.com/api/Events/",
    }).then(
      res => {
        this.setState({
          events: res.data,
          loading: false
        })
      }
    )
  }

  postData = (name, event, about) => {
    this.setState({loading: true})
    axios({
      method: "POST",
      url: "http://nameless-brook-40943.herokuapp.com/api/Events/",
      data: {
        name: name,
        event: event, 
        about: about
      }
    }).then(
      () => {
        this.getData()
      }
    )
  }
  
  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleEventChange = (e) => {
    this.setState({
      event: e.target.value
    })
  }

  handleAboutChange = (e) => {
    this.setState({
      about: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.postData(this.state.name, this.state.event, this.state.about)
  }

  render() {
    return (
      <div className="container">
        <h1>Eventos</h1>

        <div className="event-list">
          {!this.state.loading?
            <>
            {this.state.events.map(event=>{
              return(
                <Event key={event.id} event={event}/> //Datos como props
              )
            })}
            </>
            :
            <h1>Cargando...</h1>
          }  
        </div>
        
        <div className="event-create">
          <AddEvent 
            handleAboutChange = {this.handleAboutChange}
            handleEventChange = {this.handleEventChange}
            handleNameChange = {this.handleNameChange}
            handleSubmit = {this.handleSubmit}
          />
        </div>

      </div>
    )
  }
}
