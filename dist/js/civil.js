 <!--   //civil all scurve--> 
            $.ajax({

                url: "http://eviothings.in:1880/mmrcl/progress/civil/Phase all",
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
                        document.getElementById("cp").innerHTML = Planned[28]
                        document.getElementById("ca").innerHTML = Actual[28]//Math.max(...Actual)
                        document.getElementById("cc").innerHTML = Certified[28]//Math.max(...Certified)
  
                    }
                        
                    
                    console.log(Planned[1]);
                    var barChartCanvas = $('#civilscurv').get(0).getContext('2d')
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
                                    backgroundColor: 'rgb(0, 0, 255)',
                                    borderColor: 'rgb(0, 0, 255)',

                                    lineTension: 0.4,
                                    pointRadius: 0.4,
                                    data: Planned
                                },
                                 {
                                    label: 'Actual',
                                    fill: false,
                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    lineTension: 0.4,
                                    pointRadius: 0.4,
                                    data: Actual
                                },
                                {
                                    label: 'Certified',
                                    fill: false,
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    lineTension: 0.4,
                                    pointRadius: 0.4,
                                    data: Certified
                                }

                            ]
                        },
                        options: barChartOptions
                    })

                }
            });
            Chart.defaults.global.legend.display = false;        
        
        <!--   //civil all budget -->
            $.ajax({
                url: "http://eviothings.in:1880/mmrcl/financials/civil/Phase all",
                type: "GET",
                success: function (data) {
                    //console.log(data);
                    var Name = [];
                    var Contract_Value = [];
                    var Jan_20 = [];
                    var obj = JSON.parse(data);
                    
                    
                    for (var i in obj) {
                        //console.log(obj[i].Name);                        
                        Name.push(obj[i].Name);
                        Contract_Value.push(obj[i].Contract_Value);
                        Jan_20.push(obj[i].Jan_20);
                     
                    }
                    var Namewise= $('#civilbudget').get(0).getContext('2d')
                    var NamewiseOptions = {
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

                    var NamewisebarChart = new Chart(Namewise, {
                        type: 'horizontalBar',
                        data: {
                            labels: Name,
                            datasets: [
                               {
                                    label: 'Jan_20',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255, 192, 0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255, 192, 0)',
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    data: Jan_20
                                }
, {
                                    label: 'Contract_Value',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(0, 0, 255)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 0, 255)',

                                    backgroundColor: 'rgb(0, 0, 255)',
                                    borderColor: 'rgb(0, 0, 255)',
                                    data: Contract_Value
                                }
                    
                                
                            ]
                        },
                        options: NamewiseOptions
                    })

                }
            });

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
                                    backgroundColor: 'rgb(0, 0, 255)',
                                    borderColor: 'rgb(0, 0, 255)',

                                    lineTension: 0.4,
                                    pointRadius: 0.4,
                                    data: Planned
                                },
                                 {
                                    label: 'Actual',
                                    fill: false,
                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    lineTension: 0.4,
                                    pointRadius: 0.4,
                                    data: Actual
                                },
                                {
                                    label: 'Certified',
                                    fill: false,
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    lineTension: 0.4,
                                    pointRadius: 0.4,
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
                    //console.log(data);
                    var Name = [];
                    var Contract_Value = [];
                    var Jan_20 = [];
                    var obj = JSON.parse(data);
                    
                    
                    for (var i in obj) {
                        //console.log(obj[i].Name);                        
                        Name.push(obj[i].Name);
                        Contract_Value.push(obj[i].Contract_Value);
                        Jan_20.push(obj[i].Jan_20);
                     
                    }
                    var Namewise= $('#civilbudget1').get(0).getContext('2d')
                    var NamewiseOptions = {
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

                    var NamewisebarChart = new Chart(Namewise, {
                        type: 'horizontalBar',
                        data: {
                            labels: Name,
                            datasets: [
                                
                    
                                {
                                    label: 'Jan_20',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255, 192, 0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255, 192, 0)',
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    data: Jan_20
                                },{
                                    label: 'Contract_Value',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(0, 0, 255)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 0, 255)',

                                    backgroundColor: 'rgb(0, 0, 255)',
                                    borderColor: 'rgb(0, 0, 255)',
                                    data: Contract_Value
                                }

                            ]
                        },
                        options: NamewiseOptions
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
                                    backgroundColor: 'rgb(0, 0, 255)',
                                    borderColor: 'rgb(0, 0, 255)',

                                    lineTension: 0.4,
                                    pointRadius: 0.4,
                                    data: Planned
                                },
                                 {
                                    label: 'Actual',
                                    fill: false,
                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    lineTension: 0.4,
                                    pointRadius: 0.4,
                                    data: Actual
                                },
                                {
                                    label: 'Certified',
                                    fill: false,
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    lineTension: 0.4,
                                    pointRadius: 0.4,
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
                url: "http://eviothings.in:1880/mmrcl/financials/civil/Phase 2",
                type: "GET",
                success: function (data) {
                    //console.log(data);
                    var Name = [];
                    var Contract_Value = [];
                    var Jan_20 = [];
                    var obj = JSON.parse(data);
                    
                    
                    for (var i in obj) {
                        //console.log(obj[i].Name);                        
                        Name.push(obj[i].Name);
                        Contract_Value.push(obj[i].Contract_Value);
                        Jan_20.push(obj[i].Jan_20);
                     
                    }
                    var Namewise= $('#civilbudget2').get(0).getContext('2d')
                    var NamewiseOptions = {
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

                    var NamewisebarChart = new Chart(Namewise, {
                        type: 'horizontalBar',
                        data: {
                            labels: Name,
                            datasets: [
                                {
                                    label: 'Contract_Value',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(0, 0, 255)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 0, 255)',

                                    backgroundColor: 'rgb(0, 0, 255)',
                                    borderColor: 'rgb(0, 0, 255)',
                                    data: Contract_Value
                                },
                    
                                {
                                    label: 'Jan_20',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255, 192, 0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255, 192, 0)',
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    data: Jan_20
                                }

                            ]
                        },
                        options: NamewiseOptions
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
                                    backgroundColor: 'rgb(0, 0, 255)',
                                    borderColor: 'rgb(0, 0, 255)',

                                    lineTension: 0.4,
                                    pointRadius: 0.4,
                                    data: Planned
                                },
                                 {
                                    label: 'Actual',
                                    fill: false,
                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    lineTension: 0.4,
                                    pointRadius: 0.4,
                                    data: Actual
                                },
                                {
                                    label: 'Certified',
                                    fill: false,
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    lineTension: 0.4,
                                    pointRadius: 0.4,
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
                    //console.log(data);
                    var Name = [];
                    var Contract_Value = [];
                    var Jan_20 = [];
                    var obj = JSON.parse(data);
                    
                    
                    for (var i in obj) {
                        //console.log(obj[i].Name);                        
                        Name.push(obj[i].Name);
                        Contract_Value.push(obj[i].Contract_Value);
                        Jan_20.push(obj[i].Jan_20);
                     
                    }
                    var Namewise= $('#civilbudget3').get(0).getContext('2d')
                    var NamewiseOptions = {
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

                    var NamewisebarChart = new Chart(Namewise, {
                        type: 'horizontalBar',
                        data: {
                            labels: Name,
                            datasets: [
                                {
                                    label: 'Contract_Value',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(0, 0, 255)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 0, 255)',

                                    backgroundColor: 'rgb(0, 0, 255)',
                                    borderColor: 'rgb(0, 0, 255)',
                                    data: Contract_Value
                                },
                    
                                {
                                    label: 'Jan_20',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255, 192, 0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255, 192, 0)',
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    data: Jan_20
                                }

                            ]
                        },
                        options: NamewiseOptions
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
                                    backgroundColor: 'rgb(0, 0, 255)',
                                    borderColor: 'rgb(0, 0, 255)',

                                    lineTension: 0.4,
                                    pointRadius: 0.4,
                                    data: Planned
                                },
                                 {
                                    label: 'Actual',
                                    fill: false,
                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    lineTension: 0.4,
                                    pointRadius: 0.4,
                                    data: Actual
                                },
                                {
                                    label: 'Certified',
                                    fill: false,
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    lineTension: 0.4,
                                    pointRadius: 0.4,
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
                    //console.log(data);
                    var Name = [];
                    var Contract_Value = [];
                    var Jan_20 = [];
                    var obj = JSON.parse(data);
                    
                    
                    for (var i in obj) {
                        //console.log(obj[i].Name);                        
                        Name.push(obj[i].Name);
                        Contract_Value.push(obj[i].Contract_Value);
                        Jan_20.push(obj[i].Jan_20);
                     
                    }
                    var Namewise= $('#civilbudget4').get(0).getContext('2d')
                    var NamewiseOptions = {
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

                    var NamewisebarChart = new Chart(Namewise, {
                        type: 'horizontalBar',
                        data: {
                            labels: Name,
                            datasets: [
                                {
                                    label: 'Contract_Value',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(0, 0, 255)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 0, 255)',

                                    backgroundColor: 'rgb(0, 0, 255)',
                                    borderColor: 'rgb(0, 0, 255)',
                                    data: Contract_Value
                                },
                    
                                {
                                    label: 'Jan_20',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255, 192, 0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255, 192, 0)',
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    data: Jan_20
                                }

                            ]
                        },
                        options: NamewiseOptions
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
                                    backgroundColor: 'rgb(0, 0, 255)',
                                    borderColor: 'rgb(0, 0, 255)',

                                    lineTension: 0.4,
                                    pointRadius: 0.4,
                                    data: Planned
                                },
                                 {
                                    label: 'Actual',
                                    fill: false,
                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    lineTension: 0.4,
                                    pointRadius: 0.4,
                                    data: Actual
                                },
                                {
                                    label: 'Certified',
                                    fill: false,
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    lineTension: 0.4,
                                    pointRadius: 0.4,
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
                    //console.log(data);
                    var Name = [];
                    var Contract_Value = [];
                    var Jan_20 = [];
                    var obj = JSON.parse(data);
                    
                    
                    for (var i in obj) {
                        //console.log(obj[i].Name);                        
                        Name.push(obj[i].Name);
                        Contract_Value.push(obj[i].Contract_Value);
                        Jan_20.push(obj[i].Jan_20);
                     
                    }
                    var Namewise= $('#civilbudget5').get(0).getContext('2d')
                    var NamewiseOptions = {
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

                    var NamewisebarChart = new Chart(Namewise, {
                        type: 'horizontalBar',
                        data: {
                            labels: Name,
                            datasets: [
                                {
                                    label: 'Contract_Value',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(0, 0, 255)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 0, 255)',

                                    backgroundColor: 'rgb(0, 0, 255)',
                                    borderColor: 'rgb(0, 0, 255)',
                                    data: Contract_Value
                                },
                    
                                {
                                    label: 'Jan_20',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255, 192, 0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255, 192, 0)',
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    data: Jan_20
                                }

                            ]
                        },
                        options: NamewiseOptions
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
                                    backgroundColor: 'rgb(0, 0, 255)',
                                    borderColor: 'rgb(0, 0, 255)',

                                    lineTension: 0.4,
                                    pointRadius: 0.4,
                                    data: Planned
                                },
                                 {
                                    label: 'Actual',
                                    fill: false,
                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    lineTension: 0.4,
                                    pointRadius: 0.4,
                                    data: Actual
                                },
                                {
                                    label: 'Certified',
                                    fill: false,
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    lineTension: 0.4,
                                    pointRadius: 0.4,
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
                    //console.log(data);
                    var Name = [];
                    var Contract_Value = [];
                    var Jan_20 = [];
                    var obj = JSON.parse(data);
                    
                    
                    for (var i in obj) {
                        //console.log(obj[i].Name);                        
                        Name.push(obj[i].Name);
                        Contract_Value.push(obj[i].Contract_Value);
                        Jan_20.push(obj[i].Jan_20);
                     
                    }
                    var Namewise= $('#civilbudget6').get(0).getContext('2d')
                    var NamewiseOptions = {
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

                    var NamewisebarChart = new Chart(Namewise, {
                        type: 'horizontalBar',
                        data: {
                            labels: Name,
                            datasets: [
                                {
                                    label: 'Contract_Value',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(0, 0, 255)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 0, 255)',

                                    backgroundColor: 'rgb(0, 0, 255)',
                                    borderColor: 'rgb(0, 0, 255)',
                                    data: Contract_Value
                                },
                    
                                {
                                    label: 'Jan_20',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255, 192, 0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255, 192, 0)',
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    data: Jan_20
                                }

                            ]
                        },
                        options: NamewiseOptions
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
                                    backgroundColor: 'rgb(0, 0, 255)',
                                    borderColor: 'rgb(0, 0, 255)',

                                    lineTension: 0.4,
                                    pointRadius: 0.4,
                                    data: Planned
                                },
                                 {
                                    label: 'Actual',
                                    fill: false,
                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    lineTension: 0.4,
                                    pointRadius: 0.4,
                                    data: Actual
                                },
                                {
                                    label: 'Certified',
                                    fill: false,
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    lineTension: 0.4,
                                    pointRadius: 0.4,
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
                    //console.log(data);
                    var Name = [];
                    var Contract_Value = [];
                    var Jan_20 = [];
                    var obj = JSON.parse(data);
                    
                    
                    for (var i in obj) {
                        //console.log(obj[i].Name);                        
                        Name.push(obj[i].Name);
                        Contract_Value.push(obj[i].Contract_Value);
                        Jan_20.push(obj[i].Jan_20);
                     
                    }
                    var Namewise= $('#civilbudget7').get(0).getContext('2d')
                    var NamewiseOptions = {
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

                    var NamewisebarChart = new Chart(Namewise, {
                        type: 'horizontalBar',
                        data: {
                            labels: Name,
                            datasets: [
                                {
                                    label: 'Contract_Value',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(0, 0, 255)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 0, 255)',

                                    backgroundColor: 'rgb(0, 0, 255)',
                                    borderColor: 'rgb(0, 0, 255)',
                                    data: Contract_Value
                                },
                    
                                {
                                    label: 'Jan_20',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255, 192, 0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255, 192, 0)',
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    data: Jan_20
                                }

                            ]
                        },
                        options: NamewiseOptions
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
                                    backgroundColor: 'rgb(0, 0, 255)',
                                    borderColor: 'rgb(0, 0, 255)',

                                    lineTension: 0.4,
                                    pointRadius: 0.4,
                                    data: Planned
                                },
                                 {
                                    label: 'Actual',
                                    fill: false,
                                    backgroundColor: 'rgb(255,0,0)',
                                    borderColor: 'rgb(255,0,0)',
                                    lineTension: 0.4,
                                    pointRadius: 0.4,
                                    data: Actual
                                },
                                {
                                    label: 'Certified',
                                    fill: false,
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    lineTension: 0.4,
                                    pointRadius: 0.4,
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
                    //console.log(data);
                    var Name = [];
                    var Contract_Value = [];
                    var Jan_20 = [];
                    var obj = JSON.parse(data);
                    
                    
                    for (var i in obj) {
                        //console.log(obj[i].Name);                        
                        Name.push(obj[i].Name);
                        Contract_Value.push(obj[i].Contract_Value);
                        Jan_20.push(obj[i].Jan_20);
                     
                    }
                    var Namewise= $('#civilbudget8').get(0).getContext('2d')
                    var NamewiseOptions = {
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

                    var NamewisebarChart = new Chart(Namewise, {
                        type: 'horizontalBar',
                        data: {
                            labels: Name,
                            datasets: [
                                {
                                    label: 'Contract_Value',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(0, 0, 255)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 0, 255)',

                                    backgroundColor: 'rgb(0, 0, 255)',
                                    borderColor: 'rgb(0, 0, 255)',
                                    data: Contract_Value
                                },
                    
                                {
                                    label: 'Jan_20',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(255, 192, 0)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(255, 192, 0)',
                                    backgroundColor: 'rgb(255, 192, 0)',
                                    borderColor: 'rgb(255, 192, 0)',
                                    data: Jan_20
                                }

                            ]
                        },
                        options: NamewiseOptions
                    })

                }
            });

    
       