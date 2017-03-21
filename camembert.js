$(function () {

    Highcharts.setOptions({
     colors: ['#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263',      '#6AF9C4']
    });
    var chart;

    $(document).ready(function() {

        chart = new Highcharts.Chart({

            chart: {

                renderTo: 'alienor',

                plotBackgroundColor: null,

                plotBorderWidth: null,

                plotShadow: false

            },

            title: {

                text: 'Répartition des décisions en première instance relatives aux demandes d\'asile (de ressortissants de pays tiers), 2015'

            },

            tooltip: {

                formatter: function() {

                    return '<b>'+ this.point.name +'</b>: '+ this.y+'% ';

                }

            },

            plotOptions: {

                pie: {

                    allowPointSelect: true,

                    cursor: 'pointer',

                    dataLabels: {

                        enabled: true,

                        color: '#000000',

                        connectorColor: '#000000',

                        formatter: function() {

                            return '<b>'+ this.point.name +'</b> ';

                        }

                    }

                }

            },

            series: [{

                type: 'pie',

                name: 'Statut',

                "data": [
          				[
          					"Statut de réfugié",
          					38,7
          				],
          				[
          					"Protection subsidiaire",
          					9,5
          				],
          				[
          					"Raisons humanitaires",
          					3,7
          				],
          				[
          					"Demandes rejetées",
          					48,1
          				]
          			]
            }]

        });

    });
});
