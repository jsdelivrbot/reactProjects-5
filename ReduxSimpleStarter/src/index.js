// create a new component and this component should produce some HTML

// component leri create edip manage etmeye yarıyor
import React, {Component} from "react";
// componentleri dom a yazıyor
import ReactDom from "react-dom";

import SearchBar from "./components/search_bar";

import YTSearch from 'youtube-api-search';
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import _ from "lodash";


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
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('sokak ropörtajları');
    }

    videoSearch(term) {
        YTSearch({
            key: API_KEY, term: term
            // }, (videos) => this.setState({videos:videos}));
            // shortcut key ve value aynı olunca çalışıyor bu şekilde sadece
        }, (videos) => this.setState({
            videos: videos,
            selectedVideo: videos[0]
        }));
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},400 );
        return (
            <div>
                {/*şişman ok burada fonksiyonu tanımlamk yerine daha önceden tanımlanmış yere referans
                 verebiliyorsun*/}
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
                <VideoDetail video={this.state.selectedVideo}/>
            </div>
        );
    }

    // html kodlarına jsx deniyor
}
;

ReactDom.render(<App/>, document.querySelector('.container'));