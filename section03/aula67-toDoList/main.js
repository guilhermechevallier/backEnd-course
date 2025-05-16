document.addEventListener('click', function(e){
    const task = document.querySelector('.task');
    const taskker = task.getElementsByTagName('label');
    console.log(e.target);

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
        saveTask(taskker);

    }
    if (e.target.classList.contains('apagar')){
        //task.removeChild(e.target.parentNode); remove the task;
        task.removeChild(e.target.parentNode);
        saveTask(taskker);
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

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.classList.add('apagar');
    btn.innerText = 'x';

    div.appendChild(input);
    div.appendChild(label);
    div.appendChild(btn);
    return task.appendChild(div);
}

//salvar no banco do servidor web;
const saveTask = (taskker) => {
    const save = [];
    if (taskker.length >= 0) {
        for (let i = 0; i < taskker.length; i++) {
            save.push(taskker[i].innerText);
        }
    }
    //convert to JSON;
    const tarefasJSON = JSON.stringify(save);
    console.log(tarefasJSON);
    //Save to localStorage;
    localStorage.setItem('tarefas', tarefasJSON);
}
