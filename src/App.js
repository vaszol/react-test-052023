import {useDispatch, useSelector} from "react-redux";
import {increment} from "./redux/slices/indes";

function App() {
    const catReducerValue = useSelector((state) => state.catReducer.value);
    console.log(catReducerValue);
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(increment());
    }
    return (
        <div className="App">
            <button onClick={handleClick}>
                Test {catReducerValue}
            </button>
        </div>
    );
}

export default App;
