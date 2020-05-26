import React, { useContext, useState } from "react";
import { PatientContext } from "../../contexts/PatientContext";

const Step3 = (props) => {
  const { patient } = useContext(PatientContext);
  const [dataName] = useState(patient.user);
  const [dataGenre] = useState(patient.genres);

  return (
    <div className="step step3">
      <h1>
        {dataGenre.masculine} {dataGenre.feminine} {dataName.firstname}{" "}
        {dataName.name}
      </h1>
    </div>
  );
};

export default Step3;
