const addBtn = document.getElementById('add-btn');
const taskClass = document.getElementById('task-class');

addBtn.addEventListener('click', () => {
    let textArea = document.getElementById('text');
    taskClass.innerHTML += `\n <input type="checkbox"> ${textArea.value}`
})