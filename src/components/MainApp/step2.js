import React, { useState, useContext } from "react";
import { PatientContext } from "../../contexts/PatientContext";
import "../../styles/mainApp.scss";
import { BsArrowLeft } from "react-icons/bs";

const Step2 = (props) => {
  const { patient, saveGenres } = useContext(PatientContext);
  const [data, setData] = useState(patient.genres);

  const onChange = (e) => {
    const id = e.target.id;
    const val = e.target.value;

    // console.log("onChange: ", val);

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
      <form className="form" onSubmit={onSubmit}>
        <h1>Veuillez sélectionner votre sexe</h1>
        <div className="button-group">
          <button className="button_back left_group" id="back" onClick={onBack}>
            <BsArrowLeft />
          </button>
          <button
            className="input-genre left_group btn btn-primary "
            id="masculine"
            type="submit"
            value="Monsieur"
            required
            onClick={onChange}
          >
            Monsieur
          </button>
          <button
            className="input-genre right_group btn btn-primary"
            id="feminine"
            type="submit"
            value="Madame"
            required
            onClick={onChange}
          >
            Madame
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
