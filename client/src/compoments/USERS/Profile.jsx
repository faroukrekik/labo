import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getProfile } from "../../redux/actions/userActions";
import "../Profile.css";
import { getAppointment } from "../../redux/actions/appointmentAction";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
    dispatch(getAppointment());
  }, []);

  const { user, isAuth } = useSelector((state) => state.reducer);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {!isAuth ? (
        <Navigate to="/login" />
      ) : (
        <div class="card ">
          <h2 class="name">
            {user.nom} {user.prenom}
          </h2>
          <p class="info">Numéro d'identité: {user.cin}</p>
          <p class="info">Date de naissance: {user.birthDate}</p>
          <p class="info">Adresse: {user.address}</p>
          <p class="info">Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
