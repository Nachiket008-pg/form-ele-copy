let show = document.getElementById("old")
show.style.display = "none"

function view(){
    show.style.display="block"
}
function hide(){
    show.style.display="none"
}

function preview(){
    new_name = document.getElementById("firstName").value;
    mynew_name = new_name;
    document.getElementById("name").innerText = "Entered Name is : "
    document.getElementById("myName").innerHTML = ( mynew_name)

   new_middle_name = document.getElementById("midName").value
   mynew_midname = new_middle_name;
   document.getElementById("newmidName").innerText = "Entered mid name is : "
   document.getElementById("middleName").innerText = (mynew_midname)

   new_last_name = document.getElementById("lastName").value
   newlastname = new_last_name
   document.getElementById("newlastname").innerText = "Entered last name is : "
   document.getElementById("mylastName").innerHTML = (newlastname)

   new_dob = document.getElementById("myDate").value
   dob = new_dob
   document.getElementById("dob").innerText = "Entered DOB is : "
   document.getElementById("mydob").innerHTML = (dob)

}