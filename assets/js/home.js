var date = $("#datepicker").datepicker({ dateFormat: 'dd-mm-yy' });

var addButton = $("#add-button");
var deleteButton = $("#delete-button");




addButton.click(function(){

    if($("#category").val() == "Choose a Category"){
        window.alert("Please choose a category"); 
    }else{
        addButton.attr("form", "create-task-form");
    }
});

