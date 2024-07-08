import { useSelector } from "react-redux";

import { Spinner } from "react-bootstrap";
import AppointmentCard from "./AppointmentCard";
import SearchInput from "./SearchInput";
import { useState } from "react";

const Adminappointment = () => {
  const [search, setSearch] = useState("");
  const { appointment, loading } = useSelector(
    (state) => state.appointmentReducer
  );
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          <SearchInput search={search} handleSearch={handleSearch} />
          <div>
            {appointment
              .filter(
                (el) =>
                  el.nom
                    .trim()
                    .toUpperCase()
                    .includes(search.trim().toUpperCase()) ||
                  el.cin
                    .trim()
                    .toUpperCase()
                    .includes(search.trim().toUpperCase()) ||
                  el.email
                    .trim()
                    .toUpperCase()
                    .includes(search.trim().toUpperCase()) ||
                  el.prenom
                    .trim()
                    .toUpperCase()
                    .includes(search.trim().toUpperCase())
              )
              .map((el) => (
                <AppointmentCard key={el._id} el={el} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Adminappointment;
