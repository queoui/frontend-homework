const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

const validHouse = [
  'Targaryen',
  'Tarly',
  'Stark',
  'Baratheon',
  'Lannister',
  'Greyjoy',
  'Lanister',
  'Clegane',
  'Baelish',
  'Seaworth',
  'Tyrell',
  'Free Folk',
  'Tarth',
  'Naathi',
  'Bolton',
  'Naharis',
  'Lorathi',
  'Mormont',
  'Sparrow',
  'Viper',
  'Sand',
  'Worm',
  'Qyburn',
  'Bronn',
];
const familyCount = Array(validHouse.length).fill(0);

// url for the Thrones API
document.addEventListener('DOMContentLoaded', async () => {
  const url = 'https://thronesapi.com/api/v2/Characters';
  const response = await fetch(url);
  const data = await response.json();

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

  const renderChart = () => {
    const donutChart = document.querySelector('.donut-chart');

    new Chart(donutChart, {
      type: 'doughnut',
      data: {
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
      },
    });
  };

  renderChart();
});
