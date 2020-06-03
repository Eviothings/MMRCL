 <!--   //civil 1 scurve--> 
            $.ajax({

                url: "http://eviothings.in:1880/mmrcl/progress/civil/Phase 1",
                type: "GET",
                success: function (array) {
                    var Month = [];
                    var Planned = [];
                    var Actual = [];
                    var Certified = [];
                    for (var i in array) {

                            Month.push(array[i].Month);

                           if (array[i].Planned != 0 ) {

                                Planned.push(array[i].Planned);

                            }

                            else {

                                Planned.push("NaN");

                            }

                            if (array[i].Actual != 0) {

                                Actual.push(array[i].Actual);

                            }

                            else {

                                Actual.push("NaN");

                            }

                            if (array[i].Certified != 0) {

                                Certified.push(array[i].Certified);

                            }

                            else {

                                Certified.push("NaN");

                            }
                        document.getElementById("cp1").innerHTML = Planned[28]
                        document.getElementById("ca1").innerHTML = Actual[28]//Math.max(...Actual)
                        document.getElementById("cc1").innerHTML = Certified[28]//Math.max(...Certified)
  
                    }
                        
                    
                    console.log(Planned[1]);
                    var barChartCanvas = $('#civilscurv1').get(0).getContext('2d')
                    var barChartOptions = {
                        responsive: true,
                        maintainAspectRatio: true,
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }],
                            yAxes: [{
            ticks: {
                max: 100,
                min: 0,
                stepSize: 20
            }
        }]
                        },
                        tooltips: {
                            mode: 'label'
                        },

                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },

                    }

                    var barChart = new Chart(barChartCanvas, {
                        type: 'line',
                        data: {
                            labels: Month,
                            datasets: [
                               
                                {
                                    label: 'Planned',
                                    fill: false,
                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',

                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Planned
                                },
                                 {
                                    label: 'Actual',
                                    fill: false,
                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Actual
                                },
                                {
                                    label: 'Certified',
                                    fill: false,
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Certified
                                }

                            ]
                        },
                        options: barChartOptions
                    })

                }
            });
            Chart.defaults.global.legend.display = false;        
        
        <!--   //civil 1  budget -->
            $.ajax({
                url: "http://eviothings.in:1880/mmrcl/financials/civil/Phase 1",
                type: "GET",
                success: function (data) {
                    var DateValue = [];
                    var INR = [];
                    var USD = [];
                    var EURO = [];
                    for (var i in data) {
                        DateValue.push(data[i].DateValue);
                        INR.push(data[i].INR);
                        USD.push(data[i].USD);
                        EURO.push(data[i].EURO);
                    }
                    console.log(DateValue);
                    console.log(INR);
                    console.log(USD);
                    var Datewise= $('#civilbudget1').get(0).getContext('2d')
                    var DatewiseOptions = {
                        responsive: true,
                        maintainAspectRatio: true,
                        legend: {
                            display: false
                        },
                        scales: {
                            xAxes: [{
                                stacked: true,
                            }],
                            yAxes: [{
                                stacked: true
                            }]
                        }, plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                    }

                    var DatewisebarChart = new Chart(Datewise, {
                        type: 'horizontalBar',
                        data: {
                            labels: DateValue,
                            datasets: [
                                {
                                    label: 'INR',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(0, 145, 218)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 145, 218)',

                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',
                                    data: INR
                                },
                                {
                                    label: 'USD',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255,0,0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255,0,0)',

                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    data: USD
                                },
                                {
                                    label: 'EURO',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255, 192, 0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255, 192, 0)',
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    data: EURO
                                }

                            ]
                        },
                        options: DatewiseOptions
                    })

                }
            });


   <!--   //civil 2 scurve--> 
            $.ajax({

                url: "http://eviothings.in:1880/mmrcl/progress/civil/Phase 2",
                type: "GET",
                success: function (array) {
                    var Month = [];
                    var Planned = [];
                    var Actual = [];
                    var Certified = [];
                    for (var i in array) {

                            Month.push(array[i].Month);

                           if (array[i].Planned != 0 ) {

                                Planned.push(array[i].Planned);

                            }

                            else {

                                Planned.push("NaN");

                            }

                            if (array[i].Actual != 0) {

                                Actual.push(array[i].Actual);

                            }

                            else {

                                Actual.push("NaN");

                            }

                            if (array[i].Certified != 0) {

                                Certified.push(array[i].Certified);

                            }

                            else {

                                Certified.push("NaN");

                            }
                        document.getElementById("cp2").innerHTML = Planned[28]
                        document.getElementById("ca2").innerHTML = Actual[28]//Math.max(...Actual)
                        document.getElementById("cc2").innerHTML = Certified[28]//Math.max(...Certified)
  
                    }
                        
                    
                    console.log(Planned[1]);
                    var barChartCanvas = $('#civilscurv2').get(0).getContext('2d')
                    var barChartOptions = {
                        responsive: true,
                        maintainAspectRatio: true,
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }],
                            yAxes: [{
            ticks: {
                max: 100,
                min: 0,
                stepSize: 20
            }
        }]
                        },
                        tooltips: {
                            mode: 'label'
                        },

                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },

                    }

                    var barChart = new Chart(barChartCanvas, {
                        type: 'line',
                        data: {
                            labels: Month,
                            datasets: [
                               
                                {
                                    label: 'Planned',
                                    fill: false,
                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',

                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Planned
                                },
                                 {
                                    label: 'Actual',
                                    fill: false,
                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Actual
                                },
                                {
                                    label: 'Certified',
                                    fill: false,
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Certified
                                }

                            ]
                        },
                        options: barChartOptions
                    })

                }
            });
            Chart.defaults.global.legend.display = false;        
        
        <!--   //civil 2  budget -->
            $.ajax({
                url: "http://eviothings.in:1880/mmrcl/financials/civil/Phase 1",
                type: "GET",
                success: function (data) {
                    var DateValue = [];
                    var INR = [];
                    var USD = [];
                    var EURO = [];
                    for (var i in data) {
                        DateValue.push(data[i].DateValue);
                        INR.push(data[i].INR);
                        USD.push(data[i].USD);
                        EURO.push(data[i].EURO);
                    }
                    console.log(DateValue);
                    console.log(INR);
                    console.log(USD);
                    var Datewise= $('#civilbudget2').get(0).getContext('2d')
                    var DatewiseOptions = {
                        responsive: true,
                        maintainAspectRatio: true,
                        legend: {
                            display: false
                        },
                        scales: {
                            xAxes: [{
                                stacked: true,
                            }],
                            yAxes: [{
                                stacked: true
                            }]
                        }, plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                    }

                    var DatewisebarChart = new Chart(Datewise, {
                        type: 'horizontalBar',
                        data: {
                            labels: DateValue,
                            datasets: [
                                {
                                    label: 'INR',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(0, 145, 218)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 145, 218)',

                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',
                                    data: INR
                                },
                                {
                                    label: 'USD',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255,0,0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255,0,0)',

                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    data: USD
                                },
                                {
                                    label: 'EURO',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255, 192, 0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255, 192, 0)',
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    data: EURO
                                }

                            ]
                        },
                        options: DatewiseOptions
                    })

                }
            });

 <!--   //civil 3 scurve--> 
            $.ajax({

                url: "http://eviothings.in:1880/mmrcl/progress/civil/Phase 3",
                type: "GET",
                success: function (array) {
                    var Month = [];
                    var Planned = [];
                    var Actual = [];
                    var Certified = [];
                    for (var i in array) {

                            Month.push(array[i].Month);

                           if (array[i].Planned != 0 ) {

                                Planned.push(array[i].Planned);

                            }

                            else {

                                Planned.push("NaN");

                            }

                            if (array[i].Actual != 0) {

                                Actual.push(array[i].Actual);

                            }

                            else {

                                Actual.push("NaN");

                            }

                            if (array[i].Certified != 0) {

                                Certified.push(array[i].Certified);

                            }

                            else {

                                Certified.push("NaN");

                            }
                        document.getElementById("cp3").innerHTML = Planned[28]
                        document.getElementById("ca3").innerHTML = Actual[28]//Math.max(...Actual)
                        document.getElementById("cc3").innerHTML = Certified[28]//Math.max(...Certified)
  
                    }
                        
                    
                    console.log(Planned[1]);
                    var barChartCanvas = $('#civilscurv3').get(0).getContext('2d')
                    var barChartOptions = {
                        responsive: true,
                        maintainAspectRatio: true,
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }],
                            yAxes: [{
            ticks: {
                max: 100,
                min: 0,
                stepSize: 20
            }
        }]
                        },
                        tooltips: {
                            mode: 'label'
                        },

                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },

                    }

                    var barChart = new Chart(barChartCanvas, {
                        type: 'line',
                        data: {
                            labels: Month,
                            datasets: [
                               
                                {
                                    label: 'Planned',
                                    fill: false,
                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',

                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Planned
                                },
                                 {
                                    label: 'Actual',
                                    fill: false,
                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Actual
                                },
                                {
                                    label: 'Certified',
                                    fill: false,
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Certified
                                }

                            ]
                        },
                        options: barChartOptions
                    })

                }
            });
            Chart.defaults.global.legend.display = false;        
        
        <!--   //civil 3  budget -->
            $.ajax({
                url: "http://eviothings.in:1880/mmrcl/financials/civil/Phase 3",
                type: "GET",
                success: function (data) {
                    var DateValue = [];
                    var INR = [];
                    var USD = [];
                    var EURO = [];
                    for (var i in data) {
                        DateValue.push(data[i].DateValue);
                        INR.push(data[i].INR);
                        USD.push(data[i].USD);
                        EURO.push(data[i].EURO);
                    }
                    console.log(DateValue);
                    console.log(INR);
                    console.log(USD);
                    var Datewise= $('#civilbudget3').get(0).getContext('2d')
                    var DatewiseOptions = {
                        responsive: true,
                        maintainAspectRatio: true,
                        legend: {
                            display: false
                        },
                        scales: {
                            xAxes: [{
                                stacked: true,
                            }],
                            yAxes: [{
                                stacked: true
                            }]
                        }, plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                    }

                    var DatewisebarChart = new Chart(Datewise, {
                        type: 'horizontalBar',
                        data: {
                            labels: DateValue,
                            datasets: [
                                {
                                    label: 'INR',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(0, 145, 218)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 145, 218)',

                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',
                                    data: INR
                                },
                                {
                                    label: 'USD',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255,0,0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255,0,0)',

                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    data: USD
                                },
                                {
                                    label: 'EURO',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255, 192, 0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255, 192, 0)',
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    data: EURO
                                }

                            ]
                        },
                        options: DatewiseOptions
                    })

                }
            });

 <!--   //civil 4 scurve--> 
            $.ajax({

                url: "http://eviothings.in:1880/mmrcl/progress/civil/Phase 4",
                type: "GET",
                success: function (array) {
                    var Month = [];
                    var Planned = [];
                    var Actual = [];
                    var Certified = [];
                    for (var i in array) {

                            Month.push(array[i].Month);

                           if (array[i].Planned != 0 ) {

                                Planned.push(array[i].Planned);

                            }

                            else {

                                Planned.push("NaN");

                            }

                            if (array[i].Actual != 0) {

                                Actual.push(array[i].Actual);

                            }

                            else {

                                Actual.push("NaN");

                            }

                            if (array[i].Certified != 0) {

                                Certified.push(array[i].Certified);

                            }

                            else {

                                Certified.push("NaN");

                            }
                        document.getElementById("cp4").innerHTML = Planned[28]
                        document.getElementById("ca4").innerHTML = Actual[28]//Math.max(...Actual)
                        document.getElementById("cc4").innerHTML = Certified[28]//Math.max(...Certified)
  
                    }
                        
                    
                    console.log(Planned[1]);
                    var barChartCanvas = $('#civilscurv4').get(0).getContext('2d')
                    var barChartOptions = {
                        responsive: true,
                        maintainAspectRatio: true,
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }],
                            yAxes: [{
            ticks: {
                max: 100,
                min: 0,
                stepSize: 20
            }
        }]
                        },
                        tooltips: {
                            mode: 'label'
                        },

                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },

                    }

                    var barChart = new Chart(barChartCanvas, {
                        type: 'line',
                        data: {
                            labels: Month,
                            datasets: [
                               
                                {
                                    label: 'Planned',
                                    fill: false,
                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',

                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Planned
                                },
                                 {
                                    label: 'Actual',
                                    fill: false,
                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Actual
                                },
                                {
                                    label: 'Certified',
                                    fill: false,
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Certified
                                }

                            ]
                        },
                        options: barChartOptions
                    })

                }
            });
            Chart.defaults.global.legend.display = false;        
        
        <!--   //civil 4  budget -->
            $.ajax({
                url: "http://eviothings.in:1880/mmrcl/financials/civil/Phase 4",
                type: "GET",
                success: function (data) {
                    var DateValue = [];
                    var INR = [];
                    var USD = [];
                    var EURO = [];
                    for (var i in data) {
                        DateValue.push(data[i].DateValue);
                        INR.push(data[i].INR);
                        USD.push(data[i].USD);
                        EURO.push(data[i].EURO);
                    }
                    console.log(DateValue);
                    console.log(INR);
                    console.log(USD);
                    var Datewise= $('#civilbudget4').get(0).getContext('2d')
                    var DatewiseOptions = {
                        responsive: true,
                        maintainAspectRatio: true,
                        legend: {
                            display: false
                        },
                        scales: {
                            xAxes: [{
                                stacked: true,
                            }],
                            yAxes: [{
                                stacked: true
                            }]
                        }, plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                    }

                    var DatewisebarChart = new Chart(Datewise, {
                        type: 'horizontalBar',
                        data: {
                            labels: DateValue,
                            datasets: [
                                {
                                    label: 'INR',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(0, 145, 218)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 145, 218)',

                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',
                                    data: INR
                                },
                                {
                                    label: 'USD',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255,0,0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255,0,0)',

                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    data: USD
                                },
                                {
                                    label: 'EURO',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255, 192, 0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255, 192, 0)',
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    data: EURO
                                }

                            ]
                        },
                        options: DatewiseOptions
                    })

                }
            });

 <!--   //civil 5 scurve--> 
            $.ajax({

                url: "http://eviothings.in:1880/mmrcl/progress/civil/Phase 5",
                type: "GET",
                success: function (array) {
                    var Month = [];
                    var Planned = [];
                    var Actual = [];
                    var Certified = [];
                    for (var i in array) {

                            Month.push(array[i].Month);

                           if (array[i].Planned != 0 ) {

                                Planned.push(array[i].Planned);

                            }

                            else {

                                Planned.push("NaN");

                            }

                            if (array[i].Actual != 0) {

                                Actual.push(array[i].Actual);

                            }

                            else {

                                Actual.push("NaN");

                            }

                            if (array[i].Certified != 0) {

                                Certified.push(array[i].Certified);

                            }

                            else {

                                Certified.push("NaN");

                            }
                        document.getElementById("cp5").innerHTML = Planned[28]
                        document.getElementById("ca5").innerHTML = Actual[28]//Math.max(...Actual)
                        document.getElementById("cc5").innerHTML = Certified[28]//Math.max(...Certified)
  
                    }
                        
                    
                    console.log(Planned[1]);
                    var barChartCanvas = $('#civilscurv5').get(0).getContext('2d')
                    var barChartOptions = {
                        responsive: true,
                        maintainAspectRatio: true,
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }],
                            yAxes: [{
            ticks: {
                max: 100,
                min: 0,
                stepSize: 20
            }
        }]
                        },
                        tooltips: {
                            mode: 'label'
                        },

                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },

                    }

                    var barChart = new Chart(barChartCanvas, {
                        type: 'line',
                        data: {
                            labels: Month,
                            datasets: [
                               
                                {
                                    label: 'Planned',
                                    fill: false,
                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',

                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Planned
                                },
                                 {
                                    label: 'Actual',
                                    fill: false,
                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Actual
                                },
                                {
                                    label: 'Certified',
                                    fill: false,
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Certified
                                }

                            ]
                        },
                        options: barChartOptions
                    })

                }
            });
            Chart.defaults.global.legend.display = false;        
        
        <!--   //civil 5  budget -->
            $.ajax({
                url: "http://eviothings.in:1880/mmrcl/financials/civil/Phase 5",
                type: "GET",
                success: function (data) {
                    var DateValue = [];
                    var INR = [];
                    var USD = [];
                    var EURO = [];
                    for (var i in data) {
                        DateValue.push(data[i].DateValue);
                        INR.push(data[i].INR);
                        USD.push(data[i].USD);
                        EURO.push(data[i].EURO);
                    }
                    console.log(DateValue);
                    console.log(INR);
                    console.log(USD);
                    var Datewise= $('#civilbudget5').get(0).getContext('2d')
                    var DatewiseOptions = {
                        responsive: true,
                        maintainAspectRatio: true,
                        legend: {
                            display: false
                        },
                        scales: {
                            xAxes: [{
                                stacked: true,
                            }],
                            yAxes: [{
                                stacked: true
                            }]
                        }, plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                    }

                    var DatewisebarChart = new Chart(Datewise, {
                        type: 'horizontalBar',
                        data: {
                            labels: DateValue,
                            datasets: [
                                {
                                    label: 'INR',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(0, 145, 218)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 145, 218)',

                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',
                                    data: INR
                                },
                                {
                                    label: 'USD',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255,0,0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255,0,0)',

                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    data: USD
                                },
                                {
                                    label: 'EURO',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255, 192, 0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255, 192, 0)',
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    data: EURO
                                }

                            ]
                        },
                        options: DatewiseOptions
                    })

                }
            });

 <!--   //civil 6 scurve--> 
            $.ajax({

                url: "http://eviothings.in:1880/mmrcl/progress/civil/Phase 6",
                type: "GET",
                success: function (array) {
                    var Month = [];
                    var Planned = [];
                    var Actual = [];
                    var Certified = [];
                    for (var i in array) {

                            Month.push(array[i].Month);

                           if (array[i].Planned != 0 ) {

                                Planned.push(array[i].Planned);

                            }

                            else {

                                Planned.push("NaN");

                            }

                            if (array[i].Actual != 0) {

                                Actual.push(array[i].Actual);

                            }

                            else {

                                Actual.push("NaN");

                            }

                            if (array[i].Certified != 0) {

                                Certified.push(array[i].Certified);

                            }

                            else {

                                Certified.push("NaN");

                            }
                        document.getElementById("cp6").innerHTML = Planned[28]
                        document.getElementById("ca6").innerHTML = Actual[28]//Math.max(...Actual)
                        document.getElementById("cc6").innerHTML = Certified[28]//Math.max(...Certified)
  
                    }
                        
                    
                    console.log(Planned[1]);
                    var barChartCanvas = $('#civilscurv6').get(0).getContext('2d')
                    var barChartOptions = {
                        responsive: true,
                        maintainAspectRatio: true,
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }],
                            yAxes: [{
            ticks: {
                max: 100,
                min: 0,
                stepSize: 20
            }
        }]
                        },
                        tooltips: {
                            mode: 'label'
                        },

                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },

                    }

                    var barChart = new Chart(barChartCanvas, {
                        type: 'line',
                        data: {
                            labels: Month,
                            datasets: [
                               
                                {
                                    label: 'Planned',
                                    fill: false,
                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',

                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Planned
                                },
                                 {
                                    label: 'Actual',
                                    fill: false,
                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Actual
                                },
                                {
                                    label: 'Certified',
                                    fill: false,
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Certified
                                }

                            ]
                        },
                        options: barChartOptions
                    })

                }
            });
            Chart.defaults.global.legend.display = false;        
        
        <!--   //civil 6  budget -->
            $.ajax({
                url: "http://eviothings.in:1880/mmrcl/financials/civil/Phase 6",
                type: "GET",
                success: function (data) {
                    var DateValue = [];
                    var INR = [];
                    var USD = [];
                    var EURO = [];
                    for (var i in data) {
                        DateValue.push(data[i].DateValue);
                        INR.push(data[i].INR);
                        USD.push(data[i].USD);
                        EURO.push(data[i].EURO);
                    }
                    console.log(DateValue);
                    console.log(INR);
                    console.log(USD);
                    var Datewise= $('#civilbudget6').get(0).getContext('2d')
                    var DatewiseOptions = {
                        responsive: true,
                        maintainAspectRatio: true,
                        legend: {
                            display: false
                        },
                        scales: {
                            xAxes: [{
                                stacked: true,
                            }],
                            yAxes: [{
                                stacked: true
                            }]
                        }, plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                    }

                    var DatewisebarChart = new Chart(Datewise, {
                        type: 'horizontalBar',
                        data: {
                            labels: DateValue,
                            datasets: [
                                {
                                    label: 'INR',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(0, 145, 218)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 145, 218)',

                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',
                                    data: INR
                                },
                                {
                                    label: 'USD',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255,0,0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255,0,0)',

                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    data: USD
                                },
                                {
                                    label: 'EURO',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255, 192, 0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255, 192, 0)',
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    data: EURO
                                }

                            ]
                        },
                        options: DatewiseOptions
                    })

                }
            });

 <!--   //civil 7 scurve--> 
            $.ajax({

                url: "http://eviothings.in:1880/mmrcl/progress/civil/Phase 7",
                type: "GET",
                success: function (array) {
                    var Month = [];
                    var Planned = [];
                    var Actual = [];
                    var Certified = [];
                    for (var i in array) {

                            Month.push(array[i].Month);

                           if (array[i].Planned != 0 ) {

                                Planned.push(array[i].Planned);

                            }

                            else {

                                Planned.push("NaN");

                            }

                            if (array[i].Actual != 0) {

                                Actual.push(array[i].Actual);

                            }

                            else {

                                Actual.push("NaN");

                            }

                            if (array[i].Certified != 0) {

                                Certified.push(array[i].Certified);

                            }

                            else {

                                Certified.push("NaN");

                            }
                        document.getElementById("cp7").innerHTML = Planned[28]
                        document.getElementById("ca7").innerHTML = Actual[28]//Math.max(...Actual)
                        document.getElementById("cc7").innerHTML = Certified[28]//Math.max(...Certified)
  
                    }
                        
                    
                    console.log(Planned[1]);
                    var barChartCanvas = $('#civilscurv7').get(0).getContext('2d')
                    var barChartOptions = {
                        responsive: true,
                        maintainAspectRatio: true,
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }],
                            yAxes: [{
            ticks: {
                max: 100,
                min: 0,
                stepSize: 20
            }
        }]
                        },
                        tooltips: {
                            mode: 'label'
                        },

                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },

                    }

                    var barChart = new Chart(barChartCanvas, {
                        type: 'line',
                        data: {
                            labels: Month,
                            datasets: [
                               
                                {
                                    label: 'Planned',
                                    fill: false,
                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',

                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Planned
                                },
                                 {
                                    label: 'Actual',
                                    fill: false,
                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Actual
                                },
                                {
                                    label: 'Certified',
                                    fill: false,
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Certified
                                }

                            ]
                        },
                        options: barChartOptions
                    })

                }
            });
            Chart.defaults.global.legend.display = false;        
        
        <!--   //civil 7  budget -->
            $.ajax({
                url: "http://eviothings.in:1880/mmrcl/financials/civil/Phase 7",
                type: "GET",
                success: function (data) {
                    var DateValue = [];
                    var INR = [];
                    var USD = [];
                    var EURO = [];
                    for (var i in data) {
                        DateValue.push(data[i].DateValue);
                        INR.push(data[i].INR);
                        USD.push(data[i].USD);
                        EURO.push(data[i].EURO);
                    }
                    console.log(DateValue);
                    console.log(INR);
                    console.log(USD);
                    var Datewise= $('#civilbudget7').get(0).getContext('2d')
                    var DatewiseOptions = {
                        responsive: true,
                        maintainAspectRatio: true,
                        legend: {
                            display: false
                        },
                        scales: {
                            xAxes: [{
                                stacked: true,
                            }],
                            yAxes: [{
                                stacked: true
                            }]
                        }, plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                    }

                    var DatewisebarChart = new Chart(Datewise, {
                        type: 'horizontalBar',
                        data: {
                            labels: DateValue,
                            datasets: [
                                {
                                    label: 'INR',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(0, 145, 218)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 145, 218)',

                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',
                                    data: INR
                                },
                                {
                                    label: 'USD',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255,0,0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255,0,0)',

                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    data: USD
                                },
                                {
                                    label: 'EURO',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255, 192, 0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255, 192, 0)',
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    data: EURO
                                }

                            ]
                        },
                        options: DatewiseOptions
                    })

                }
            });

 <!--   //civil 8 scurve--> 
            $.ajax({

                url: "http://eviothings.in:1880/mmrcl/progress/civil/Phase 8",
                type: "GET",
                success: function (array) {
                    var Month = [];
                    var Planned = [];
                    var Actual = [];
                    var Certified = [];
                    for (var i in array) {

                            Month.push(array[i].Month);

                           if (array[i].Planned != 0 ) {

                                Planned.push(array[i].Planned);

                            }

                            else {

                                Planned.push("NaN");

                            }

                            if (array[i].Actual != 0) {

                                Actual.push(array[i].Actual);

                            }

                            else {

                                Actual.push("NaN");

                            }

                            if (array[i].Certified != 0) {

                                Certified.push(array[i].Certified);

                            }

                            else {

                                Certified.push("NaN");

                            }
                        document.getElementById("cp8").innerHTML = Planned[28]
                        document.getElementById("ca8").innerHTML = Actual[28]//Math.max(...Actual)
                        document.getElementById("cc8").innerHTML = Certified[28]//Math.max(...Certified)
  
                    }
                        
                    
                    console.log(Planned[1]);
                    var barChartCanvas = $('#civilscurv8').get(0).getContext('2d')
                    var barChartOptions = {
                        responsive: true,
                        maintainAspectRatio: true,
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }],
                            yAxes: [{
            ticks: {
                max: 100,
                min: 0,
                stepSize: 20
            }
        }]
                        },
                        tooltips: {
                            mode: 'label'
                        },

                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },

                    }

                    var barChart = new Chart(barChartCanvas, {
                        type: 'line',
                        data: {
                            labels: Month,
                            datasets: [
                               
                                {
                                    label: 'Planned',
                                    fill: false,
                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',

                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Planned
                                },
                                 {
                                    label: 'Actual',
                                    fill: false,
                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Actual
                                },
                                {
                                    label: 'Certified',
                                    fill: false,
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    lineTension: 0.4,
                                    pointRadius: 1.5,
                                    data: Certified
                                }

                            ]
                        },
                        options: barChartOptions
                    })

                }
            });
            Chart.defaults.global.legend.display = false;        
        
        <!--   //civil 8  budget -->
            $.ajax({
                url: "http://eviothings.in:1880/mmrcl/financials/civil/Phase 8",
                type: "GET",
                success: function (data) {
                    var DateValue = [];
                    var INR = [];
                    var USD = [];
                    var EURO = [];
                    for (var i in data) {
                        DateValue.push(data[i].DateValue);
                        INR.push(data[i].INR);
                        USD.push(data[i].USD);
                        EURO.push(data[i].EURO);
                    }
                    console.log(DateValue);
                    console.log(INR);
                    console.log(USD);
                    var Datewise= $('#civilbudget8').get(0).getContext('2d')
                    var DatewiseOptions = {
                        responsive: true,
                        maintainAspectRatio: true,
                        legend: {
                            display: false
                        },
                        scales: {
                            xAxes: [{
                                stacked: true,
                            }],
                            yAxes: [{
                                stacked: true
                            }]
                        }, plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                    }

                    var DatewisebarChart = new Chart(Datewise, {
                        type: 'horizontalBar',
                        data: {
                            labels: DateValue,
                            datasets: [
                                {
                                    label: 'INR',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(0, 145, 218)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 145, 218)',

                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',
                                    data: INR
                                },
                                {
                                    label: 'USD',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255,0,0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255,0,0)',

                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    data: USD
                                },
                                {
                                    label: 'EURO',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255, 192, 0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255, 192, 0)',
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    data: EURO
                                }

                            ]
                        },
                        options: DatewiseOptions
                    })

                }
            });

 
    
       