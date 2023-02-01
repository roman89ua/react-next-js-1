import { Button, Card, Ratio } from "react-bootstrap";
import Link from "next/link";

export interface IEventCard {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
}

function EventCard({
  id,
  title,
  description,
  image,
  date,
  location,
}: IEventCard) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const multilineAddress = location.replaceAll(", ", "\n");

  return (
    <Card className="w-100 d-flex flex-row">
      <Ratio aspectRatio="4x3" className="mw-100">
        <Card.Img src={image} />
      </Ratio>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{formattedDate}</Card.Text>
        <Card.Text>{multilineAddress}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Link
          href={{
            pathname: "events/[eventId]",
            query: { eventId: id },
          }}
        >
          <span>
            <Button variant="primary">Event details</Button>
          </span>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
