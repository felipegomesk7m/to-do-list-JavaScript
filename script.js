const addBtn = document.getElementById('add-btn');
const taskClass = document.getElementById('task-class');

addBtn.addEventListener('click', () => {
    let textArea = document.getElementById('text');
    if (textArea.value === "") {
        console.log('Você adicionou um campo em vazio')
    } else {
        taskClass.innerHTML += `\n <input type="checkbox"> <label>${textArea.value}</label>`
        textArea.value = "";
    }
    
})