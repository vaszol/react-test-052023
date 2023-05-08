import {useDispatch, useSelector} from "react-redux";
import {increment, fetchCats} from "./redux/slices/indes";
import {useEffect} from "react";

function App() {
    const catsData = useSelector((state) => state.catReducer.catsData);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCats())
    }, [])
    return (
        <div className="App">
            <h2>Data about cats with using Redux</h2>
            <span><b>{catsData?.fact}</b></span>
        </div>
    );
}

export default App;
