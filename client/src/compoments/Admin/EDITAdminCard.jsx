import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  getAppointment,
  updateAppointment,
} from "../../redux/actions/appointmentAction";

const EDITAdminCard = ({ el }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [nom, setNom] = useState(el.nom);
  const [prenom, setPrenom] = useState(el.prenom);
  const [cin, setCin] = useState(el.cin);
  const [phone, setPhone] = useState(el.phone);
  const [email, setEmail] = useState(el.email);
  const [heur, setHeur] = useState(el.heur);
  const [date, setDate] = useState(el.date);
  const [test, setTest] = useState(el.test);
  const [description, setDescription] = useState(el.description);

  const handleEdit = (e) => {
    e.preventDefault();
    const editedappointment = {
      _id: el._id,
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
    if (
      nom &&
      prenom &&
      cin &&
      phone &&
      email &&
      heur &&
      date &&
      test &&
      description
    ) {
      dispatch(updateAppointment(editedappointment));
      dispatch(getAppointment());
    }
    handleClose();
  };

  return (
    <div>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          width: "100px",
          height: "40px",
          fontSize: "16px",
          margin: "4px 2px",
          padding: "10px  20px",
        }}
      >
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="formulaire" onSubmit={handleEdit}>
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
            <Button variant="primary" type="submit" onClick={handleClose}>
              Save Changes
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EDITAdminCard;
