import React, { useContext, useState } from "react";
import { PatientContext } from "../../contexts/PatientContext";
import "../../styles/mainApp.scss";

const Step3 = (props) => {
  const { patient } = useContext(PatientContext);
  const [dataName] = useState(patient.user);
  const [dataGenre] = useState(patient.genres);

  return (
    <div className="container">
      <div className="result">
        <h1>
          {dataGenre.masculine} {dataGenre.feminine} {dataName.firstname}{" "}
          {dataName.name}
        </h1>
      </div>
    </div>
  );
};

export default Step3;
