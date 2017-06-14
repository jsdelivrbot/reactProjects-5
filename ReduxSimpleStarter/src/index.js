// create a new component and this component should produce some HTML

// component leri create edip manage etmeye yarıyor
import React, {Component} from "react";
// componentleri dom a yazıyor
import ReactDom from "react-dom";

import SearchBar from "./components/search_bar";

import YTSearch from 'youtube-api-search';
import VideoList from "./components/video_list";


const API_KEY = "AIzaSyC3XJvbPjZnrgvv8qZwzUq0t_MCbdPrjrw";


// take this generated HTML and put it on to the page (in DOM)

// const App = () => {
//     // html kodlarına jsx deniyor
//     return (
//         <div>
//             <SearchBar/>
//         </div>
//     );
// };

class App extends Component {
    constructor(props) {
        super(props);

        YTSearch({
            key: API_KEY, term: 'inna'
            // }, (videos) => this.setState({videos:videos}));
            // shortcut key ve value aynı olunca çalışıyor bu şekilde sadece
        }, (videos) => this.setState({videos}));

        this.state = {videos: []};
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }

    // html kodlarına jsx deniyor
}
;

ReactDom.render(<App/>, document.querySelector('.container'));