import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSumary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const SingleEvent = () => {
  const {
    query: { eventId: id },
  } = useRouter();

  const singleEvent = getEventById(id);
  console.log(singleEvent);

  if (!singleEvent) {
    return <p>No event found!</p>;
  }
  return (
    <>
      <EventSumary title={singleEvent.title} />
      <EventLogistics
        date={singleEvent.date}
        address={singleEvent.location}
        image={singleEvent.image}
        imageAlt={singleEvent.title}
      />
      <EventContent>
        <p>{singleEvent.description}</p>
      </EventContent>
    </>
  );
};

export default SingleEvent;
