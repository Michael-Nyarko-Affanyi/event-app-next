import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import Event from "../../components/event/Event";

const FilteredEvents = () => {
  const {
    query: { slugs },
  } = useRouter();
  // console.log(slugs)

  if (!slugs) {
    return <p className="center">Loading...</p>;
  }
  const filteredYear = +slugs[0];
  const filteredMonth = +slugs[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return <p>Invalid Filter. Please adjust your values!</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

    if (!filteredEvents || filteredEvents.length === 0) {
        return <p>No events found for the chosen filter!</p> 
    }

  return (
    <>
        <ul className="list">
            {filteredEvents.map((event) => (
                <Event key={event.id} event={event} />
            ))}
        </ul>
    </>
  );
};

export default FilteredEvents;
