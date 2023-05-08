import {useDispatch, useSelector} from "react-redux";
import {increment, fetchCats} from "./redux/slices/indes";

function App() {
    const catReducerValue = useSelector((state) => state.catReducer.value);
    console.log(catReducerValue);
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(increment());
    }
    const handleClick2 = () => {
        dispatch(fetchCats());
    }
    return (
        <div className="App">
            <button onClick={handleClick}>
                Test {catReducerValue}
            </button>
            <button onClick={handleClick2}>
                Test2
            </button>
        </div>
    );
}

export default App;
