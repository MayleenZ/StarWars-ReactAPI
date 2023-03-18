function StarShipCard(props) {
  const { starship } = props;
  console.log(starship);
  return (
      <div className="starships">
        <h1>{starship.name}</h1>
        <p>Crew: {starship.crew}</p>
        <p>Model: {starship.model}</p>
        <p>Passengers: {starship.passengers}</p>
        <p>Speed: {starship.max_atmosphering_speed}</p>
      </div>
  );
}

export default StarShipCard;
