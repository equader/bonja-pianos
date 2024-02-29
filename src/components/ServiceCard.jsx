function ServiceCard({ title, text, icon }) {
  const cardStyle = {
      backgroundImage: `url(${icon})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
  };

  return (
      <div className="service-card" style={cardStyle}>
          <div className="service-card-content">
              <h2>{title}</h2>
              <p>{text}</p>
          </div>
      </div>
  );
}


export default ServiceCard;
