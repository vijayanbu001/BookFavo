import React from 'react';

const BookItem = ({ image, title, index }) => {
    return <div key={index} className="book-content">
        <div style={{
            backgroundImage: `url(${image})`, width: '150px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: "200px"
        }} />
        <div style={{textAlign:'center'}}>{title}</div>
    </div>
}
export default BookItem;