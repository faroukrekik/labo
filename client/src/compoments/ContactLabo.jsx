import React from "react";

const ContactLabo = () => {
  return (
    <div className="contact-us">
      <h2>Contact us</h2>
      <p>
        If you have any questions or concerns, please don't hesitate to contact
        us.
      </p>
      <form action="" className="formulaire">
        <div className="inscinput">
          <input type="text" placeholder="nom" />
        </div>
        <div className="inscinput">
          <input type="text" placeholder="prenom" />
        </div>
        <div className="inscinput">
          <input type="email" placeholder="email" />
        </div>
        <button type="submit" id="butt-sub">
          envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactLabo;
