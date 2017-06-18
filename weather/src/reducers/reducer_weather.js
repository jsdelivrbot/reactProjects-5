import {FETCH_WEATHER} from "../actions/index";
export default function (state = [], action) {
    switch (action.type){
        case FETCH_WEATHER:

            // burda yeni bir array dönmek gerekiyor o yüzden push kullanamıyoruz
            // return state.concat([action.payload.data]);
            return [action.payload.data, ...state];
    }

    return state;
}

