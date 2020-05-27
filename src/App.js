import React, { Fragment, useState } from 'react';
import { Navbar, NavbarBrand } from "reactstrap";
import Step1 from "./components/MainApp/step1";
import Step2 from "./components/MainApp/step2";
import Result from "./components/MainApp/result";
import Sidebar from './components/Nav/Sidebar';
import TopNavbar from './components/Nav/Navbar';
import PatientContextProvider from "./contexts/PatientContext";


function App() {

  const [step, setStep] = useState(1);

  const onNext = () => {
    if (step < maxSteps) setStep(step + 1);
  };

  const onBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const maxSteps = 3;

  let content;

  switch (step) {
    case 1:
    default:
      content = <Step1 onNext={onNext} />;
      break;

    case 2:
      content = <Step2 onNext={onNext} onBack={onBack} />;
      break;

    case 3:
      content = <Result onBack={onBack} />;
      break;
  }

  return (
    <div className="App">
      <Fragment>
          <TopNavbar />
          <Sidebar />
      </Fragment>
      <PatientContextProvider>{content}</PatientContextProvider>
    </div>
  );
}

export default App;
