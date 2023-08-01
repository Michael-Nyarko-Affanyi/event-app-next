import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import Event from "../../components/event/Event";
import ResultTitle from "../../components/event/results-title";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/error-alert";

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
    return(
        <>
            <ErrorAlert>
            <p>Invalid Filter. Please adjust your values!</p>
            </ErrorAlert>
            <div className="center">
            <Button link='/events'>Show All Events</Button>
            </div> 
            </>
    )
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
            <ErrorAlert>
            <p>No events found for the chosen filter!</p>
            </ErrorAlert>
            <div className="center">
            <Button link='/events'>Show All Events</Button>
            </div> 
            </>
        )
    }

    const date = new Date(filteredYear, filteredMonth - 1);

  return (
    <>
    <ResultTitle date={date}/>
        <ul className="list">
            {filteredEvents.map((event) => (
                <Event key={event.id} event={event} />
            ))}
        </ul>
    </>
  );
};

export default FilteredEvents;
