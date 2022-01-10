import React ,{useState} from 'react' ;
import {Button,Modal,Form} from 'react-bootstrap';


export default function Add({addHandler}) {
    const [show, setShow] = useState(false);
  //Modal Manipulation 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //state adding new movie
    const [title,settitle]= useState("");
    const [description,setdescription]= useState("");
    const [image,setimage]= useState("");

  
  function addmovie() {
    addHandler({ title, description, image});
    handleClose();
  }

    return (
      <div classname="add">
        <Button variant="primary" onClick={handleShow}>
          Add New Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                   <Form>
                   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                   <Form.Label>Add movie</Form.Label>
                   <Form.Control type="email" placeholder="Add movie here" onChange={(el)=>settitle(el.target.value)} />
                   <Form.Label>Add seri</Form.Label>
                   <Form.Control type="email" placeholder="Add seri here" onChange={(el)=>setdescription(el.target.value)} />
                   <Form.Label>Add anime</Form.Label>
                   <Form.Control type="email" placeholder="Add anime here" onChange={(el)=>setimage(el.target.value)} />
                   
                   </Form.Group>
                   </Form>
           </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addmovie}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  
 
