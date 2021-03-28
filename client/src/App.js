import {ProductCatalogue} from "./components/ProductCatalogue/ProductCatalogue";
import {data} from "./components/ProductCatalogue/Data";

function App() {
    return (
        <div className="App">
            <div>
                <ProductCatalogue products={data}/>
            </div>
        </div>
    );
}

export default App;
