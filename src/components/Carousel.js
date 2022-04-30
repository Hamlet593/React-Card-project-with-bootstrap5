import React from 'react'

const Carousel = () => {
  return (
    <>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://scontent.fevn7-1.fna.fbcdn.net/v/t1.6435-9/164369337_4070056159723401_2880767222354372329_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=1I2Lr8NdE4cAX8wVkAa&_nc_ht=scontent.fevn7-1.fna&oh=00_AT8mDBFkzEGDmsZxzk_LUVLC4t0KE3E8DqkxlqFHn3lo1A&oe=62920E73" className="d-block w-100" alt="Hamo Muradyan on Cascade" />
            </div>
            <div className="carousel-item">
                <img src="https://scontent.fevn7-1.fna.fbcdn.net/v/t1.6435-9/41309148_2062194703842900_4222549195292147712_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=OnhmKpY4hhoAX9HqIIk&_nc_ht=scontent.fevn7-1.fna&oh=00_AT9gvRRnxhQaDr9S2VEtnbrXzjOJLmAkU9MyoNXwHRle7g&oe=629206BE" className="d-block w-100" alt="Hamo Muradyan on the roof" />
            </div>
            <div className="carousel-item">
                <img src="https://scontent.fevn7-1.fna.fbcdn.net/v/t1.6435-9/53343596_2321371021258599_9021696513121714176_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=V3akbfWeWQAAX-ZA_RM&_nc_ht=scontent.fevn7-1.fna&oh=00_AT_qdULp6Lavkxf2ZjmrYeeE1gEFh1Ww0o2BN-U_ZaRo6g&oe=6292E7C4" className="d-block w-100" alt="Hamo Muradyan smoke" />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </>
  )
}

export default Carousel