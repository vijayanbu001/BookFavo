// import xml2js from 'xml2js';
// import { xml2js } from 'xml-js';
import {parse} from './utility'
// var parser = new xml2js.Parser();

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
            // bookList = xml2js(action.payload.data, { compact: true, spaces: 4 })
            var XML = new DOMParser().parseFromString(action.payload.data, "text/xml");

            // and then use #parse to convert it to a JS object
            bookList = parse(XML);
            // console.log(JSON.stringify(bookList));
            /* {
                console.log(((result["GoodreadsResponse"].search)[0]).results[0].work, "==========");
                bookList = result;
            }); */
            return {
                ...state,
                loading:false,
                // bookListXml: action.payload.data,
                // bookList:JSON.parse(bookList)
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