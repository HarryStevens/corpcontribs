google.load("visualization", "1", {
	packages : ["corechart"]
});
google.setOnLoadCallback(drawChart);
function drawChart() {
	var data = google.visualization.arrayToDataTable([['Year', 'Over-contributions'], ['2012', 77017.77], ['2013', 192773], ['2014*', 89584]]);

	var formatter = new google.visualization.NumberFormat({
		prefix : '$'
	});

	formatter.format(data, 1);

	var options = {
		vAxis : {
			title : 'Over-contributions ($)',
			ticks : [0, 25000, 50000, 75000, 100000, 125000, 150000, 175000, 200000],
			gridlines : {
				color : '#fff',
				count : 0
			}
		},
		hAxis : {
			title : 'Year'
		},
		legend : {
			position : 'none'
		}
	};

	var chart = new google.visualization.ColumnChart(document.getElementById('years-chart'));

	chart.draw(data, options);
}

