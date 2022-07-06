let secondCtx = document.getElementById('mySecondChart');
const mySecondChart = new Chart(secondCtx, {
    type: 'line',
    data: {
        labels: [1,2,3,4,5,6,7],
        datasets: [{
            fill: true,
            data: [22, 7, 3, 8, 5,3,10],
            backgroundColor: [
                'rgba(5,243,36,0.5)',
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
                display: false,
            }
        },
        scales: {
            y: {
                display: true,
                beginAtZero : true,
                // grace : 1,
            },
            x: {
                grid: {
                    display: false,
                }
            }
        }
    }


});