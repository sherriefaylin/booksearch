import React, {Component} from 'react';
import GalleryModal from './GalleryModal';

class Gallery extends Component {
    render(){

        return(
            
            <div className="book-list-wrapper">
            {
                this.props.query ? (
                    <div className="col-sm-12">
                        <p className="search-status">Search Results For: {this.props.query}</p>
                    </div>
                ):null
            }
                
            {
                this.props.items.map((item, index) => {
                    let {title, imageLinks, infoLink, description, categories, authors} = item.volumeInfo;
                    let {amount} = item.saleInfo.listPrice !== undefined ? item.saleInfo.listPrice : noPrice ;
                    let bookTitle = item.volumeInfo.title;
                    let modalTitle = item.volumeInfo.title;
                    if(bookTitle.length > 20){
                        bookTitle = bookTitle.substring(0,20) + '...';
                    }
                    return(
                        <div key={index} className="col-sm-12">
                            <div className="book-wrapper">
                                <a className="book" href={infoLink} target="_blank">
                                    <div className="book-image-wrapper">
                                        <img src={imageLinks !== undefined ? imageLinks.thumbnail : altImage} 
                                        alt="Book Image"
                                        className="book-image"
                                        />
                                    </div>
                                    <div className="book-price ">{amount !== undefined ? '$' + amount : noPrice}</div>
                                    <div className="book-title">
                                        <h3>{bookTitle}</h3>
                                    </div>
                                </a>
                                <GalleryModal bookTitle = {modalTitle} 
                                bookDesc = {description}
                                bookCat = {categories}
                                bookAuth = {authors}
                                bookLink = {infoLink}
                                 />
                            </div>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

export default Gallery;