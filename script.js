"use strict";

// Selecting DOM elements
var ul = document.querySelector('#list');
var taskCount = document.querySelector('.count');
var msg = document.querySelector('.errormsg');

// Function to update task count
function TaskCount() {
    taskCount.textContent = `You have ${ul.children.length} task(s).`;
}

// Function to add a new task
function ajouter() {
    // Get the value from the input field
    var el = document.querySelector('#input').value;

    // Create a new list item
    var li = document.createElement('li');
    li.classList.add('bg-gray-100', 'p-3', 'rounded', 'flex', 'mb-2', 'relative', 'justify-between', 'items-center', 'task-item');

    // Create delete, edit, and checkbox icons
    var deleteIcon = document.createElement('span');
    deleteIcon.innerHTML = '<i class="fas fa-trash text-red-500 cursor-pointer"></i>';
    var editIcon = document.createElement('span');
    editIcon.innerHTML = '<i class="fas fa-edit text-blue-500 cursor-pointer"></i>';
    var checkboxIcon = document.createElement('span');
    checkboxIcon.innerHTML = '<i class="far fa-circle-check checkbox-circle unchecked-checkbox cursor-pointer"></i>';

    // Create a container for icons
    var iconsContainer = document.createElement('div');
    iconsContainer.classList.add('task-icons');
    iconsContainer.appendChild(editIcon);
    iconsContainer.appendChild(deleteIcon);

    // Append icons and task text to the list item
    li.appendChild(checkboxIcon);
    var taskText = document.createElement('span');
    taskText.textContent = el;
    taskText.classList.add('task-text');
    li.appendChild(taskText);
    li.appendChild(iconsContainer);

    // Add the new task to the list or display an error message if the input is empty
    if (el === '') {
        msg.textContent = 'You should write something!';
        msg.classList.remove('hidden');
    } else {
        msg.classList.add('hidden');
        ul.appendChild(li);
        document.querySelector('#input').value = '';
        TaskCount();
    }

    // Event listeners for delete, edit, and checkbox icons
    deleteIcon.addEventListener('click', function () {
        li.remove();
        TaskCount();
    });
    editIcon.addEventListener('click', function () {
        li.remove();
        document.querySelector('#input').value = el.trim();
    });
    checkboxIcon.addEventListener('click', function () {
        var checkbox = checkboxIcon.firstChild;
        var taskText = li.querySelector('.task-text');
        if (checkbox.classList.contains('unchecked-checkbox')) {
            checkbox.classList.remove('fa-circle');
            checkbox.classList.add('fa-circle-check');
            checkbox.classList.remove('unchecked-checkbox');
            checkbox.classList.add('checked-checkbox');
            li.classList.add('completed-task');
            taskText.classList.add('checked-text');
        } else {
            checkbox.classList.add('fa-circle');
            checkbox.classList.remove('fa-circle-check');
            checkbox.classList.add('unchecked-checkbox');
            checkbox.classList.remove('checked-checkbox');
            li.classList.remove('completed-task');
            taskText.classList.remove('checked-text');
        }
    });
}

// Event listener for the "Add" button
document.querySelector('#add').addEventListener('click', ajouter);
