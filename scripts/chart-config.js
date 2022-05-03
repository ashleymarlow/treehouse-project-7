// LINE CHART JAVASCRIPT 
const lineChartLabels = [
  '15',
  '20',
  '25',
  '30',
  '35',
  '40',
  '45',
  '50',
  '55',
];

const lineChartData = {
  labels: lineChartLabels,
  datasets: [{
      fill: 'origin',
      label: 'Web Traffic',
      backgroundColor: 'rgba(213, 214, 236, .5)',
      borderColor: 'rgb(116, 119, 191)',
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1800, 2200, 2000, 2200],
      tension: 0.4
  }]
};

const lineChartConfig = {
  type: 'line',
  data: lineChartData,
  options: {
    plugins:{   
        legend: {
          display: false
                },
            }
  }
};

const lineChart = new Chart(
    document.getElementById('lineChart'),
    lineChartConfig
  );

// BAR CHART JAVASCRIPT 
const barChartLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const barChartData = {
  labels: barChartLabels,
  datasets: [{
    label: 'Daily Traffic',
    data: [75, 110, 175, 125, 225, 200, 100],
    backgroundColor: [
      'rgba(116, 119, 191, 1)'
    ]
  }]
};

const barChartConfig = {
  type: 'bar',
  data: barChartData,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins:{   
      legend: {
        display: false
      },
    }
  },
};

const barChart = new Chart(
  document.getElementById('barChart'),
  barChartConfig
);


// PIE CHART JAVASCRIPT 
const pieChartData = {
  labels: [
    'Desktop',
    'Tablet',
    'Phones'
  ],
  datasets: [{
    label: 'Mobile Users',
    data: [300, 50, 100],
    backgroundColor: [
      'rgba(116, 119, 191, 1)',
      'rgba(129, 201, 143, 1)',
      'rgba(81, 182, 200, 1)'
    ],
    hoverOffset: 4
  }]
};

const pieChartConfig = {
  type: 'doughnut',
  data: pieChartData,
  options: {
    plugins:{   
      legend: {
        position: 'right'
      },
    }
  }
};

const pieChart = new Chart(
  document.getElementById('pieChart'),
  pieChartConfig
);
