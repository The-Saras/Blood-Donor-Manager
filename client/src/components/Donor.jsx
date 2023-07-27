import React from "react"
import "../App.css"
const Donor = (props) => {
  return (
    <div>
      <div class="donor-list">
        <div class="donor-item">
          <div class="donor-name">{props.name}</div>
          <div class="donor-city">{props.city}</div>
          <div class="donor-blood-group">{props.bg}</div>
        </div>


      </div>
    </div>
  )
};

export default Donor;
