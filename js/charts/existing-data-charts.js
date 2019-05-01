Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// reason for the personalized learning solution

var ctx = document.getElementById('reason-pilot').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Teachers', 'Students', 'Teachers and Students', 'Other'],
        datasets: [{
            label: '# of Schools',
            data: [0, 14, 2, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: { display: false },
      title: {
      display: true,
      text: 'Who or what is the reason for you are here?'
    }
    }
});


// who/what is the pilot targeted to chart

var ctx = document.getElementById('pilot-target').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Teachers', 'Students', 'Teachers and Students', 'Teachers and Technology', 'Technology and Students'],
        datasets: [{
            label: '# of Schools',
            data: [8, 2, 2, 3, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: { display: false },
      title: {
      display: true,
      text: 'Who or what is the pilot targeted to?'
      },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true,
                  max: 14
              }
          }]
      }
    }
});

// themes of equity and access chart

var ctx = document.getElementById('equity').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['None', '1 time', '2 times', '3 times', '4 times', '5 times'],
        datasets: [{
            label: '# of Schools',
            data: [4, 7, 2, 0, 2, 2],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: { display: false },
      title: {
      display: true,
      text: 'Occurences of themes around Equity and Access'
      },
      scales: {
          xAxes: [{
              ticks: {
                  beginAtZero: true,
              }
          }]
      }
    }
});

// themes of student choice chart

var ctx = document.getElementById('student-choice').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['None', '1 time', '2 times', '3 times', '4 times', '5 or more times'],
        datasets: [{
            label: '# of Schools',
            data: [2, 2, 1, 2, 3, 6],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Occurences of terms and themes around student choice'
      },
      scales: {
          xAxes: [{ticks: {beginAtZero: true}}]
      }
    }
});

