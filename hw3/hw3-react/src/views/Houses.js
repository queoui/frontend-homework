import { Doughnut } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';
import { backgroundColors, borderColors } from '../utils/chartColors.js';
import { validHouse } from '../utils/validHouses.js';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const styles = {
  chartContainer: {
    maxWidth: '500px',
    width: '60%',
    height: '60%',
    margin: '20px auto',
  },
};

function Houses(props) {
  const [posts, setPosts] = useState([]);
  const { title } = props;
  const familyCount = Array(validHouse.length).fill(0);

  // url for the Thrones API
  const url = 'https://thronesapi.com/api/v2/Characters';

  useEffect(() => {
    const fetchPost = async () => {
      let response = await axios.get(url);
      setPosts(response.data);
    };
    fetchPost();
  });
  // const data = await axios.get(url).then(function (response) {
  //   console.log(response.data);
  //   return response.data;
  // });

  const houseRegex = 'House ';
  const regex = new RegExp(houseRegex, 'gm');
  posts.forEach((character) => {
    let familyName = character.family;
    if (regex.test(familyName)) {
      familyName = familyName.replace(regex, '');
    }
    if (familyName === 'Lanister') {
      familyName = 'Lannister';
    }
    if (familyName === 'Lorath') {
      familyName = 'Lorathi';
    }
    if (familyName === 'Targaryan') {
      familyName = 'Targaryen';
    }
    if (validHouse.includes(familyName)) {
      familyCount[validHouse.findIndex((index) => index === familyName)] += 1;
    }
  });

  const donutData = {
    labels: validHouse,
    datasets: [
      {
        label: 'My First Dataset',
        data: familyCount,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <section className="container">
      <h1>{title}</h1>
      <div style={styles.chartContainer}>
        <Doughnut data={donutData} options={options} />
      </div>
    </section>
  );
}

export default Houses;
