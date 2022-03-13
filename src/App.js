import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./component/spinner/spinner";
import FormCode from "./FormCode";
import { GlobalAction } from "./store/global/global.action";

function App() {
  const dispatch = useDispatch();
  const { isLoading, formCodeData } = useSelector((state) => state.GlobalReducer);

  const onSubmit = () => {
    console.log(formCodeData);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        {/* <button
          className="flex sm:inline-flex justify-center items-center bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus-visible:ring ring-blue-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2"
          onClick={() => {
            dispatch(GlobalAction.setLoading(true));
          }}
        >
          open loading
        </button>
        {isLoading && <Spinner />} */}
        <FormCode onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default App;
