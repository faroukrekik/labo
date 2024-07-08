import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const { isAuth, user } = useSelector((state) => state.reducer);
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Medical Laboratory</h1>
          <p>
            We provide accurate and reliable diagnostic services to help you
            maintain good health.
          </p>
          {isAuth && user ? (
            <Link
              to={
                user && user.userRole === "admin"
                  ? "/admin/rendezvous"
                  : "/client/rendezvous"
              }
            >
              <button>
                {user && user.userRole === "admin"
                  ? "Check Appointments"
                  : "Book Appointment"}
              </button>
            </Link>
          ) : null}
        </div>
      </div>
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfhC9v61c7wRpkvD_AKlAGUEWqioW4nyOwjg&usqp=CAU"
              alt="ph"
            />
            <h3>Service 1</h3>
            <p>Description of Service 1</p>
          </div>
          <div className="service-item">
            <img
              src="https://img.freepik.com/photos-gratuite/composition-du-vaccin-contre-coronavirus-laboratoire_23-2148920820.jpg?size=626&ext=jpg&ga=GA1.2.1443952226.1694108186&semt=sph"
              alt="Service 2"
            />
            <h3>Service 2</h3>
            <p>Description of Service 2</p>
          </div>
          <div className="service-item">
            <img
              src="https://img.freepik.com/photos-gratuite/mains-clinicien-tenant-outils-au-cours-experience-scientifique-laboratoire_273609-13597.jpg?size=626&ext=jpg&ga=GA1.2.1443952226.1694108186&semt=sph"
              alt="Service 3"
            />
            <h3>Service 3</h3>
            <p>Description of Service 3</p>
          </div>
        </div>
      </div>
      <div className="about-section">
        <h2>About Us</h2>
        <div className="about-container">
          <div className="about-item">
            <img src="" alt="About 1" />
            <h3>About 1</h3>
            <p>Description of About 1</p>
          </div>
          <div className="about-item">
            <img src="path/to/about2.jpg" alt="About 2" />
            <h3>About 2</h3>
            <p>Description of About 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
