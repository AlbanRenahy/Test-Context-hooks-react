import React, { useState, useContext } from "react";
import { PatientContext } from "../../contexts/PatientContext";

const Step2 = (props) => {
  const { patient, saveGenres } = useContext(PatientContext);
  const [data, setData] = useState(patient.genres);

  const onChange = (e) => {
    const id = e.target.id;
    const val = e.target.value;

    console.log("onChange: ", val);

    data[id] = val;
    setData({ ...data });
  };

  const onBack = () => {
    saveGenres(data);
    props.onBack();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    saveGenres(data);
    props.onNext();
  };

  return (
    <div className="step step2">
      <form onSubmit={onSubmit}>
        <h1>Veuillez sélectionner votre sexe</h1>
        <div className="field">
          <button
            id="masculine"
            type="submit"
            value="Monsieur"
            required
            onClick={onChange}
          >
            Monsieur
          </button>
        </div>
        <div className="field">
          <button
            id="feminine"
            type="submit"
            value="Madame"
            required
            onClick={onChange}
          >
            Madame
          </button>
        </div>
        <button id="back" onClick={onBack}>
          back
        </button>
      </form>
    </div>
  );
};

export default Step2;
