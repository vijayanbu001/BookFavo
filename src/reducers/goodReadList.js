import {parse} from '../util/utility'

const InitialState = {
    bookListXml: '',
    bookList: null,
    loading:false
}

export const goodReads = (state = InitialState, action) => {
    switch (action.type) {
        case 'LOAD':
            return {
                ...state,
                loading:true
            }
        case 'LOAD_SUCCESS':
            var bookList = null
            var XML = new DOMParser().parseFromString(action.payload.data, "text/xml");
            bookList = parse(XML);
            return {
                ...state,
                loading:false,
                bookList
            }
        case 'LOAD_FAIL':
            return {
                ...state,
                loading:false
            }
        default:
            return { ...state }
    }
}