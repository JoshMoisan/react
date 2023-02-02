import React from "react";
import { useInView } from "react-intersection-observer";

const HistoryCard = ({title, description}) => {
  const { ref: historyRef, inView: myHistoriesAreVisible} = useInView()

  return (
  <div className={myHistoriesAreVisible ? "card-container" : "card-container"} ref={historyRef}>
    <div className="card-avatar">
      <img src="https://icones.pro/wp-content/uploads/2021/03/avatar-de-personne-icone-homme.png" alt="mock-avatar" />
    </div>
    <div className="card-history">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>

  );
};

export default HistoryCard;
