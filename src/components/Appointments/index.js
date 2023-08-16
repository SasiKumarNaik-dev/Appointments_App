// Write your code here

import {Component} from 'react'

import {v4 as uuidV4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {title: '', date: '', appointmentsList: [], Starred: false}

  getTitle = event => {
    this.setState({title: event.target.value})
  }

  getDate = event => {
    this.setState({date: event.target.value})
  }

  getDetails = event => {
    event.preventDefault()
    const {title, date} = this.state
    if (title !== '') {
      const newAppointment = {id: uuidV4(), title, date, isStarred: false}
      this.setState(prevState => ({
        appointmentsList: [...prevState.appointmentsList, newAppointment],
        title: '',
        date: '',
      }))
    }
  }

  getStarredList = () => {
    this.setState(prevState => ({
      Starred: !prevState.Starred,
    }))
  }

  getStarFun = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isStarred: !eachItem.isStarred}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {title, date, appointmentsList, Starred} = this.state
    let filteredList
    if (Starred) {
      filteredList = appointmentsList.filter(eachItem => eachItem.isStarred)
    } else {
      filteredList = appointmentsList
    }

    const clsOn = Starred ? 'clicked' : ''

    return (
      <div className="app-div">
        <div className="appointment-div">
          <div className="top-section">
            <form className="form" onSubmit={this.getDetails}>
              <h1 className="heading">Add Appointment</h1>
              <label htmlFor="titleId" className="label-style">
                TITLE
              </label>
              <input
                type="text"
                placeholder="Title"
                id="titleId"
                className="input-styles"
                onChange={this.getTitle}
                value={title}
              />
              <label htmlFor="dateId" className="label-style">
                DATE
              </label>
              <input
                type="date"
                id="dateId"
                className="input-styles"
                onChange={this.getDate}
                value={date}
              />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
            <div className="img-div">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
                alt="appointments"
                className="img-styles"
              />
            </div>
          </div>
          <div className="bottom-section">
            <div className="content">
              <h1 className="appointments-heading">Appointments</h1>
              <button
                type="button"
                className={`starred-btn ${clsOn}`}
                onClick={this.getStarredList}
              >
                Starred
              </button>
            </div>
            <ul className="result-div">
              {filteredList.map(eachItem => (
                <AppointmentItem
                  item={eachItem}
                  key={eachItem.id}
                  getStarFun={this.getStarFun}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
