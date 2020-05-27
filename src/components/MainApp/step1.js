import React, { useState, useContext } from "react";
import { PatientContext } from "../../contexts/PatientContext";
import "../../styles/mainApp.scss";
import { BsArrowRight } from "react-icons/bs";

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
    <div class="container">
      <form className="form" onSubmit={onSubmit}>
        <h1>Veuillez entrer votre nom et prénom</h1>
        <div className="input-group">
          <div>
            <input
              className="form-control form-control-sm input"
              placeholder="Nom"
              id="name"
              value={data.name}
              required
              onChange={onChange}
            />
          </div>

          <div className="field">
            <input
              className="form-control form-control-sm input"
              placeholder="Prénom"
              id="firstname"
              value={data.firstname}
              required
              onChange={onChange}
            />
          </div>
        </div>
        <button className="button_next btn" type="submit">
          <BsArrowRight />
        </button>
      </form>
    </div>
  );
};

export default Step1;
