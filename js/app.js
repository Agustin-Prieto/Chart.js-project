let myChart = document.getElementById('myChart').getContext('2d');

let massPopChart = new Chart(myChart, {
  type: 'bar', // bar, horisontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ['Buenos Aires', 'Cordoba', 'Rosario', 'La Plata', 'San Miguel de Tucuman', 'Mar del Plata'],
    datasets: [{
      label: 'Population',
      data: [
        2890151,
        1429604,
        1400000,
        699523,
        694327,
        664892,
      ],
      backgroundColor: [
        '#45CCFF',
        '#83F54B',
        '#FFD432',
        '#E84B30',
        '#B243FF',
        '#A54D3A',
      ]
    }]
  },
  options: {}
})
