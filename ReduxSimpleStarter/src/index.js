// create a new component and this component should produce some HTML

// component leri create edip manage etmeye yarıyor
import React from "react";
// componentleri dom a yazıyor
import ReactDom from "react-dom";

import SearchBar from "./components/search_bar";
const API_KEY = "AIzaSyC3XJvbPjZnrgvv8qZwzUq0t_MCbdPrjrw";

// take this generated HTML and put it on to the page (in DOM)

const App =  () => {
    // html kodlarına jsx deniyor
    return (
        <div>
            <SearchBar/>
        </div>
    );
};

ReactDom.render(<App/>, document.querySelector('.container'));