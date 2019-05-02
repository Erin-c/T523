Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
// attendance

var attendanceCanvas = document.getElementById("attendance");
var aCoaching = {
  label: 'Coaching Conversations',
  data: [0, 3, 4, 6, 9, 3, 3],
  backgroundColor: 'rgba(75, 192, 192, 0.2)',
  borderColor:'rgba(75, 192, 192, 1)',
  borderWidth: 1,
};

var aSummit = {
  label:'Summit Sessions',
  data: [9, 12, 7, 0, 0, 0, 0],
  backgroundColor: 'rgba(54, 162, 235, 0.2)',
  borderColor:'rgba(54, 162, 235, 1)',
  borderWidth: 1,
};

var attendanceCount = {
labels: ["1 session", "2 session", "3 sessions", "4 sessions", "5 sessions", "6 sessions", "More than 6 sessions"],
datasets: [aCoaching, aSummit]
};

var aChartOptions = {
legend: {
position: 'bottom'
},
title: {
display: true,
text: 'Attendance of sessions (n=28)'
},
scales: {
  xAxes: [{
      ticks: {
          beginAtZero: true,

      }
  }],
  yAxes: [{
      ticks: {
          beginAtZero: true,

      }
  }]
}
};

var barChart = new Chart(attendanceCanvas, {
type: 'bar',
data: attendanceCount,
options: aChartOptions
});


// usefulness of coaching vs. summit

var pdMethodCanvas = document.getElementById("pd-method");
var coaching = {
  label: ' Coaching Conversations',
  data: [1, 4, 4, 10, 9],
  backgroundColor: 'rgba(75, 192, 192, 0.2)',
  borderColor:'rgba(75, 192, 192, 1)',
  borderWidth: 1,
};

var summit = {
  label: 'Summit Sessions',
  data: [0, 6, 3, 7, 12],
  backgroundColor: 'rgba(54, 162, 235, 0.2)',
  borderColor:'rgba(54, 162, 235, 1)',
  borderWidth: 1,
};

var ratings = {
labels: ["1", "2", "3", "4", "5"],
datasets: [coaching, summit]
};

var chartOptions = {
legend: {
position: 'bottom'
},
title: {
display: true,
text: 'Utility of Summits Sessions versus Coaching Conversations rated on a scale of 1-5 (n=28)'
},
scales: {
  xAxes: [{
      ticks: {
          beginAtZero: true,

      }
  }]
}
};

var barChart = new Chart(pdMethodCanvas, {
type: 'bar',
data: ratings,
options: chartOptions
});

// excitement

var excitementCanvas = document.getElementById("excitement");
var eCoaching = {
  label: 'Coaching Conversations',
  data: [5, 2, 4, 10, 7],
  backgroundColor: 'rgba(75, 192, 192, 0.2)',
  borderColor:'rgba(75, 192, 192, 1)',
  borderWidth: 1,
};

var eSummit = {
  label:'Summit Sessions',
  data: [6, 2, 2, 12, 6],
  backgroundColor: 'rgba(54, 162, 235, 0.2)',
  borderColor:'rgba(54, 162, 235, 1)',
  borderWidth: 1,
};

var excitementRatings = {
labels: ["1", "2", "3", "4", "5"],
datasets: [eCoaching, eSummit]
};

var eChartOptions = {
legend: {
position: 'bottom'
},
title: {
display: true,
text: 'Excitement for next Summit Sessions and Coaching Conversations rated on a scale of 1-5 (n=28)'
},
scales: {
  xAxes: [{
      ticks: {
          beginAtZero: true,

      }
  }],
  yAxes: [{
      ticks: {
          beginAtZero: true,

      }
  }]
}
};

var barChart = new Chart(excitementCanvas, {
type: 'bar',
data: excitementRatings,
options: eChartOptions
});


// understanding of personalized learning

var personalizedLearningData = {
			labels: ['I understand it', 'I am capable of teaching it to others'],
			datasets: [{
				label: 'Strongly Agree',
				backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
				data: [17,9]
			}, {
				label: 'Agree',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
				data: [7,12]
			}, {
				label: 'Neutral',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
				data: [2,5]
			},{
				label: 'Disagree',
				backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
				data: [1,1]
			},{
				label: 'Strongly Disagree',
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
				data: [1,1]
			},]
		};

			var ctx = document.getElementById('personalizedLearning').getContext('2d');
			var personalizedstacked = new Chart(ctx, {
				type: 'horizontalBar',
				data: personalizedLearningData,
				options: {
          legend: {
          position: 'bottom'
        },
					title: {
						display: true,
						text: 'Personalized Learning (n=28)'
					},
					tooltips: {
						mode: 'index',
						intersect: false
					},
					responsive: true,
					scales: {
						xAxes: [{
							stacked: true,
						}],
						yAxes: [{
							stacked: true
						}]
					}
				}
			});

// understanding of educational equity 

var equityData = {
			labels: ['I understand it', 'I am capable of explaining it to others'],
			datasets: [{
				label: 'Strongly Agree',
				backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
				data: [13,9]
			}, {
				label: 'Agree',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
				data: [11,14]
			}, {
				label: 'Neutral',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
				data: [3,3]
			},{
				label: 'Disagree',
				backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
				data: [0,1]
			},{
				label: 'Strongly Disagree',
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
				data: [1,1]
			},]
		};

		var equityctx = document.getElementById('equitysurvey').getContext('2d');
		var equitystacked = new Chart(equityctx, {
			type: 'horizontalBar',
			data: equityData,
			options: {
        legend: {
        position: 'bottom'
      },
				title: {
					display: true,
					text: 'Educational Equity (n=28)'
				},
				tooltips: {
					mode: 'index',
					intersect: false
				},
				responsive: true,
				scales: {
					xAxes: [{
						stacked: true,
					}],
					yAxes: [{
						stacked: true
					}]
				}
			}
		});

// implementation of pilot program

var pilotData = {
			labels: ['I feel confident in launching the pilot', 'I feel supported by my team', 'I am able to implement the pilot'],
			datasets: [{
				label: 'Strongly Agree',
				backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
				data: [6,15,9]
			}, {
				label: 'Agree',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
				data: [13,12,14]
			}, {
				label: 'Neutral',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
				data: [5,0,2]
			},{
				label: 'Disagree',
				backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
				data: [1,0,1]
			},{
				label: 'Strongly Disagree',
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
				data: [3,1,2]
			},]
		};

		var pilotctx = document.getElementById('pilotsurvey').getContext('2d');
		var pilotstacked = new Chart(pilotctx, {
			type: 'horizontalBar',
			data: pilotData,
			options: {
        legend: {
        position: 'bottom'
      },
				title: {
					display: true,
					text: 'Implementing a Pilot (n=28)'
				},
				tooltips: {
					mode: 'index',
					intersect: false
				},
				responsive: true,
				scales: {
					xAxes: [{
						stacked: true,
					}],
					yAxes: [{
						stacked: true
					}]
				}
			}
		});

// Qualitative - like




