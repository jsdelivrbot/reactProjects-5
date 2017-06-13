// create a new component and this component should produce some HTML

// component leri create edip manage etmeye yarıyor
import React from "react";
// componentleri dom a yazıyor
import ReactDom from "react-dom";

// take this generated HTML and put it on to the page (in DOM)

const App =  () => {
    // html kodlarına jsx deniyor
    return <div>Hi </div>;
}

ReactDom.render(<App/>, document.querySelector('.container'));