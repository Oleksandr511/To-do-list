const button = document.querySelector('.input-container button');
const list = document.querySelector('.todo-list');
const input = document.querySelector('.input-container input');

button.addEventListener('click', () => {
    if (input.value != '') {
        console.log('Error!');
        const li = document.createElement('li');
        li.className = 'todo-list-item';

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';

        li.innerText = input.value;
        li.appendChild(deleteBtn); // Append delete button as a child of the li element
        list.appendChild(li);

        input.value = '';

        deleteBtn.addEventListener('click', () => {
            list.removeChild(li);
        })
    }
});
