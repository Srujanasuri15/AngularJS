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
     
    }]



  }
})();
