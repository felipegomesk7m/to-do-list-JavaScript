const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".inputField button");

inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if (userData.trim() != 0) {
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active");
    }
}

addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("Nova Tarefa");
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

function showTasks(){
    let getLocalStorageData = localStorage.getItem("New Todo");
    if(getLocalStorageData == null){
      listArray = [];
    }else{
      listArray = JSON.parse(getLocalStorageData); 
    }
    const pendingTasksNumb = document.querySelector(".pendingTasks");
    pendingTasksNumb.textContent = listArray.length; 
    if(listArray.length > 0){ 
      deleteAllBtn.classList.add("active"); 
    }else{
      deleteAllBtn.classList.remove("active"); 
    }
    let newLiTag = "";
    listArray.forEach((element, index) => {
      newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
    inputBox.value = ""; //once task added leave the input field blank
  }

function deleteTask(index){
    let getLocalStorageData = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1); //delete or remove the li
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks(); //call the showTasks function
  }
  // delete all tasks function
  deleteAllBtn.onclick = ()=>{
    listArray = []; //empty the array
    localStorage.setItem("New Todo", JSON.stringify(listArray)); //set the item in localstorage
    showTasks(); //call the showTasks function
  }