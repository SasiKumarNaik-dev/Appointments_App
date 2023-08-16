// Write your code here
import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {item, getStarFun} = props
  const {id, title, isStarred, date} = item
  const addStar = () => {
    getStarFun(id)
  }

  return (
    <li className="list">
      <div className="inner-div">
        <p className="appointment-title">{title}</p>
        <button
          type="button"
          className="star-btn"
          onClick={addStar}
          data-testid="star"
        >
          {isStarred ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
              alt="starred"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
              alt="star"
            />
          )}
        </button>
      </div>
      <p className="appointment-date">
        <p className="side">Date:</p>{' '}
        <p>{format(new Date(date), 'dd MMMM yyyy, EEEE')}</p>
      </p>
    </li>
  )
}

export default AppointmentItem
