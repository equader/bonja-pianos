import React from "react";
import { Carousel, Card } from 'react-bootstrap';
import './css/reviews.css'; 

const reviewsData = [
    {
        id: 1,
        title: "Review 1",
        content: "This is an amazing product! Totally changed my workflow.",
    },
    {
        id: 2,
        title: "Review 2",
        content: "Incredible service, and the quality is top-notch. Highly recommend!",
    },
    {
        id: 3,
        title: "Review 3",
        content: "Fantastic experience from start to finish. Will be coming back for more.",
    },
    {
        id: 4,
        title: "Review 4",
        content: "Very satisfied with the purchase. Exceeded my expectations!",
    },
    {
        id: 5,
        title: "Review 5",
        content: "Support team was helpful and responsive. Solved my issue quickly!",
    },
    {
        id: 6,
        title: "Review 6",
        content: "User-friendly and intuitive. I highly recommend this to anyone!",
    },
    {
        id: 7,
        title: "Review 7",
        content: "Delivery was prompt and the item was as described. Great job!",
    },
    {
        id: 8,
        title: "Review 8",
        content: "Really impressed with the performance. It's worth every penny!",
    },
    {
        id: 9,
        title: "Review 9",
        content: "A seamless experience from start to finish, I'll definitely be a return customer!",
    }
    
];

function Reviews() {
    const groupedReviews = reviewsData.reduce((result, review, index) => {
        const chunkIndex = Math.floor(index / 3);
        if (!result[chunkIndex]) {
            result[chunkIndex] = []; // start a new chunk
        }
        result[chunkIndex].push(review);
        return result;
    }, []);

    return (
        <div className="reviews">
            <h1>Hear from our customers</h1>
            <Carousel>
                {groupedReviews.map((group, index) => (
                    <Carousel.Item key={index}>
                        <div className="d-flex justify-content-center">
                            {group.map(review => (
                                <Card key={review.id} className="flex-fill">
                                    <Card.Body>
                                        <Card.Title>{review.title}</Card.Title>
                                        <Card.Text>{review.content}</Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default Reviews;
