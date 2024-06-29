import React from 'react';

type Tour = {
    id: number;
    title: string;
    description: string;
    price: number;
    promotion: number;
    views: number;
    attributes: { id: number; attribute: string }[];
    itineraries: { day: number; title: string; itinerary: string }[];
    images: { image: string }[];
    hotels: { id: number; name: string; description: string }[];
    // các trường khác của tour
};

type Props = {
    tour: Tour;
};

const TourDetails: React.FC<Props> = ({ tour }) => {
    return (
        <div>
            <h2>{tour.title}</h2>
            <p>{tour.description}</p>
            <p>Price: ${tour.price}</p>
            <p>Promotion: ${tour.promotion}</p>
            <p>Views: {tour.views}</p>

            <h3>Attributes:</h3>
            <ul>
                {tour.attributes.map(attr => (
                    <li key={attr.id}>
                        {attr.attribute}
                    </li>
                ))}
            </ul>

            <h3>Itineraries:</h3>
            <ul>
                {tour.itineraries.map(item => (
                    <li key={item.day}>
                        <h4>{item.title}</h4>
                        <div dangerouslySetInnerHTML={{ __html: item.itinerary }} />
                    </li>
                ))}
            </ul>

            <h3>Images:</h3>
            <img src={tour.images[0].image} alt="Tour Image" />

            <h3>Hotels:</h3>
            <ul>
                {tour.hotels.map(hotel => (
                    <li key={hotel.id}>
                        <h4>{hotel.name}</h4>
                        <p>{hotel.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TourDetails;
