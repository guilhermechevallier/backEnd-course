document.addEventListener('click', function(e){
    if (e.target.classList.contains('btnConfirm')) {
        const task = document.querySelector('.task');
        const taskker = task.getElementsByTagName('label');
        const answerSearch = document.querySelector('#search').value;
        
        let index = 0;
        for (let i = 0; i <= taskker.length; i++){
            index = i;
        }
        if (index != taskker.length + 1){
            const iTask = index + 1;
            task.appendChild(appendTask(task, answerSearch, iTask));
        }
    }
});
const appendTask = (task, answerSearch,iTask) => {
    const div = document.createElement('div');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = `tarefa${iTask}`;
    input.name = `tarefa`;

    const label = document.createElement('label');
    label.setAttribute('for', `tarefa${iTask}`);
    label.innerText = answerSearch;

    div.appendChild(input);
    div.appendChild(label);
    return task.appendChild(div);
}
