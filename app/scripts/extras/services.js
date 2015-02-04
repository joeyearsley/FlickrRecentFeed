'use strict';

angular.module('potatoApp').service('timeDifferenceService', function() {
    this.workOut = function(Created) {
      function dayEnding(int){
            var b;
    		switch(int){
    		case 1: b = 'st';
    			break;
    		case 2: b = 'nd';
    			break;
    		case 3: b = 'rd';
    			break;
    		case 21: b = 'st';
    			break;
    		case 22: b = 'nd';
    			break;
    		case 23: b = 'rd';
    			break;
    		case 31: b = 'st';
    			break;
    		default: b = 'th';
    		}
    		return b;
    		
    	}
    	function monthString(a){
            var b;
    		switch(a){
            case 1: b = 'January';
                break;
            case 2: b = 'February';
                break;
            case 3: b = 'March';
                break;
            case 4: b = 'April';
                break;
            case 5: b = 'May';
                break;
            case 6: b = 'June'; 
                break;
            case 7: b = 'July';
                break;
            case 8: b = 'August';
                break;
            case 9: b = 'September';
                break;
            case 10: b = 'October';
                break;
            case 11: b = 'November';
                break;
            case 12: b = 'December';
                break;
            }
    		return b;
    	}

         var dtParts = Created.split('T').filter(function(str){ return str !== '';});
         var dParts = dtParts[0].split('-').filter(function(str){ return str !== '';});
         var date = dParts[2];
         date += dayEnding(parseInt(dParts[0],10));
         var month = monthString(parseInt(dParts[1],10));
         var year = dParts[0];
         var time = dtParts[1];
         var r = 'Published '+date.toString()+' '+ month.slice(0,3).toString()+' '+year.toString()+' at '+time.slice(0,5).toString();
         return r;

    };
});