import {useDispatch, useSelector} from "react-redux";
import {increment, fetchCats} from "./redux/slices/indes";
import {useEffect} from "react";
import {useFatchCats} from "./hooks";
import {useQueryClient} from "react-query";

function App() {
    const catsData = useSelector((state) => state.catReducer.catsData);
    const dispatch = useDispatch();
    const {data, isLoading, error} = useFatchCats();
    console.log('data', data);
    const queryClient = useQueryClient();
    console.log('queryClient', queryClient);

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
