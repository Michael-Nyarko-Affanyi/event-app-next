import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSumary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

const SingleEvent = () => {
  const {
    query: { eventId: id },
  } = useRouter();

  const singleEvent = getEventById(id);
  console.log(singleEvent);

  if (!singleEvent) {
    return (
      <>
        <ErrorAlert>
          <p>No event found!</p>
        </ErrorAlert>
      </>
    );
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
