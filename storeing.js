function showNewUserOnScreen(user){
    document.getElementById('email').value = '';
    document.getElementById('username').value = '';
    document.getElementById('phonenumber').value ='';
    if(localStorage.getItem(user.email) !== null){
        removeUserFromScreen(user.email)
    }
  
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user.name}> ${user.name} - ${user.email} - ${user.phonenumber}
                            <button onclick=deleteUser('${user.name}')> Delete User </button>
                            <button onclick=editUserDetails('${user.name}','${user.email}','${user.phonenumber}')>Edit User </button>
                         </li>`
  
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
  }
function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const phonenumber = event.target.phonenumber.value;
    const obj = {
        name,
        email,
        phonenumber
    }
    showNewUserOnScreen(obj)
    axios.post("https://crudcrud.com/api/7299cdb14e5b4af58d666ea825918e45/user",obj)
    .then((respone) =>  {
             showNewUserOnScreen(respone.data)
              console.log(respone)
    })
    .catch((err)=> {
              document.body.innerHTML =document.body.innerHTML + "<h4>Error 1</h4>"
             console.log(err)
    })
    
    
  }
  window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/7299cdb14e5b4af58d666ea825918e45/user")
    .then((respone) =>{
      console.log()
    })
    .catch((error)=>{
      console.log(error)
    })
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)
  
    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj)
    }
  })
  
  function editUserDetails( name,emailId, phonenumber){
    document.getElementById('username').value = name; 
    document.getElementById('email').value = emailId;
    document.getElementById('phonenumber').value =phonenumber;
  
    deleteUser(name,emailId, phonenumber)
  }
  
  // deleteUser('abc@gmail.com')
  
  function deleteUser(name,emailId, phonenumber){
    console.log(name,emailId, phonenumber)
    localStorage.removeItem(name,emailId, phonenumber);
    removeUserFromScreen(name,emailId, phonenumber);
  
  }
  
  function removeUserFromScreen(name,emailId, phonenumber){
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(name,emailId, phonenumber);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }
  }
