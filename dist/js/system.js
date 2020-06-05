 <!--   //System all scurve--> 
            $.ajax({

                url: "http://eviothings.in:1880/mmrcl/progress/systems/Phase all",
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
                    var barChartCanvas = $('#Systemscurv').get(0).getContext('2d')
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
        
       <!--   //System all  budget -->
            $.ajax({
                url: "http://eviothings.in:1880/mmrcl/financials/systems/Phase all",
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
                    var Namewise= $('#Systembudget').get(0).getContext('2d')
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
                                },
                                {
                                    label: 'Contract_Value',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(0, 145, 218)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 145, 218)',

                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',
                                    data: Contract_Value
                                }
                    
                                

                            ]
                        },
                        options: NamewiseOptions
                    })

                }
            });

<!--   //System 1 scurve--> 
            $.ajax({

                url: "http://eviothings.in:1880/mmrcl/progress/systems/Phase 1",
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
                    var barChartCanvas = $('#Systemscurv1').get(0).getContext('2d')
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
        
       <!--   //System 1  budget -->
            $.ajax({
                url: "http://eviothings.in:1880/mmrcl/financials/systems/Phase 1",
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
                    var Namewise= $('#Systembudget1').get(0).getContext('2d')
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
                                },
                                {
                                    label: 'Contract_Value',
                                    pointRadius: false,
                                    pointColor: '#3b8bba',
                                    pointStrokeColor: 'rgb(0, 0, 255)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 145, 218)',

                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',
                                    data: Contract_Value
                                }

                            ]
                        },
                        options: NamewiseOptions
                    })

                }
            });

   <!--   //System 2 scurve--> 
            $.ajax({

                url: "http://eviothings.in:1880/mmrcl/progress/systems/Phase 2",
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
                    var barChartCanvas = $('#Systemscurv2').get(0).getContext('2d')
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
          <!--   //System 2  budget -->
            $.ajax({
                url: "http://eviothings.in:1880/mmrcl/financials/systems/Phase 2",
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
                    var Namewise= $('#Systembudget2').get(0).getContext('2d')
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
                                    pointStrokeColor: 'rgb(0, 145, 218)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 145, 218)',

                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',
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

 <!--   //System 3 scurve--> 
            $.ajax({

                url: "http://eviothings.in:1880/mmrcl/progress/systems/Phase 3",
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
                    var barChartCanvas = $('#Systemscurv3').get(0).getContext('2d')
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
           <!--   //System 3  budget -->
            $.ajax({
                url: "http://eviothings.in:1880/mmrcl/financials/systems/Phase 3",
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
                    var Namewise= $('#Systembudget3').get(0).getContext('2d')
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
                                    pointStrokeColor: 'rgb(0, 145, 218)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 145, 218)',

                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',
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

 <!--   //System 4 scurve--> 
            $.ajax({

                url: "http://eviothings.in:1880/mmrcl/progress/systems/Phase 4",
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
                    var barChartCanvas = $('#Systemscurv4').get(0).getContext('2d')
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
            <!--   //System 4  budget -->
            $.ajax({
                url: "http://eviothings.in:1880/mmrcl/financials/systems/Phase 4",
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
                    var Namewise= $('#Systembudget4').get(0).getContext('2d')
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
                                    pointStrokeColor: 'rgb(0, 145, 218)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 145, 218)',

                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',
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

 <!--   //System 5 scurve--> 
            $.ajax({

                url: "http://eviothings.in:1880/mmrcl/progress/systems/Phase 5",
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
                    var barChartCanvas = $('#Systemscurv5').get(0).getContext('2d')
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
            <!--   //System 5  budget -->
            $.ajax({
                url: "http://eviothings.in:1880/mmrcl/financials/systems/Phase 5",
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
                    var Namewise= $('#Systembudget5').get(0).getContext('2d')
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
                                    pointStrokeColor: 'rgb(0, 145, 218)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 145, 218)',

                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',
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

 <!--   //System 6 scurve--> 
            $.ajax({

                url: "http://eviothings.in:1880/mmrcl/progress/systems/Phase 6",
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
                    var barChartCanvas = $('#Systemscurv6').get(0).getContext('2d')
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
          <!--   //System 6  budget -->
            $.ajax({
                url: "http://eviothings.in:1880/mmrcl/financials/systems/Phase 6",
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
                    var Namewise= $('#Systembudget6').get(0).getContext('2d')
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
                                    pointStrokeColor: 'rgb(0, 145, 218)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 145, 218)',

                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',
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

 <!--   //System 7 scurve--> 
            $.ajax({

                url: "http://eviothings.in:1880/mmrcl/progress/systems/Phase 7",
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
                    var barChartCanvas = $('#Systemscurv7').get(0).getContext('2d')
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
        
          <!--   //System 7  budget -->
            $.ajax({
                url: "http://eviothings.in:1880/mmrcl/financials/systems/Phase 7",
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
                    var Namewise= $('#Systembudget7').get(0).getContext('2d')
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
                                    pointStrokeColor: 'rgb(0, 145, 218)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 145, 218)',

                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',
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

 <!--   //System 8 scurve--> 
            $.ajax({

                url: "http://eviothings.in:1880/mmrcl/progress/systems/Phase 8",
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
                    var barChartCanvas = $('#Systemscurv8').get(0).getContext('2d')
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
          <!--   //System 8  budget -->
            $.ajax({
                url: "http://eviothings.in:1880/mmrcl/financials/systems/Phase 8",
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
                    var Namewise= $('#Systembudget8').get(0).getContext('2d')
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
                                    pointStrokeColor: 'rgb(0, 145, 218)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 145, 218)',

                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',
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

 
 <!--   //System 9 scurve--> 
            $.ajax({

                url: "http://eviothings.in:1880/mmrcl/progress/systems/Phase 9",
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
                        document.getElementById("cp9").innerHTML = Planned[28]
                        document.getElementById("ca9").innerHTML = Actual[28]//Math.max(...Actual)
                        document.getElementById("cc9").innerHTML = Certified[28]//Math.max(...Certified)
  
                    }
                        
                    
                    console.log(Planned[1]);
                    var barChartCanvas = $('#Systemscurv9').get(0).getContext('2d')
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
        
          <!--   //System 9  budget -->
            $.ajax({
                url: "http://eviothings.in:1880/mmrcl/financials/systems/Phase 9",
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
                    var Namewise= $('#Systembudget9').get(0).getContext('2d')
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
                                    pointStrokeColor: 'rgb(0, 145, 218)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 145, 218)',

                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',
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

 <!--   //System 10 scurve--> 
            $.ajax({

                url: "http://eviothings.in:1880/mmrcl/progress/systems/Phase 10",
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
                        document.getElementById("cp10").innerHTML = Planned[28]
                        document.getElementById("ca10").innerHTML = Actual[28]//Math.max(...Actual)
                        document.getElementById("cc10").innerHTML = Certified[28]//Math.max(...Certified)
  
                    }
                        
                    
                    console.log(Planned[1]);
                    var barChartCanvas = $('#Systemscurv10').get(0).getContext('2d')
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
        
          <!--   //System 10  budget -->
            $.ajax({
                url: "http://eviothings.in:1880/mmrcl/financials/systems/Phase 10",
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
                    var Namewise= $('#Systembudget10').get(0).getContext('2d')
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
                                    pointStrokeColor: 'rgb(0, 145, 218)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 145, 218)',

                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',
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

 <!--   //System 11 scurve--> 
            $.ajax({

                url: "http://eviothings.in:1880/mmrcl/progress/systems/Phase 11",
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
                        document.getElementById("cp11").innerHTML = Planned[28]
                        document.getElementById("ca11").innerHTML = Actual[28]//Math.max(...Actual)
                        document.getElementById("cc11").innerHTML = Certified[28]//Math.max(...Certified)
  
                    }
                        
                    
                    console.log(Planned[1]);
                    var barChartCanvas = $('#Systemscurv11').get(0).getContext('2d')
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
         <!--   //System 11  budget -->
            $.ajax({
                url: "http://eviothings.in:1880/mmrcl/financials/systems/Phase 11",
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
                    var Namewise= $('#Systembudget11').get(0).getContext('2d')
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
                                    pointStrokeColor: 'rgb(0, 145, 218)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 145, 218)',

                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',
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

 <!--   //System 12 scurve--> 
            $.ajax({

                url: "http://eviothings.in:1880/mmrcl/progress/systems/Phase 12",
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
                        document.getElementById("cp12").innerHTML = Planned[28]
                        document.getElementById("ca12").innerHTML = Actual[28]//Math.max(...Actual)
                        document.getElementById("cc12").innerHTML = Certified[28]//Math.max(...Certified)
  
                    }
                        
                    
                    console.log(Planned[1]);
                    var barChartCanvas = $('#Systemscurv12').get(0).getContext('2d')
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
        
           <!--   //System 12  budget -->
            $.ajax({
                url: "http://eviothings.in:1880/mmrcl/financials/systems/Phase 12",
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
                    var Namewise= $('#Systembudget12').get(0).getContext('2d')
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
                                    pointStrokeColor: 'rgb(0, 145, 218)',
                                    pointHighlightFill: '#fff',
                                    pointHighlightStroke: 'rgb(0, 145, 218)',

                                    backgroundColor: 'rgb(0, 145, 218)',
                                    borderColor: 'rgb(0, 145, 218)',
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

    
       