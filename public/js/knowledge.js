const HTMLchart = document.getElementById("htmlChart");

let lineChart = new Chart(HTMLchart, {
    type: 'doughnut',
    data: {
        labels: ["HTML", ""],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
                '#FFA500',
                'rgba(156, 25, 237, 0)'
                ],
            borderColor: 'rgba(255, 99, 132, 0)',
            data: [100, 0]
            }]
        },
    options: {
        cutoutPercentage: 85
    }
});

const CSSchart = document.getElementById("cssChart");

let cssChart = new Chart(CSSchart, {
    type: 'pie',
    data: {
        labels: ["CSS", ""],
        datasets: [{
            label: "CSS Knowledge",
            backgroundColor: [
                '#5592f4',
                'rgba(0,0,0,0)'
                ],
            borderColor: 'rgba(0,0,0,0)',
            data: [90, 10]
        }]
    },
    options: {
        cutoutPercentage: 85
    }
})

const JSChart = document.getElementById("jsChart");

let jsChart = new Chart(JSChart, {
    type: 'pie',
    data: {
        labels: ["Javascript", ""],
        datasets: [{
            label: "Javascript Knowledge",
            backgroundColor: [
                '#ff1616',
                'rgba(0,0,0,0)'
                ],
            borderColor: 'rgba(0,0,0,0)',
            data: [85, 15]
        }]
    },
    options: {
        cutoutPercentage: 85
    }
})