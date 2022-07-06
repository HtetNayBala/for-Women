let thirdCtx = document.getElementById('myThirdChart');
const myThirdChart = new Chart(thirdCtx, {
    type: 'doughnut',
    data: {
        labels: [
            'Green',
            'Pink',
            'Blue',
            'Purple'

        ],
        datasets: [{
            fill: true,
            data: [15, 7, 3, 8,],
            backgroundColor: [
                'rgba(5,243,36,0.5)',
                'rgba(246,192,212,0.5)',
                'rgba(164,184,243,0.5)',
                'rgba(181,89,246,0.5)',
            ],
            borderColor: [
                'rgba(255,0,0,0)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend:{
                display: true,
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                },
            },
        },

        scales: {
            y: {
                display: false,
                ticks: {
                    beginAtZero : true,
                },
                // grace : 1,
            },
            x: {
                display: false,
                grid: {
                    display: false,
                }
            }
        }
    }


});