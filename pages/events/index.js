import { getAllEvents } from "../../dummy-data";
import Event from "../../components/event/Event";
import EventSearch from "./event-search";
import { useRouter } from "next/router";

const Events = () => {
    const allEvents = getAllEvents();
    const router = useRouter();
    const onSearch = (year, month) => {
        router.push(`/events/${year}/${month}`);
    };

    return (
        <>
        <EventSearch onSearch={onSearch}/>
        <ul className="list">
            {allEvents.map((event) => (
                <Event key={event.id} event={event} />
            ))}
        </ul>
        </>
    )
};

export default Events;