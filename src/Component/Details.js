import React from 'react';
import {Button} from 'react-bootstrap';
function Details({list,match}) {
    const found =list.find((el) => el.id == match.params.id);
    

    return (
        <div>
         <h1 className="h1"> {found.name} </h1>   
         <h2 className="h2"> {found.description} </h2>
         <span> {found.trailer} </span>
         <Button href={found.lien}>Click for watch</Button>
        </div>
    )
}

export default Details
