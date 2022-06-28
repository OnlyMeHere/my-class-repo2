var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var itemInput = $('input[name="shopping-input"]')

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function displayItems(str){
    var item = $("<li>");
    item.text(str);
    shoppingListE1.append(item);
    $('input[name="shopping-input"]').val('');
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission

function formSubmit(event){
    event.preventDefault();
    displayItems(item)
}