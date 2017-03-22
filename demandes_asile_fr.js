$(function () {
        $('#asile').highcharts({
            chart: { backgroundColor:'transparent',
                type: 'area'
            },
            title: {
                text: 'Historique des demandes d\'asile en France'
            },
            subtitle: {
                text: ''
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
               	color: '#0d233a',
                data: [1 620, 2 188, 8 510, 18 478, 17 007, 14 200, 16 810, 18 790, 19 863, 22 505, 22 350, 21 714, 28 925, 26 290, 27 672, 34 352,
                       {y: 61 422,
                       name:'9/11/1989: Chute du mur de Berlin',
                       marker: {
                             symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                       }
                       }, 
                       {y: 54 813, 
                       name:'1991: Début de la guerre civile en ex-Yougoslavie'
                       marker: {
                             symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                       }
                       },                       
                       {y: 47 380,
                       name:'21/12/1991: Chute de l\'URSS',
                       marker: {
                             symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                       }
                       }, 39 835, 35 406, 32 413, 
                       {y: 25 036,
                       name: '14/12/1995: Fin de la guerre en Bosnie',
                       marker: {
                             symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                       }                   
                       }, 21 122, 22 637, 
                       {y: 22 990, 
                       name: '1998: Poursuite des conflits en ex-Yougoslavie (guerre du Kosovo)'
                       marker: {
                             symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                       } 
                       }, 31 855, 39 775, 48 652, 52 877, 54 429, 57 616, 52 066, 34 853, 29 937, 34 258, 38 803, 41 619, 45 654, 47 467, 51 715, 50 952, 64 942]
            }, { type : 'spline',
                 color: '#f45b5b',
                name: 'Admissions à l\'asile',
                data: [1 237, 1 891, 6 238, 14 797, 12 473, 13 091, 14 296, 17 099, 14 586, 15 670, 14 608, 14 314, 11 539, 10 645, 8 704, 8 794, 8 770, 13 486, 15 467, 10 266, 9 914, 7 025, 4 742, 4 344, 4 112, 4 342, 4 659, 5 185, 7 323, 8 495, 9 790, 11 292, 13 770, 7 354, 8 781, 11 441, 10 373, 10 340, 10 702, 9 976, 11 371, 14 512, 19 506]
            },   ]
        });
    });

/*
    { y: 5998501,
    name:'2000: '
}, { y: 5096502,
    name:'2001: '
},
     4646641, 4181701,5426539, 6616791, {        y: 12794268,
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
*/
