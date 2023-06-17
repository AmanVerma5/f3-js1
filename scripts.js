let arr=[];
let id=1;

function addUser(){
    let form=document.getElementById("addEmployee");
    let name=form.name.value;
    let profession=form.profession.value;
    let age=form.age.value;
    let allInputsFilled=checkValid(name,profession,age);
    if(allInputsFilled){
        showSuccessMsg();
        let employee={
            id:id,
            name:name,
            profession:profession,
            age:age
        }
        arr.push(employee);
        displayEmployee();
    }
}


function checkValid(name,profession,age){
    if(name!=='' && profession!=='' && age!=='') return true;
    showErrorMsg();
}

function showErrorMsg(){
    let message=document.getElementById("showMsg");
    message.innerText="Error : Please Make sure All the fields are filled before adding in an employee !"
    message.style.color="red";
}
function showSuccessMsg(){
    let message=document.getElementById("showMsg");
    message.innerText="Success : Employee Added!"
    message.style.color="green";
}


{/* <div class="add-employee">
            <div class="new-employee">
                <p class="id">1.</p>
                <p class="name">Name: John</p>
                <p class="profession">Profession: Developer</p>
                <p class="age">Age: 18</p>
            </div>
            <button type="button" class="delete-user">Delete User</button>
        </div>
    </div> */}


function displayEmployee(){
    let hideMsg=document.getElementById("initialMsg");
    hideMsg.style.display="none";
    let newemployee=document.createElement("div");
    newemployee.className="add-employee";
    newemployee.id=`${id}`
    newemployee.innerHTML=`<div class="new-employee">
                                <p class="id">${id}.</p>
                                <p class="name">Name: ${arr[arr.length-1].name}</p>
                                <p class="profession">Profession: ${arr[arr.length-1].profession}</p>
                                <p class="age">Age: ${arr[arr.length-1].age}</p>
                            </div>
                            <button type="button" class="delete-user" onclick="deleteUser(${id})">Delete User</button>`

    let container=document.getElementById("container");                         
    container.append(newemployee);
    id++;
}
function deleteUser(id){
    let message=document.getElementById("showMsg");
    message.innerText='';
    let div=document.getElementById(`${id}`);
    div.remove();
    for(let i=0;i<arr.length;i++){
        if(arr[i].id==id){
            arr.splice(i,1);
            break;
        }
    }
    
    if(arr.length==0){
    let hideMsg=document.getElementById("initialMsg");
    hideMsg.style.display="block";
    }
    console.log(arr);
}