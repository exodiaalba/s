import React from 'react'
import {Card,Button} from 'react-bootstrap';
import Rate from './Rate';

function MovieCard({movie}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
            <Card.Title>{movie.name}</Card.Title>
            <Card.Text>
                   {movie.description}
            </Card.Text>
            <Card.Title> <Rate rate={movie.rating} /> </Card.Title>
            <Button href={movie.lien} variant="primary">Go to movie</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
