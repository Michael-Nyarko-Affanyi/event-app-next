import Event from "../components/event/Event";
import { getFeaturedEvents } from "../dummy-data";

function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <ul className='list'>
      {featuredEvents.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default Home;
