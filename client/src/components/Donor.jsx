import React from "react"
import "../App.css"
import { useNavigate } from "react-router-dom";
const Donor = (props) => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="donor-list">
        <div className="donor-item">
          <div className="donor-name" onClick={() => {
            navigate("/user")
          }}>{props.name}</div>
          <div className="donor-city" >{props.city}</div>
          <div className="donor-blood-group" >{props.bg}</div>
        </div>


      </div>
    </div>
  )
};

export default Donor;
