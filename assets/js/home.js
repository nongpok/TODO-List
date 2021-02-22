//setting the date format for the input date
var date = $("#datepicker").datepicker({ dateFormat: 'mm-dd-yy' });

var addButton = $("#add-button");
var deleteButton = $("#delete-button");

//date handler function
for (let date of document.querySelectorAll('.date'))
{
    date.innerText=date.innerText.toString().substring(0, 15);
}


//handling the click event of the ADD TASK BUTTON
addButton.click(function(){

    if($("#category").val() == "Choose a Category"){
        window.alert("Please choose a category"); 
    }else{
        addButton.attr("form", "create-task-form");
    }
});


//handling the click event on DELETE TASK BUTTON

var checkboxes = document.querySelectorAll('input[type="checkbox"]');
deleteButton.click(function(){
    let ids = new Array();
    for(let checkbox of checkboxes){
        if(checkbox.checked){
            ids.push(checkbox.id);
        }
    }

    if(ids.length == 0){
        window.alert("Please select at least one task to delete");
    }else{
        window.alert("Selected tasks will be deleted");
    }
    
    let queryParams = "/delete-task/?"
    let count=0;
    for(let id of ids){
        queryParams = queryParams + "id" + count + "=" + id;
        if(count < ids.length - 1){
            queryParams = queryParams + "&";
        }
        count++;
    }


    deleteButton.attr("href", queryParams);
    
    
});




