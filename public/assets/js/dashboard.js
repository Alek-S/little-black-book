$(document).ready(function(){


	// === United States Heatmap ===
	$.get( window.location.origin + '/api/dashboard/state').done(function(data){
		//For use with US heatmap
		function stateCount(state){
			if( data[_.findIndex(data, function(o) { return o.state == state; })] ){ 
				return data[_.findIndex(data, function(o) { return o.state == state; })].total
				console.log(state, data[_.findIndex(data, function(o) { return o.state == state; })].total);
			}else{
				return 0;
			} 
		}

		var map = AmCharts.makeChart( "chartdiv", {
		type: "map",
		theme: "light",
		colorSteps: 50,

		  dataProvider: {
		    map: "usaLow",
		    areas: [ {
		      id: "US-AL",
		      value: stateCount('AL')
		    }, {
		      id: "US-AK",
		      value: stateCount('AK')
		    }, {
		      id: "US-AZ",
		      value: stateCount('AZ')
		    }, {
		      id: "US-AR",
		      value: stateCount('AR')
		    }, {
		      id: "US-CA",
		      value: stateCount('CA')
		    }, {
		      id: "US-CO",
		      value: stateCount('CO')
		    }, {
		      id: "US-CT",
		      value: stateCount('CT')
		    }, {
		      id: "US-DE",
		      value: stateCount('DE')
		    }, {
		      id: "US-FL",
		      value: stateCount('FL')
		    }, {
		      id: "US-GA",
		      value: stateCount('GA')
		    }, {
		      id: "US-HI",
		      value: stateCount('HI')
		    }, {
		      id: "US-ID",
		      value: stateCount('ID')
		    }, {
		      id: "US-IL",
		      value: stateCount('IL')
		    }, {
		      id: "US-IN",
		      value: stateCount('IN')
		    }, {
		      id: "US-IA",
		      value: stateCount('IA')
		    }, {
		      id: "US-KS",
		      value: stateCount('KS')
		    }, {
		      id: "US-KY",
		      value: stateCount('KY')
		    }, {
		      id: "US-LA",
		      value: stateCount('AA')
		    }, {
		      id: "US-ME",
		      value: stateCount('ME')
		    }, {
		      id: "US-MD",
		      value: stateCount('MD')
		    }, {
		      id: "US-MA",
		      value: stateCount('MA')
		    }, {
		      id: "US-MI",
		      value: stateCount('MI')
		    }, {
		      id: "US-MN",
		      value: stateCount('MN')
		    }, {
		      id: "US-MS",
		      value: stateCount('MS')
		    }, {
		      id: "US-MO",
		      value: stateCount('MO')
		    }, {
		      id: "US-MT",
		      value: stateCount('MT')
		    }, {
		      id: "US-NE",
		      value: stateCount('NE')
		    }, {
		      id: "US-NV",
		      value: stateCount('NV')
		    }, {
		      id: "US-NH",
		      value: stateCount('NH')
		    }, {
		      id: "US-NJ",
		      value: stateCount('NJ')
		    }, {
		      id: "US-NM",
		      value: stateCount('NM')
		    }, {
		      id: "US-NY",
		      value: stateCount('NY')
		    }, {
		      id: "US-NC",
		      value: stateCount('NC')
		    }, {
		      id: "US-ND",
		      value: stateCount('ND')
		    }, {
		      id: "US-OH",
		      value: stateCount('OH')
		    }, {
		      id: "US-OK",
		      value: stateCount('OK')
		    }, {
		      id: "US-OR",
		      value: stateCount('OR')
		    }, {
		      id: "US-PA",
		      value: stateCount('PA')
		    }, {
		      id: "US-RI",
		      value: stateCount('RI')
		    }, {
		      id: "US-SC",
		      value: stateCount('SC')
		    }, {
		      id: "US-SD",
		      value: stateCount('SD')
		    }, {
		      id: "US-TN",
		      value: stateCount('TN')
		    }, {
		      id: "US-TX",
		      value: stateCount('TX')
		    }, {
		      id: "US-UT",
		      value: stateCount('UT')
		    }, {
		      id: "US-VT",
		      value: stateCount('VT')
		    }, {
		      id: "US-VA",
		      value: stateCount('VA')
		    }, {
		      id: "US-WA",
		      value: stateCount('WA')
		    }, {
		      id: "US-WV",
		      value: stateCount('WV')
		    }, {
		      id: "US-WI",
		      value: stateCount('WI')
		    }, {
		      id: "US-WY",
		      value: stateCount('WY')
		    } ]
		  },

		areasSettings: {
			autoZoom: true,
			balloonText: "Total Members [[value]]"
		  },

		valueLegend: {
		    right: 10,
		    minValue: "Few",
		    maxValue: "Many"
		  },

		export: {
		    enabled: false
		  }

		});

	}); //end of United States Heatmap



	// === Event Timeline Chart ===
	$.get( window.location.origin + '/api/dashboard/event/timeline').done(function(data){
		
		var chart = c3.generate({
		    data: {
		        columns: [
		            ['Events', 30, 200, 100, 400, 150, 250]
		        ],
		        type: 'area-spline',
		    },
		    color: {
		    	pattern:['#62a3c4']
		    },
		    axis: {
		    	x: {show: false},
		        y: {show: false}
		    },
		    legend: {
  				show: false
			}
		});


	}); //end of Event Timeline



	//=== Top 5 Cards ===
	$.get( window.location.origin + '/api/dashboard/top5/platform').done(function(data){
		$('#p1').html( '<strong>'+data[0].platform+'</strong> - '+ data[0].total );
		$('#p2').html( '<strong>'+data[1].platform+'</strong> - '+ data[1].total );
		$('#p3').html( '<strong>'+data[2].platform+'</strong> - '+ data[2].total );
		$('#p4').html( '<strong>'+data[3].platform+'</strong> - '+ data[3].total );
		$('#p5').html( '<strong>'+data[4].platform+'</strong> - '+ data[4].total );
	});

	$.get( window.location.origin + '/api/dashboard/top5/age').done(function(data){
		$('#a1').html( '<strong>'+data[0].age+' years old</strong> - '+ data[0].total + ' users' );
		$('#a2').html( '<strong>'+data[1].age+' years old</strong> - '+ data[1].total + ' users' );
		$('#a3').html( '<strong>'+data[2].age+' years old</strong> - '+ data[2].total + ' users' );
		$('#a4').html( '<strong>'+data[3].age+' years old</strong> - '+ data[3].total + ' users' );
		$('#a5').html( '<strong>'+data[4].age+' years old</strong> - '+ data[4].total + ' users' );
	});

	$.get( window.location.origin + '/api/dashboard/top5/event').done(function(data){
		$('#e1').html( '<strong>'+data[0].what +'</strong> - '+ data[0].total + ' events' );
		$('#e2').html( '<strong>'+data[1].what +'</strong> - '+ data[1].total + ' events' );
		$('#e3').html( '<strong>'+data[2].what +'</strong> - '+ data[2].total + ' events' );
		$('#e4').html( '<strong>'+data[3].what +'</strong> - '+ data[3].total + ' events' );
		$('#e5').html( '<strong>'+data[4].what +'</strong> - '+ data[4].total + ' events' );
	}); 
	//end of Top 5

}); //end of document ready

