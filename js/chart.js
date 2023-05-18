const ctx = document.getElementById('lineChart').getContext('2d');
const myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    datasets: [
      {
        label: 'Last week',
        backgroundColor: 'rgba(175, 147, 191, 1)',
        borderColor: 'rgb(99, 24, 140)',
        data: [3000, 4000, 2000, 5000, 8000, 9000, 2000],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

// Bar chart

const ctx2 = document.getElementById('barChart');

new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: 'rgba(168, 56, 142, 1)',
        borderColor: 'rgb(168, 56, 142)',
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Doughnut chart

const ctx3 = document.getElementById('doughnutChart');

new Chart(ctx3, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    }
  },
});

// Pie chart

const ctx4 = document.getElementById('pieChart');

new Chart(ctx4, {
  type: 'pie',
  data: {
    labels: ['Green', 'Blue', 'Yellow'],
    datasets: [
      {
        labels: ['Red', 'Blue', 'Yellow'],
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(2, 102, 6)',
          'rgb(56, 49, 103)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  },
});
