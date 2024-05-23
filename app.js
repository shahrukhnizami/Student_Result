var addnew = document.getElementById("addnew")
var userName = document.getElementById("userName")
var lastName = document.getElementById("lastName")
var math = document.getElementById("math")
var english = document.getElementById("english")
var urdu = document.getElementById("urdu")
var userlist = document.getElementById("Userlist")
var deleteall = document.getElementById("deleteall")






addnew.addEventListener('click',function(){
    if(!userName.value )return alert("Please Enter User")
    else if(!lastName.value) return alert("Plaese Enter Last Name")
        else if(!math.value) return alert("Plaese Enter Math Marks")
            else if(!english.value) return alert("Plaese Enter English Marks")
                else if(!urdu.value) return alert("Plaese Enter Urdu Marks")
                    var Obtmarks = +(parseFloat(math.value)+parseFloat(english.value)+parseFloat(urdu.value))

        var ItemName =`<tr>   
                            <td class="tdr">${userName.value}</td>
                             <td class="tdr">${lastName.value}</td>
                             <td class="tdr">${parseFloat(math.value)}</td>
                             <td class="tdr">${parseFloat(english.value)}</td>
                             <td class="tdr">${parseFloat(urdu.value)}</td>
                             <td>${(parseFloat(math.value)+parseFloat(english.value)+parseFloat(urdu.value))}</td>
                             
                             <td>${((Obtmarks/300)*100).toFixed(1)}% </td>
                             <td><span onclick="Editrow()" class="update px-3">Update</span><span onclick="delet(this)" class="delete">Delete</span></td>
                       </tr>`
        

    userlist.innerHTML += ItemName


    userName.value =""
    lastName.value=""
    math.value=""
    english.value=""
    urdu.value=""
    

})


deleteall.addEventListener("click", function(){
    userlist.innerHTML = `<table id="Userlist" class="table">
    <tr>
      <th scope="col">Student First Name</th>
      <th scope="col">Student Last Name</th>
      <th scope="col">Math</th>
      <th scope="col">English</th>
      <th scope="col">Urdu</th>
      <th scope="col">Total Marks</th>
      <th scope="col">Percentage</th>
    </tr> 

  </table>`
})

// function Editrow(){
   
//    var previousValue = this.parentElement.innerHTML
//    console.log(previousValue)
// }



function Editrow(){
  //console.log("edit=>",element.parentElement.parentElement)
    //console.log("edit=>",element.previousElementSibling.previousElementSibling.innerText)

   //var previousValue =  ItemName.lastName.value
   //console.log(previousValue)

    //var updatedValue = prompt("Edit Value",previousValue)
    //console.log(updatedValue)

    //element.previousElementSibling.innerText = updatedValue
}


function delet(element) {
    element.parentElement.parentElement.remove()

}



