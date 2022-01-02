import React from "react"
import {Carousel} from "react-bootstrap"
function cars() {
    return (
        <div className="cars">
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bg9wCYm61dndULI4bActwAv_XneCP2SFHpRAbQU6y4DZrWoDwHxTKLWa7e_cac2oCuY&usqp=CAU"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>by marvel</h3>
      <p>zipidr man no way home</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://pic.clubic.com/v1/images/1799502/raw"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Sonic 2</h3>
      <p>Sonic 2 coming soon 2022</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7e757N728XI-0YdefjkKOlSJ6HsGO31yyIl7Pzl5iyb5W0tj5MaY7Ck0dYF4te05BJdQ&usqp=CAU"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Avatar 2</h3>
      <p>coming soon 2022</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default cars