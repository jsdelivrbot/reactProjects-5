// state argument is not application state, only the state this reducer responsible for
// uygulama ilk boot olduğunda reducer fonksiyonu çağırıyor
// ve state undefined oluyor. redux state in undefined olmasına kızıyor o yüzden null seti yapılıyor
// ES6 syntax  state = null fonksiyona undefined parametre girerse otomatik içerde null a set ediyor
// undefined değilse null a set etmiyor


// reducer lar kendilerine ait olan state i değiştirmekle yükümlüdürler
export default function (state = null, action) {
    switch (action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}