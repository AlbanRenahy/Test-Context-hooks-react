import React, { useState, useContext } from "react";
import { PatientContext } from "../../contexts/PatientContext";

const Step1 = (props) => {
  const { patient, saveUser } = useContext(PatientContext);
  const [data, setData] = useState(patient.user);

  const onChange = (e) => {
    // update state

    const id = e.target.id;
    const val = e.target.value;

    console.log("onChange: ", val);

    data[id] = val;
    setData({ ...data });
  };

  const onNext = () => {
    //setData({...data})
    console.log(data);
    saveUser(data);
    props.onNext();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  //console.log('step1: data ', data)

  return (
    <div className="step step1">
      <form onSubmit={onSubmit}>
        <h1>Veuillez entrer votre nom et prénom</h1>

        <div className="field">
          <input
            placeholder="Nom"
            id="name"
            value={data.name}
            required
            onChange={onChange}
          />
        </div>

        <div className="field">
          <input
            placeholder="Prénom"
            id="firstname"
            value={data.firstname}
            required
            onChange={onChange}
          />
        </div>

        <button type="submit">suivant</button>
      </form>
    </div>
  );
};

export default Step1;
