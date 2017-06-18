import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchWeather} from "../actions/index";


class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''};

        // bind ne işe yarıyor. eğer bir callback fonksiyonunu bir event handler a atıyorsan
        // o event handler içinde kullandığın this SearchBar a karşılık gelmiyor, alakasız bişeye karşılık geliyor
        // evebtHandler ın yani onInputChange in içindeki this in SearchBar a karşılık gelmesi için binding yapıyorsun

        // this.onInputChange i this ile bind et ve this.onInputChange e ata.
        this.onInputChange = this.onInputChange.bind(this);
         this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    render() {
        return (
            <div>
                {/*submit e basınca formun server a post request yapmasını engellemek için*/}
                {/*forma submit event handler ı tanımlıyorsun*/}

                {/*burdaki form sadece text e enter deyince ve button a tıklayınca yeni event handler tanımlamamak ,*/}
                {/*için kullanılıyor. Yoksa div den farkı yok*/}
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <div>
                        <input
                            type="text"
                            placeholder="Get a five day forecast in your favorite cities"
                            className="form-control"
                            value={this.state.term}
                            // onChange javascript event listener not react
                            onChange={this.onInputChange}
                        />
                    </div>

                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Search</button>
                    </span>
                </form>
            </div>
        );
    }

    onInputChange(event) {
        this.setState({'term': event.target.value});
    }

    onFormSubmit(event) {
        // server a post yapmayı engeller
        event.preventDefault();
        // redux tan gelenler props ile alınıyor , fetchweather action creator ve redux ta tanımlı
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

// container içinde state tutmadığımız için mapstatetoprops tanımlamaya gerek olmuyor
// dolayısıylen bu değer null oluyor
export default connect(null, mapDispatchToProps)(SearchBar);