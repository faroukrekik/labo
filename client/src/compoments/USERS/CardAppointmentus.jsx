import CancelAppoint from "./CancelAppoint";

const CardAppointmentus = ({ el }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table>
        {" "}
        <thead>
          {" "}
          <tr>
            {" "}
            <th>Name</th> <th>Date</th> <th>Test</th> <th>Time</th>{" "}
            <th>Confirmation</th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          <tr>
            {" "}
            <td>
              {el.nom} {el.prenom}
            </td>{" "}
            <td>{el.date}</td> <td>{el.test}</td> <td>{el.heur}</td>{" "}
            <td>{el.confirmation ? "Confirmed" : "Pending"}</td>{" "}
          </tr>{" "}
        </tbody>{" "}
      </table>
      <CancelAppoint el={el} />
    </div>
  );
};

export default CardAppointmentus;
