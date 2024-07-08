import React, { useState } from "react";
import "../rdvform.css";
import { useDispatch, useSelector } from "react-redux";
import { registreappointment } from "../redux/actions/appointmentAction";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const Rdvadd = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [cin, setCin] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [heur, setHeur] = useState("");
  const [date, setDate] = useState("");
  const [test, setTest] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();
    const newrendezvous = {
      nom,
      prenom,
      cin,
      phone,
      email,
      heur,
      date,
      test,
      description,
    };
    dispatch(registreappointment(newrendezvous));
  };
  const { appointment, loading, errors } = useSelector(
    (state) => state.appointmentReducer
  );

  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <>
          <h2>Prise rendez-vous en ligne</h2>
          <form className="formulaire" onSubmit={handlesubmit}>
            <div className="inscinput">
              <label for="nom">Nom :</label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <div className="inscinput">
              <label for="prenom">Prénom :</label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
            </div>
            <div className="inscinput">
              <label for="test">TEST :</label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={test}
                onChange={(e) => setTest(e.target.value)}
              />
            </div>

            <div className="inscinput">
              <label for="cin">CIN :</label>
              <input
                type="text"
                id="cin"
                name="cin"
                value={cin}
                onChange={(e) => setCin(e.target.value)}
              />
            </div>

            <div className="inscinput">
              <label for="telephone">Téléphone :</label>
              <input
                type="text"
                id="telephone"
                name="telephone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="inscinput">
              <label for="email">Email :</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inscinput">
              <label for="heur">heure :</label>
              <input
                type="time"
                id="password"
                name="password"
                value={heur}
                onChange={(e) => setHeur(e.target.value)}
              />
            </div>
            <div className="inscinput">
              <label for="date_naissance">Date :</label>
              <input
                type="date"
                id="date_naissance"
                name="date_naissance"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="inscinput">
              <label for="Description">Description :</label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button id="butt-sub" type="submit">
              Envoyer
            </button>
          </form>
        </>
      )}
      {errors ? (
        <div>
          <div>
            <div>{errors.msg ? <p>{errors.msg}</p> : null}</div>
          </div>
          <div>
            {errors.errors
              ? errors.errors.map((el) => <p>{`${el.path} ${el.msg}`}</p>)
              : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Rdvadd;
