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
  axios.post("https://crudcrud.com/api/42fac32cc49442d58a3cf398737b48fc/myData",obj)
  .then((respone) =>  {
           showNewUserOnScreen(respone.data)
            console.log(respone)
  })
  .catch((err)=> {
            document.body.innerHTML =document.body.innerHTML + "<h4>Something went wrong</h4>"
           console.log(err)
  })
  //localStorage.setItem(obj.email, JSON.stringify(obj))
  //showNewUserOnScreen(obj)
}

window.addEventListener("DOMContentLoaded", () => {
  axios.get("https://crudcrud.com/api/42fac32cc49442d58a3cf398737b48fc/myData")
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

function showNewUserOnScreen(user){
  document.getElementById('email').value = '';
  document.getElementById('username').value = '';
  document.getElementById('phonenumber').value ='';
  // console.log(localStorage.getItem(user.emailId))
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

//Edit User

function editUserDetails(emailId, name, phonenumber){

  document.getElementById('email').value = emailId;
  document.getElementById('username').value = name;
  document.getElementById('phonenumber').value =phonenumber;

  deleteUser(emailId)
}

// deleteUser('abc@gmail.com')

function deleteUser(emailId){
  console.log(emailId)
  localStorage.removeItem(emailId);
  removeUserFromScreen(emailId);

}

function removeUserFromScreen(emailId){
  const parentNode = document.getElementById('listOfUsers');
  const childNodeToBeDeleted = document.getElementById(emailId);
  if(childNodeToBeDeleted) {
      parentNode.removeChild(childNodeToBeDeleted)
  }
}
