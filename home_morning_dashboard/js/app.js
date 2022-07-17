
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Nov','Dec','Jan','Feb','Mar','Apr'],
        datasets: [{

            fill: true,
            label: 'Consume',
            data: [200,400,200,700,800,600],
            // data: [100,300,500,300,900],
            backgroundColor: [
                'rgba(0,0,0,0.1)',
            ],
            borderColor: [
                'rgba(0,0,0)',
            ],
            borderWidth: 2,
            tension: 0.5,

        },{
            fill: true,
            label: 'Collect from rain',
            data: [230,300,500,300,900,800],
            backgroundColor: [
                'rgba(255, 99, 132, 0.1)',
            ],
            borderColor: [
                'rgba(255, 99, 132)',
            ],
            borderWidth: 2,
            tension: 0.5
        }],
    },
    options: {

        plugins: {
          legend: {
              position: 'bottom',
              align: 'start',
              labels: {
                  usePointStyle: true,
              }
          }
        },
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    stepSize:200,
                }
            },

        }
    },

});


const ctx2 = document.getElementById('mySecondChart').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Nov','Dec','Jan','Feb','Mar','Apr'],
        datasets: [{
            borderRadius: 10,
            barThickness: 40,
            label: 'Regular Energy',
            data: [10000,10000,15000,8000,6000,23000],
            // data: [100,300,500,300,900],
            backgroundColor: [
                'rgba(0,0,0)',
            ],
            borderColor: [
                'rgba(0,0,0)',
            ],


        },{
            borderRadius: 10,
            barThickness: 40,
            label: 'Generated Solar Power',
            data: [16500,7500,18000,8000,15000,10000],
            backgroundColor: [
                'rgb(248,181,191)',
            ],
            borderColor: [
                'rgb(249,162,180)',
            ],

        }],
    },
    options: {
        tension: 0.2,
        elements:{
            line:{
                borderColor: [
                    'rgba(255,255,155,0.50)',
                ],
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                align: 'start',
                labels: {
                    usePointStyle: true,
                }
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    stepSize:5000,
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    },

});

