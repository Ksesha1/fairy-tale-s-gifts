import React from 'react';
import { useDispatch } from 'react-redux';
import { addHistory } from '../../redux/reducers/historyReducer';
import { deletePresent } from '../../redux/reducers/presentsReducer';

// компонент для отрисовки одной карточки и функции удаления
function Cards({ card }) {
  const dispatch = useDispatch();
  // функция удаления и записи о действии
  function Click(currentCard) {
    dispatch(deletePresent(currentCard.id));
    const story = {
      action: 'Удален',
      name: currentCard.animalType,
    };
    dispatch(addHistory(story));
  }
  return (
    <div style={{ border: '1px solid gainsboro', margin: '10px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: ' 1px solid gainsboro',
        padding: '10px',
        alignItems: 'center',
        height: '30px',
      }}
      >
        <h5>{card.animalType}</h5>
        <button
          type="button"
          style={{
            backgroundColor: 'white',
            color: 'red',
            border: '2px solid red',
            height: '20px',
          }}
          onClick={() => Click(card)}
          className="danger"
        >
          Удалить

        </button>
      </div>
      <div style={{ padding: '10px' }}>
        <p>
          Пол:
          {card?.pol == 'М' ? 'Мужской' : 'Женский'}
        </p>
        <p>
          Возраст:
          {' '}
          {card.age}
        </p>
      </div>
    </div>
  );
}
export default Cards;
