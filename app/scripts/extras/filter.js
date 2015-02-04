'use strict';

angular.module('potatoApp').filter('displayAuthor', function() {
  return function(name) {
  	var str = name.replace(/\bnobody@flickr.com\b\s+/g, '');
  	return str.slice(1,str.length-1);
  };
}).filter('search', function($filter,$rootScope){
   return function(items, text){
      if (!text || text.length === 0)
        {return items;}
      
      // split search text on space
      var searchTerms = text.split(' ');
      
      // search for single terms.
      // this reduces the item list step by step
      searchTerms.forEach(function(term) {
        if (term && term.length){
          items = $filter('filter')($rootScope.dataSet, term);
      	}
      });

      return items;
   };
}).filter('tags',function(){
  return function(tagData) {
    return tagData.split(' ');
  };
}).filter('description', function(){
  return function(description){
    var d = description.split('<p>');
    //If no description then this will return a link in a paragraph, so remove the link leaving a blank.
    return d[d.length-1].replace(/<a\b[^>]*>(.*?)<\/a>/i,'');
  };
});