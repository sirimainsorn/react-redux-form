import React from "react";
import { useSelector } from "react-redux";
import FormCode from "./FormCode";

function App() {
  const { formCodeData } = useSelector((state) => state.GlobalReducer);

  const onSubmit = () => {
    console.log(formCodeData);
  };

  return (
    <div className="bg-white">
      <div className="py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <FormCode onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default App;
