import React from 'react';

const EventsPage: React.FC = () => {
  const upcoming = [
    { name: 'Praise Night', venue: 'Enosh Auditorium', time: '25 March 2026, 6:00 PM' },
    { name: 'Women\'s Conference', venue: 'City Conference Hall', time: '10 April 2026, 9:00 AM' }
  ];
  const past = [
    { name: 'Easter Revival', venue: 'Enosh Grounds', time: '4 April 2025, 10:00 AM' }
  ];

  return (
    <main className="container">
      <h1>Events</h1>

      <section>
        <h2>Upcoming Events</h2>
        <div className="event-list">
          {upcoming.map((ev, idx) => (
            <div key={idx} className="event-item">
              <div className="event-header">
                <h3 className="event-name">{ev.name}</h3>
                <span className="pill upcoming">Upcoming</span>
              </div>
              <p className="event-venue"><strong>Venue:</strong> {ev.venue}</p>
              <p className="event-time"><strong>Time:</strong> {ev.time}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{marginTop:20}}>
        <h2>Past Events</h2>
        <div className="event-list">
          {past.map((ev, idx) => (
            <div key={idx} className="event-item">
              <div className="event-header">
                <h3 className="event-name">{ev.name}</h3>
              </div>
              <p className="event-venue"><strong>Venue:</strong> {ev.venue}</p>
              <p className="event-time"><strong>Time:</strong> {ev.time}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default EventsPage;
