var date = $("#datepicker").datepicker({ dateFormat: 'mm-dd-yy' });

var addButton = $("#add-button");
var deleteButton = $("#delete-button");

addButton.click(function(){
    if($("#category").val() == "Choose a Category"){
        window.alert("Please specify category");
    }
});

