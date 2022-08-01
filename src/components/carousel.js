import Carousel from "react-bootstrap/Carousel";
import person1 from "./images/person1.jpg";
// import person2 from "./images/person2.jpg";
import image from "./images/image.jpg";
import "./carousel.css";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        {" "}
        {/* <div className='d-block w-100' style={{height:"30rem"}}></div> */}
        <img className="d-block w-100" src={image} alt="First slide"/>
        <Carousel.Caption>
          <img src={person1} className="rounded-circle" alt="CinqueTerre" />
          <p style={{ color: "#000" }}>
            {" "}
            “I appreciate your amaizing services and your professional staff for
            all your hard work and creative services.It was fun and I hope to
            work with you soon.”{" "}
          </p>{" "}
          <p style={{ color: "#000" }}> mercy Raymond </p>{" "}
        </Carousel.Caption>{" "}
      </Carousel.Item>{" "}
      <Carousel.Item>
        {" "}
        {/* <div className='d-block w-100' style={{height:"30rem"}}></div> */}{" "}
        <img className="d-block w-100" src={image} alt="Second slide" />
        <Carousel.Caption>
          <img src={person1} className="rounded-circle" alt="CinqueTerre" />
          <p style={{ color: "#000" }}>
            {" "}
            “I appreciate your amaizing services and your professional staff for
            all your hard work and creative services.It was fun and I hope to
            work with you soon.”{" "}
          </p>{" "}
          <p style={{ color: "#000" }}> mercy Raymond </p>{" "}
        </Carousel.Caption>{" "}
      </Carousel.Item>{" "}
      <Carousel.Item>
        <div className="d-block w-100"> </div>{" "}
        <img className="d-block w-100" src={image} alt="Third slide" />
        <Carousel.Caption>
          <img src={person1} className="rounded-circle" alt="CinqueTerre" />
          <p style={{ color: "#000" }}>
            {" "}
            “I appreciate your amaizing services and your professional staff for
            all your hard work and creative services.It was fun and I hope to
            work with you soon.”{" "}
          </p>{" "}
          <p style={{ color: "#000" }}> mercy Raymond </p>{" "}
        </Carousel.Caption>{" "}
      </Carousel.Item>{" "}
    </Carousel>
  );
}

export default UncontrolledExample;
