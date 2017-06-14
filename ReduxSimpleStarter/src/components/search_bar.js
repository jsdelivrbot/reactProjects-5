import React, {Component} from "react";

// const SearchBar = () => {
//     return <input type="text"/>
// };


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
        this.onSearchTermChange = props.onSearchTermChange;
    }


    // class componentlerde props u herhangi bir yerde kullanabiliyorsun
    render() {
        // return <input type="text" onChange={event => this.setState({term: event.target.value})}/>
        return (
            <div className="search-bar">
                <input type="text" value={this.state.term} onChange={event => this.onInputChange(event.target.value)}/>

                {/*Value of input {this.state.term}*/}
            </div>
        );
    };

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

// anladığım kadarıyla tek bir değişkeni export edebiliyorsun
// zati her component tek bir dosyada duruyor
export default SearchBar;

