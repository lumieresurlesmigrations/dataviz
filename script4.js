  // animation
$(window).scroll(function() {
    $('#about,.album,.blogevent ul li').each(function(){
    var elementPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (elementPos < topOfWindow+400) {
        $(this).addClass("animated fadeInUp");
      }
    });


    $('h3,h4').each(function(){
    var elementPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (elementPos < topOfWindow+500) {
        $(this).addClass("animated fadeInUp");
      }
    });


  });

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
               	color: '#E48400',
             data: [1620, 2188, 8510, 18478, 17007, 14200, 16810, 18790, 19863, 22505, 22350, 21714, 28925, 26290, 27672, 34352,
                       {y: 61422,
                       name:'1989: Chute du mur de Berlin',
                       marker: {radius: 10, symbol: 'url(explosion.png)'}
                       }, 
                       {y: 54813, 
                       name:'1991: Début de la guerre civile en ex-Yougoslavie',
                       marker: {radius: 10, symbol: 'url(explosion.png)'}
                       },                       
                       {y: 47380,
                       name:'1991: Chute de l\'URSS',
                       marker: {radius: 10, symbol: 'url(explosion.png)'}
                       }, 39835, 35406, 32413, 
                       {y: 25036,
                       name: '1995: Fin de la guerre en Bosnie',
                       marker: {radius: 10, symbol: 'url(explosion.png)'}                
                       }, 21122, 22637, 
                       {y: 22990, 
                       name: '1998: Poursuite des conflits en ex-Yougoslavie (guerre du Kosovo)',
                       marker: {radius: 10, symbol: 'url(explosion.png)'}
                       },
                    31855, 39775, 48652, 52877, 54429, 57616, 52066, 34853, 29937, 34258, 38803, 41619, 45654, 47467, 51715, 50952, 64942]
            }, { type : 'spline',
                 color: '#29AB87',
                name: 'Admissions à l\'asile',
                data: [1237, 1891, 6238, 14797, 12473, 13091, 14296, 17099, 14586, 15670, 14608, 14314, 11539, 10645, 8704, 8794, 8770, 13486, 15467, 10266, 9914, 7025, 4742, 4344, 4112, 4342, 4659, 5185, 7323, 8495, 9790, 11292, 13770, 7354, 8781, 11441, 10373, 10340, 10702, 9976, 11371, 14512, 19506]
            }  ]
        });
    });
$(function () {

    Highcharts.setOptions({
     colors: ['#29AB87', '#934c05', '#E48400', '#933D41']
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
              /* Source : <a href="http://popstats.unhcr.org/en/overview">UNHCR</a>  */
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
                valueSuffix: ' individus au total '
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
                data: [{y:12129572, name :'Les 3 premiers pays d\'origine des réfugiés en 2000 : Afghanistan, Burundi, Irak'},
                       {y:12116835, name :'Les 3 premiers pays d\'origine des réfugiés en 2000 : Afghanistan, Burundi, Irak'} ,
                       {y:10594055, name :'Les 3 premiers pays d\'origine des réfugiés en 2000 : Afghanistan, Burundi, Soudan'} ,
                       {y:9592795, name :'Les 3 premiers pays d\'origine des réfugiés en 2003 : Afghanistan, Soudan, Burundi'},
                       {y:9573397, name :'Les 3 premiers pays d\'origine des réfugiés en 2004 : Afghanistan, Soudan, Burundi'} ,
                       {y:8661994, name :'Les 3 premiers pays d\'origine des réfugiés en 2005 : Afghanistan, Soudan, Burundi'} ,
                       {y:9877703, name :'Les 3 premiers pays d\'origine des réfugiés en 2006 : Afghanistan, Irak, Soudan'} ,
                       {y:11390930, name :'Les 3 premiers pays d\'origine des réfugiés en 2007 : Afghanistan, Irak, Colombie'} ,
                       {y:10489812, name :'Les 3 premiers pays d\'origine des réfugiés en 2008 : Afghanistan, Irak, Somalie'} ,
                        {y:10396538, name :'Les 3 premiers pays d\'origine des réfugiés en 2009 : Afghanistan, Irak, Somalie'} ,
                        {y:10549681, name :'Les 3 premiers pays d\'origine des réfugiés en 2010 : Afghanistan, Irak, Somalie'} ,
                        {y:10404804, name :'Les 3 premiers pays d\'origine des réfugiés en 2011 : Afghanistan, Irak, Somalie'} ,
                         {y:10497957, name :'Les 3 premiers pays d\'origine des réfugiés en 2012 : Afghanistan, Somalie, Irak'} ,
                         {y:11699279, name :'Les 3 premiers pays d\'origine des réfugiés en 2013 : Afghanistan, Syrie, Somalie'} ,
                         {y:14385316, name :'Les 3 premiers pays d\'origine des réfugiés en 2014 : Syrie, Afghanistan, Somalie'} ,
                         {y:16121427, name :'Les 3 premiers pays d\'origine des réfugiés en 2015 : Syrie, Afghanistan, Somalie'}]
            }, { type : 'spline',
                 color: '#D7837F',
                name: 'Déplacés internes',
                data: [
                  {y: 5998501, name:'Les 3 premiers pays en termes de déplacés internes en 2000 : Erythrée, Afghanistan, Sri Lanka'}, 
                  {y: 5096502, name:'Les 3 premiers pays en termes de déplacés internes en 2001: Afghanistan, Sri Lanka, Colombie'}, 
                  {y: 4646641, name:'Les 3 premiers pays en termes de déplacés internes en 2002: Afghanistan, Colombie, Azerbaïdjan'}, 
                  {y: 4181701, name :'Les 3 premiers pays en termes de déplacés internes en 2003 : Colombie, Azerbaïdjan, Liberia'},
                  {y: 5426539, name :'Les 3 premiers pays en termes de déplacés internes en 2004 : Colombie, Soudan, Azerbaïdjan'},
                  {y: 6616791, name :'Les 3 premiers pays en termes de déplacés internes en 2005 : Colombie, Irak, Soudan'},
                  {y: 12794268,name:'Les 3 premiers pays en termes de déplacés internes en 2006: Colombie, Irak, Ouganda'},  
                  {y: 13740317, name :'Les 3 premiers pays en termes de déplacés internes en 2007 : Colombie, Irak, Rép. Dém. Congo'},
                  {y: 14442227, name :'Les 3 premiers pays en termes de déplacés internes en 2008 : Irak, Colombie, Rép. Dém. Congo'},
                  {y: 15628057, name :'Les 3 premiers pays en termes de déplacés internes en 2009 : Irak, Pakistan, Rép. Dém. Congo'},
                  {y:14697804, name :'Les 3 premiers pays en termes de déplacés internes en 2010 : Colombie, Rép. Dém. Congo, Soudan'},
                  {y: 15473378, name:' Début du conflit en Syrie. Les 3 premiers pays en termes de déplacés internes en 2011, Colombie, Soudan, Rép. Dém. Congo.' ,marker: {radius: 10, symbol: 'url(explosion.png)'}},
                  {y: 17670368, name :'Les 3 premiers pays en termes de déplacés internes en 2012 : Colombie, Rép. Dém. Congo, Syrie'},
                  {y: 23925555, name :'Les 3 premiers pays en termes de déplacés internes en 2013 : Syrie, Rép. Dém. Congo, Colombie'},
                  {y: 32274619, name :'Les 3 premiers pays en termes de déplacés internes en 2014 : Syrie, Colombie, Irak'},
                  {y: 37494172, name :'Les 3 premiers pays en termes de déplacés internes en 2015 : Syrie, Colombie, Irak'},]
            }, { type : 'spline',
                color: '#29AB87',
                name: 'Demandeurs d\'asile',
                data: [947926, 943980, 1093755, 996448, 885249, 802174, 741291, 741110, 825043, 989169, 837445, 897021, 942797, 1164449,1804465,3219941]
            },   ]
        });
    });
