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
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
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
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

const pieChartConfig = {
  type: 'doughnut',
  data: pieChartData,
};

const pieChart = new Chart(
  document.getElementById('pieChart'),
  pieChartConfig
);
