import Card from "react-bootstrap/Card";
import Picture from "./images/Pattie.jpg";

function GitHubCard() {
  return (
    <Card className="text-center">
      <Card.Img variant="top" src={Picture} alt="picture of myself" />
      <Card.Body>
        <Card.Title>Patience Marie</Card.Title>
        <Card.Text>
          Software Development student working on a snapshot testing GitHub
          card.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;
