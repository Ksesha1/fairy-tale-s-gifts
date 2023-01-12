import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addPresent } from '../../redux/reducers/presentsReducer';
import Cards from '../Cards/Cards';
import { addHistory } from '../../redux/reducers/historyReducer';

// компонет для добавления новых карточек и размапывания массива карточек
export default function CardsPage() { 
  const dispatch = useDispatch();
  const presents = useSelector((s) => s.presents);
  // создание управляемых инпутов
  const [animalType, setAnimalType] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
// функция добавления карточек и истории действий
  function handleSubmit(e) {
    e.preventDefault();
    if (animalType && gender && age) {
      const present = {
        id: uuidv4(),
        animalType,
        pol: gender,
        age,
      };

      const story = {
        action: 'Подарен',
        name: animalType,
      };
      dispatch(addPresent(present));
      dispatch(addHistory(story));
    }
    setGender('');
    setAnimalType('');
    setAge('');
  }
  return (
    <div className="cardspage">
      <div className="Navbar">
        <h3>Подарить подарок</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'space-evenly', height: '30px' }}>
          <select id="time" onChange={(e) => setAnimalType(e.target.value)}>
            <option value="" selected={animalType == '' ? 'selected' : ''} disabled hidden>Вид животного</option>
            <option value="Дикий Авимим">Дикий Авимим</option>
            <option value="Смышлёная Юрамайя">Смышлёная Юрамайя</option>
            <option value="Оранжевый Таларурус">Оранжевый Таларурус</option>
            <option value="Грациозная Иликура">Грациозная Иликура</option>
            <option value="Беспечная Ендайя">Беспечная Ендайя</option>
          </select>
          <div
            className="radio"
            style={{
              display: 'flex',
              alignItems: 'center',

            }}
          >
            <input type="radio" onChange={(e) => setGender(e.target.value)} name="gender" id="male" value="М" checked={gender == 'М' ? 'checked' : ''} />
            <p htmlFor="М">М</p>
            <input type="radio" onChange={(e) => setGender(e.target.value)} name="gender" id="female" value="Ж" checked={gender == 'Ж' ? 'checked' : ''} />
            <p htmlFor="Ж">Ж</p>
          </div>
          <input className="task" type="text" placeholder="Укажите возраст" onChange={(e) => setAge(e.target.value)} value={age} />
          <button type="submit">Добавить</button>
        </form>
      </div>
      <h3>Список подарков:</h3>
      {presents.length > 0 ? (
        <div className="cards">
          {presents.map((el) => (
            <Cards key={el.id} card={el} />
          ))}
        </div>
      ) : <p>Добавьте кого-нибудь</p>}
    </div>
  );
}
