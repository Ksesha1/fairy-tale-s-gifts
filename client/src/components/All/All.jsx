import React from 'react';
import Diagrams from '../Diagrams/Diagrams';
import History from '../History/History';
import CardsPage from '../CardsPage/CardsPage';

export default function All() {
  return (
    <div className="container">
      <Diagrams /> 
      <CardsPage />
      <History />
    </div>
  );
}
