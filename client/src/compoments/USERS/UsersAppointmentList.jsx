import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CardAppointmentus from "./CardAppointmentus";

import { Link } from "react-router-dom";
import { getAppointment } from "../../redux/actions/appointmentAction";

const UsersAppointmentList = () => {
  const { appointment, loading } = useSelector(
    (state) => state.appointmentReducer
  );
  const { user } = useSelector((state) => state.reducer);
  console.log(appointment);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAppointment());
  }, []);

  return (
    <div>
      <div className="appointmnt" style={{ margin: "25px" }}>
        <Link to={"/client/rendez-vous en ligne"}>
          {" "}
          prise rendez vous en ligne
        </Link>
      </div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          {appointment
            .filter((el) => el.cin === user.cin)
            .map((el) => (
              <CardAppointmentus key={el._id} el={el} />
            ))}
        </div>
      )}
      <div></div>
    </div>
  );
};

export default UsersAppointmentList;
