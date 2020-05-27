import React, { createContext, useState } from "react";

export const PatientContext = createContext();

const PatientContextProvider = (props) => {
  const [patient, setPatient] = useState({
    user: {
      name: "",
      firstname: "",
    },

    genres: {
      masculine: "",
      feminine: "",
    },
  });

  const saveUser = (user) => {
    // console.log("saveUser: ", user);
    setPatient({ ...patient, user });
  };

  const saveGenres = (genres) => {
    // console.log("saveGenres: ", genres);
    setPatient({ ...patient, genres });
  };

  const submit = () => {
    // console.log("submit");
  };

  return (
    <PatientContext.Provider value={{ patient, saveUser, saveGenres, submit }}>
      {props.children}
    </PatientContext.Provider>
  );
};

export default PatientContextProvider;
