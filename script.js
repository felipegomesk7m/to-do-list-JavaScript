const addBtn = document.getElementById('add-btn');
const task = document.getElementById('task');

addBtn.addEventListener('click', () => {
    let textArea = document.getElementById('text');
    task.innerHTML = `<input type="checkbox"> ${textArea.value}`
    
})