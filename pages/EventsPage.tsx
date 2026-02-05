const EventsPage = () => {
  const upcoming = [
    { name: 'Intercessory Kesha', venue: 'Yeshua Grace Ministry Church', time: '8:00 PM - 5:00 AM' },
    { name: 'Praise and Worship Night', venue: 'Yeshua Grace Ministry Church', time: 'April 2026' },
    { name: 'Enosh Conference', venue: 'Venue will be communicated', time: 'Time will be communicated' }
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
    </main>
  );
};

export default EventsPage;
