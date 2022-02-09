function showNewUserOnScreen(user){
    document.getElementById('email').value = '';
    document.getElementById('username').value = '';
    document.getElementById('phonenumber').value ='';
    // console.log(localStorage.getItem(user.username))
    if(localStorage.getItem(user.email) !== null){
        removeUserFromScreen(user.email)
    }
  
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
                            <button onclick=deleteUser('${user.email}')> Delete User </button>
                            <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}')>Edit User </button>
                         </li>`
  
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
  }
function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const phonenumber = event.target.phonenumber.value;
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    // localStorage.setItem('phonenumber', phonenumber)
    const obj = {
        name,
        email,
        phonenumber
    }
    //localStorage.setItem(obj.username, JSON.stringify(obj))
    showNewUserOnScreen(obj)
    axios.post("https://crudcrud.com/api/899d34b574be4bb09d08c085396580e7/user",obj)
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
    axios.get("https://crudcrud.com/api/899d34b574be4bb09d08c085396580e7/user")
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
  
