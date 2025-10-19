import EventsInfo from "./EventsInfo.jsx";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const EventsList = () => {
  const [contentState, setContentState] = useState(null);
  const langState = useSelector((state) => state.language.value);

  useEffect(() => {
    const loadContent = async () => {
      if (langState === "Eng") {
        const module = await import("../data/EngEvents.js");
        setContentState(module.default);
      } else {
        const module = await import("../data/JapEvents.js");
        setContentState(module.default);
      }
    };
    loadContent();
  }, [langState]);

  if (!contentState) {
    return (
      <div className="section">
        <div className="container">
          <div className="content-box">
            <div className="section-text">Loading events...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container">
        <div className="content-box">
          <h1 className="section-title">Events</h1>
          {contentState.length > 0 ? (
            <div className="events-grid">
              {contentState.map((event, index) => (
                <EventsInfo key={index} event={event} />
              ))}
            </div>
          ) : (
            <div className="section-text">
              No events available at the moment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsList;
