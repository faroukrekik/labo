import React, { useState } from "react";
import "../Form.css";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/actions/userActions";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
const SignUp = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [cin, setCin] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      nom,
      prenom,
      cin,
      address,
      email,
      password,
      birthDate,
      phone,
    };
    dispatch(registerUser(newUser));
  };
  const { user, loading, errors } = useSelector((state) => state.reducer);
  console.log(user);

  return (
    <div>
      { loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : user ? (
        <Navigate to="/login" />
      ) : localStorage.getItem("token") ? (
        <Navigate to="/profile" />
      ) : (
        <div>
          <h2>S'inscrire</h2>
          <form className="formulaire" onSubmit={handleSubmit}>
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
              <label for="date_naissance">Date de naissance :</label>
              <input
                type="date"
                id="date_naissance"
                name="date_naissance"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>

            <div className="inscinput">
              <label for="adresse">Adresse :</label>
              <input
                type="text"
                id="adresse"
                name="adresse"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="inscinput">
              <label for="password">Mot de passe :</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            <button id="butt-sub" type="submit">
              S'inscrire
            </button>
          </form>
        </div>
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

export default SignUp;
