import React from 'react';
import { useSelector } from 'react-redux';

// компонент для отрисовки массива истории действий
export default function History() {
  const history = useSelector((s) => s.history);
  return (
    <div className="history">
      <h3>История действий:</h3>
      {history.length > 0 ? history?.map((el) => (
        <p>
          [
          {el.action}
          ]
          {' '}
          {el.name}
        </p>
      ))
        : <h4>Действий пока нет</h4>}
    </div>
  );
}
