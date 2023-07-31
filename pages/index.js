import Event from "../components/event/Event";
import { getFeaturedEvents } from "../dummy-data";
import classes from './event-list.module.css'

function Home() {
    const featuredEvents = getFeaturedEvents();
  return (
    <div>
        {featuredEvents.map((event) => (
            <ul className={classes.list}>
            <Event key={event.id} event={event} />
            </ul>
        ))}
    </div>
  )
}

export default Home