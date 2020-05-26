import React, { useState } from "react";
import Step1 from "./components/MainApp/step1";
import PatientContextProvider from "./contexts/PatientContext";

function App() {
  const [step, setStep] = useState(1);

  const onNext = () => {
    if (step < maxSteps) setStep(step + 1);
  };

  const maxSteps = 3;

  let content;

  switch (step) {
    case 1:
    default:
      content = <Step1 onNext={onNext} />;
      break;
  }

  return (
    <div className="App">
      <PatientContextProvider>{content}</PatientContextProvider>
    </div>
  );
}

export default App;
