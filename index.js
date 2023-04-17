


// JS LOGIN SECTION 

// Select the email input, name input & put in a variable.
var emailInput = document.querySelector(".email-input");
var passwordInput = document.querySelector(".psw-input");
var btn = document.querySelector(".login-btn");


// Add an eventListener to the variable.
btn.addEventListener('click', handleLogin);


function handleLogin(e){
    e.preventDefault;

    // create a ul element that will contain the users email input. 
    var newUl = document.createElement('ul');

    // Give the ul element a classname.
    newUl.classList.add('items');

    // create an li element  & append to the ul element.
    var newLi = document.createElement('li');
    newUl.appendChild(newLi);

    // Create textnodes (using the users email input) for the li  & append to the li element.
    var liText = document.createTextNode(emailInput.value);
    newLi.appendChild(liText);


    // append the ul element to the html doc
    var cont = document.querySelector('.container');
    var btn = document.querySelector(".login-btn");

    cont.insertBefore(newUl, btn);


    console.log(newUl);

}




// FAVORITE WORD SECTION 

var form = document.querySelector(".add-form");

var itemList = document.querySelector(".items");

var filter = document.querySelector(".search-input");


//  Form submit event
form.addEventListener('submit', addItem);

// Delete Item event
itemList.addEventListener('click', removeItem);

//  Filter Item event
filter.addEventListener("keyup", filterItem);



// The addItem Function
function addItem(e){
    e.preventDefault();
    
    // Get Input value
    var newItem = document.querySelector(".add-input").value;
    // Create a new li
    var li = document.createElement('li');
    // Give the new li a classname
    li.className = 'list-item';
    // Add a text node using the input value & append to the li element
    li.appendChild(document.createTextNode(newItem));
    

    // create the delete button element
    var deleteBtn = document.createElement('button');
    // Add the classname to this new delete btn
    deleteBtn.className = 'delete-btn';
    // create a textnode for this delete btn and append to the button element
    deleteBtn.appendChild(document.createTextNode('X'));
    // Append the delete btn to the li element
    li.appendChild(deleteBtn);


    // Append the new li to the ul element
    itemList.appendChild(li);


}


// The removeItem Function
function removeItem(e){
    if (e.target.classList.contains('delete-btn')){
        if (confirm("Are you sure you want to delete?")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }

    }
}



// The filterItem Function
function filterItem(e){

    // convert text to lowercase
    var text = e.target.value.toLowerCase();

    // Get list items as contained in the ul
    var liItems = itemList.getElementsByTagName('li');

    // convert the list items to an array

    Array.from(liItems).forEach(function(item){
        var liName = item.firstChild.textContent;
        if (liName.toLowerCase().indexOf(text) != -1){
            item.style.display = "block";
        } 
        else{
            item.style.display = "none";
        }
    })
}
