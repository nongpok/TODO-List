//setting the date format for the input date
var date = $("#datepicker").datepicker({ dateFormat: 'mm-dd-yy' });

//fetching the add an delete button
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
        //setting the link for the add button 
        addButton.attr("form", "create-task-form");
    }
});


//handling the click event on DELETE TASK BUTTON
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
deleteButton.click(function(){
    //creating an array of the checkboxes id's which are checkked
    let ids = new Array();
    for(let checkbox of checkboxes){
        if(checkbox.checked){
            ids.push(checkbox.id);
        }
    }

    //if the array is empty no delete operation wil be performed  
    if(ids.length == 0){
        window.alert("Please select at least one task to delete");
    }else{
        window.alert("Selected tasks will be deleted");
    }
    
    //appending the list of ids into the query params for passing it with the url
    let queryParams = "/delete-task/?"
    let count=0;
    for(let id of ids){
        queryParams = queryParams + "id" + count + "=" + id;
        if(count < ids.length - 1){
            queryParams = queryParams + "&";
        }
        count++;
    }

    //setting the link for the delete button
    deleteButton.attr("href", queryParams);
});




