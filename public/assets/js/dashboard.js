$(document).ready(function(){

	$.get( window.location.origin + '/api/dashboard/state').done(function(data){
		console.log(data);

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
		colorSteps: 5,

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
		    autoZoom: true
		  },

		  valueLegend: {
		    right: 5,
		    minValue: "Few",
		    maxValue: "Many"
		  },

		  export: {
		    enabled: false
		  }

		});

	});

});

