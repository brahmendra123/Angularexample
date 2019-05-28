var app = angular.module("myexample",[
    'ngResource',
    'ui.router',
    'zingchart-angularjs'
]);
/*
app.directive('chart1',function(){
    return{
        restrict:'A',
        link: function ($scope, $elm) {
            var data = new google.visualization.DataTable();
            data.addColumn('string','javascript framework');
            data.addColumn('number','student');
            data.addRows([['angular',10],['bootstarp',6],['nodejs',4],['kendo',3]]);
            var options = {
                'title':'student interest',
                'width':500,
                'hight':500
            }
            var chart = new google.visualization.pieChart($elm[0]);
            chart.draw(data, options);

        }
    }
});
google.load('visualization','1',{packages:['corechart']});*/
