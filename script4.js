$(function () {
  var chart3 = new Highcharts.Chart({
            chart: { renderTo:'asile', backgroundColor:'transparent',
                type: 'area'
            },
            title: {
                text: ''
              /* Historique des demandes d\'asile en France */
            },
            subtitle: {
                text: ''
            },
           credits: {
        enabled: false
    },
            xAxis: {
                categories: ['1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014','2015'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function() {
                        return this.value;
                    }
                }
            },
            tooltip: {
                shared: false,
             	 followPointer: false,
                valueSuffix: ''
            },
            plotOptions: {
                areaspline: {
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 2,
                    marker: {
                        lineWidth: 2,
                        lineColor: '#666666'
                    }
                }
            },
            series: [{
                type : 'spline',
                name: 'Demandes d\'asile',
             		marker: {
            		symbol: 'square'
        								},
               	color: '#D1E231',
             data: [1620, 2188, 8510, 18478, 17007, 14200, 16810, 18790, 19863, 22505, 22350, 21714, 28925, 26290, 27672, 34352,
                       {y: 61422,
                       name:'1989: Chute du mur de Berlin',
                       marker: {
                         radius: 5,
                             symbol: 'circle', 
                         color: '#F90303',
                       }
                       }, 
                       {y: 54813, 
                       name:'1991: Début de la guerre civile en ex-Yougoslavie',
                       marker: {
                             symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                       }
                       },                       
                       {y: 47380,
                       name:'1991: Chute de l\'URSS',
                       marker: {
                             symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                       }
                       }, 39835, 35406, 32413, 
                       {y: 25036,
                       name: '1995: Fin de la guerre en Bosnie',
                       marker: {
                             symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                       }                   
                       }, 21122, 22637, 
                       {y: 22990, 
                       name: '1998: Poursuite des conflits en ex-Yougoslavie (guerre du Kosovo)',
                       marker: {
                             symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                       } 
                       },
                    31855, 39775, 48652, 52877, 54429, 57616, 52066, 34853, 29937, 34258, 38803, 41619, 45654, 47467, 51715, 50952, 64942]
            }, { type : 'spline',
                 color: '#D7837F',
                name: 'Admissions à l\'asile',
                data: [1237, 1891, 6238, 14797, 12473, 13091, 14296, 17099, 14586, 15670, 14608, 14314, 11539, 10645, 8704, 8794, 8770, 13486, 15467, 10266, 9914, 7025, 4742, 4344, 4112, 4342, 4659, 5185, 7323, 8495, 9790, 11292, 13770, 7354, 8781, 11441, 10373, 10340, 10702, 9976, 11371, 14512, 19506]
            }  ]
        });
    });
$(function () {

    Highcharts.setOptions({
     colors: ['#29AB87', '#D1E231', '#E48400', '#933D41']
    });
    var chart = new Highcharts.Chart({

            chart: {

                renderTo: 'alienor',backgroundColor:'transparent',

                plotBackgroundColor: null,

                plotBorderWidth: null,

                plotShadow: false

            },

            title: {

                text: ''
/* Répartition des décisions en première instance relatives aux demandes d\'asile (de ressortissants de pays tiers), 2015 */
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
       credits: {
        enabled: false
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

   var chart2 = new Highcharts.Chart({

            chart: {
              renderTo:'container',backgroundColor:'transparent',
                type: 'area'
            },
            title: {
                text: ''
              /* Une hausse vertigineuse de déplacements de populations dans le monde */
            },
            subtitle: {
                text: ''
              /* Source : <a href="http://popstats.unhcr.org/en/overview">UNHCR</a> */
            },
      credits: {
        enabled: false
    },
            xAxis: {
                categories: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014','2015'],
                tickmarkPlacement: 'on',
                    plotLines: [{
    color: 'red', // Color value
    dashStyle: 'longdashdot', // Style of the plot line. Default to solid
    value: '2011', // Value of where the line will appear
    width: 0.5 // Width of the line    
  }],
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'En millions de personnes'
                },
                labels: {
                    formatter: function() {
                        return this.value / 1000000;
                    }
                }
            },
            tooltip: {
                shared: false,
             	 followPointer: false,
                valueSuffix: ' individus '
            },
            plotOptions: {
                areaspline: {
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 2,
                    marker: {
                        lineWidth: 2,
                        lineColor: '#666666'
                    }
                }
            },
            series: [{
                type : 'spline',
                name: 'Réfugiés',
             		marker: {
            		symbol: 'square'
        								},
               	color: '#0F52BA',
                data: [12129572, 12116835, 10594055, 9592795, 9573397, 8661994, 9877703, 11390930, 10489812, 10396538, 10549681, 10404804, 10497957, 11699279,14385316,16121427]
            }, { type : 'spline',
                 color: '#D7837F',
                name: 'Déplacés internes',
                data: [
                  { y: 5998501,
            			name:'2000: '
        }, { y: 5096502,
            			name:'2001: Afghanistan'
        }, 
                   4646641, {y:4181701, name :'2003 : Irak'},5426539, 6616791, {        y: 12794268,
            			name:'2006: Rép. Dem. Congo, Ouganda, Côte d\'Ivoire',
            			marker: {
                		symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
            }
        },   13740317, 14442227, 15628057, 14697804, {
            y: 15473378,
             name:'2011, début du conflit syrien',
            marker: {
                symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
            }
        }, 17670368 , 23925555,32274619,37494172]
            }, { type : 'spline',
                color: '#29AB87',
                name: 'Demandeurs d\'asile',
                data: [947926, 943980, 1093755, 996448, 885249, 802174, 741291, 741110, 825043, 989169, 837445, 897021, 942797, 1164449,1804465,3219941]
            },   ]
        });
    });
