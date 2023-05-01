import { useEffect } from "react";
import "./App.css";
import ButtonPrevNext from "./component/ButtonPrevNext";
import ImagesGrid from "./component/ImagesGrid";
import { useDispatch, useStore } from "react-redux";
import { fetchAndSet, selectQuery } from "./component/slices/ImagesSlice";
import ComplexGrid from './component/FormDialog';

function App() {
  const store = useStore();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAndSet(selectQuery(store.getState())));
  });




  return (
    <div className="App">
      <header className="App-header">
        <ButtonPrevNext />
        <ComplexGrid/>
      </header>
      <ImagesGrid />

    </div>
  );
}

export default App;
