(function() {
  'use strict';

  angular.module('demo', [])
    .controller('MainController', MainController)

  function MainController() {
   
     
    var mainVm = this;
  
  mainVm.deleteItem = function(position)  {
  mainVm.items.splice(position, 1);
}


 
mainVm.addItem = function()  {

 mainVm.newitem.pid = mainVm.items.length + 1;
 mainVm.items.push(mainVm.newitem);
mainVm.newitem = null;
}


mainVm.edIt=function(itemlist){
	
mainVm.updateItem=itemlist;
	mainVm.isEdit=true;
}

mainVm.editItem = function(position){
	
	
	mainVm.isEdit=false;
	
}


    mainVm.items = [{
      "pid": 1,
      "pname": "Shampoo",
      "price": 210,
      "deldate": "1/15/2016"
    }, {
      "pid": 2,
      "pname": "Conditioner",
      "price": 260,
      "deldate": "1/15/2016"
    }, {
       "pid": 3,
      "pname": "Hair Dryer",
      "price": 204,
      "deldate": "1/15/2016"
    }, {
       "pid": 4,
      "pname": "Hair Color",
      "price": 230,
      "deldate": "1/15/2016"
    }]



  }
})();