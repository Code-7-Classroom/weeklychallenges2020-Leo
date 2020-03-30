var i = 0;
var images = [];
var time = 3000;

//Images list 
images[0] = 'Pictures/backpack on tree.jpeg';
images[1] = 'Pictures/old backpack.jpeg';
images[2] = 'Pictures/pink backpack.jpeg';
images[3] = 'Pictures/blue backpack.jpeg';
images[4] = 'Pictures/black leather backpack.jpeg';

function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}


window.onload = changeImg;



function validateForm() {
    var x = document.forms["form"]["name"].value;
    var y = document.forms["form"]["email"].value;
    if (x == "" && y == "") {
      alert("Name and email must be filled out");
      return false;
    } else if (x == ""){
        alert("Name must be filled out");
        return false;
    } else if (y == "") {
        alert("Email must be filled out")
        return false;
    } else {
        return true
    }
  }

window.onload = noalert.validateForm(true);
  validateForm();


var travel = document.getElementsByClassName


//Products filter

var items = document.getElementsById('flex-container');
function filterItems() {
    var type = document.getElementById("filterSelect").value;
    for (var i = 0; i < items.length; i++){
        var itemType= items[i].getElementsByClassName("item__type");
        var itemTypeValue= itemType[0].innerText;
        if(itemTypeValue == type){
            items[i].style.display = '';
        }
        else if(type == 'default'){
            items[i].style.display = '';
        }
        else{
            items[i].style.display = 'none';
        }
    }
}
