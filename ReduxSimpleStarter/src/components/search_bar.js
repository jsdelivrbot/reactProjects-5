import React, {Component} from "react";

// const SearchBar = () => {
//     return <input type="text"/>
// };


class SearchBar extends Component{
    render(){
        return <input type="text" onChange={this.onInputChange}/>
    };

    onInputChange(event) {
        console.log(event);
    }
}

// anladığım kadarıyla tek bir değişkeni export edebiliyorsun
// zati her component tek bir dosyada duruyor
export default SearchBar;