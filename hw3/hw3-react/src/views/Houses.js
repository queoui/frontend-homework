import { Doughnut } from 'react-chartjs-2';
import { backgroundColors, borderColors } from '../utils/chartColors.js';
import { validHouse } from '../utils/validHouses.js';

const axios = require('axios');

const styles = {
  chartContainer: {
    maxWidth: '500px',
    width: '60%',
    height: '60%',
    margin: '20px auto',
  },
};

function Houses(props) {
  const { title } = props;
  const familyCount = Array(validHouse.length).fill(0);
  let data;

  // url for the Thrones API
  const url = 'https://thronesapi.com/api/v2/Characters';
  axios.get(url).then(function (response) {
    console.lot(response);
    data = response;
  });

  const houseRegex = 'House ';
  const regex = new RegExp(houseRegex, 'gm');
  data.forEach((character) => {
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
