export const searchBook = ({searchString ='e',page =1}) => {
    return {
        type: 'LOAD',
        payload: {
            client: 'goodreads',
            request: {
                method:'get',
                url:"search/index.xml?key=aBIb5YItlnvRHJQ441m15w&q="+searchString +"&page="+page
                
            }
        }
    }
}

