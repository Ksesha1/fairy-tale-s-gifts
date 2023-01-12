import React from 'react';
import { useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);
// компонент для аналитики и отрисовки диаграмм
export default function Diagrams() {
  const presents = useSelector((s) => s?.presents);
  const girls = [];
  const boys = [];
  const label = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // фильтрация по половому признаку
  const arrG = presents.filter((el) => el.pol == 'Ж');
  const arrB = presents.filter((el) => el.pol == 'М');
  // создание массивов с данными о кол-ве подарков относитьельно возраста
  for (let i = 0; i < label.length; i++) {
    girls.push(arrG.filter((el) => el.age == label[i]));
    boys.push(arrB.filter((el) => el.age == label[i]));
  }
  // данные для гистограммы
  const barChartData = {
    labels: label,
    datasets: [
      {
        data: boys.map((el) => el.length),
        label: 'Мальчики',
        borderColor: '#3333ff',
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
        fill: true,
      },
      {
        data: girls.map((el) => el.length),
        label: 'Девочки',
        borderColor: '#ff3333',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        fill: true,
      },
    ],
  };
  // расчет популярности видов животных
  const resultData = [];
  const arr = presents.map((el) => (el.animalType)).sort();
  let sum = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      sum += 1;
    } else {
      resultData.push(sum);
      sum = 1;
    }
  }
  // данные для круговой диаграммы
  const pieChartData = {
    labels: presents.map((el) => (el.animalType)).filter((item, index,arr) => arr.indexOf(item) === index).sort(),
    datasets: [{
      data: resultData,
      label: 'Количество',
      backgroundColor: ['#2FDE00', '#00A6B4', '#ff6600','#ff00ff','#f08080'],
      hoverBackgroundColor: ['#175000', '#003350', '#993d00',],
    }],
  };
  // отрисовка диаграмм
  const options = {
    responsive: true,
    aspectRatio: 2.3,
    plugins: {
      legend: {
        position: 'left',
        display: true,
      },
    },
  };
  return (
    <>
      <div id="d_first">
        <h4>Распределение по полу и возрасту</h4>
        <Bar
          options={options}
          data={barChartData}
        />
      </div>
      <div id="d_second">
        <h4>Распределение по сказочным животным</h4>
        {resultData.length > 0
          ? (
            <Pie
              options={options}
              data={pieChartData}
            />
          )

          : <p style={{ paddingLeft: '35%' }}>Пока нет данных</p>}
      </div>
    </>
  );
}
