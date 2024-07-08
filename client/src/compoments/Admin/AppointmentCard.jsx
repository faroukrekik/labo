import React from "react";
import { useDispatch } from "react-redux";
import {
  getAppointment,
  removeAppointment,
  updateAppointment,
} from "../../redux/actions/appointmentAction";

import EDITAdminCard from "./EDITAdminCard";
import { Button } from "react-bootstrap";

const AppointmentCard = ({ el }) => {
  const dispatch = useDispatch();
  const modifappoint = {
    ...el,
    confirmation: !el.confirmation,
  };
  const handleChaange = () => {
    dispatch(updateAppointment(modifappoint));
    dispatch(getAppointment());
  };
  console.log(modifappoint);
  return (
    <div className="appointment-card">
      <h3 className="appointment-card__name">
        {el.nom} {el.prenom}
      </h3>

      <p className="appointment-card__test"> Test: {el.test}</p>
      <p className="appointment-card__date">Date: {el.date}</p>
      <p className="appointment-card__heur">Heure: {el.heur}</p>
      <p className="appointment-card__email">Email: {el.email}</p>
      <p className="appointment-card__phone">Telephone: {el.phone}</p>
      <p className="appointment-card__description">{el.Description}</p>
      <p className="appointment-card__description">CIN: {el.cin}</p>
      <div className="buttonofappointment">
        <Button
          variant={el.confirmation ? "danger" : "outline-success"}
          className="appointment-card__button"
          onClick={() => handleChaange()}
        >
          {el.confirmation ? "Delay" : "Confirm"}
        </Button>
        <EDITAdminCard el={el} />
        <Button
          className="appointment-card__button"
          onClick={() => dispatch(removeAppointment(el._id))}
          variant="outline-danger"
        >
          Supprimer
        </Button>
      </div>
    </div>
  );
};

export default AppointmentCard;
