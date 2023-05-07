const taskList = document.querySelector('#task-list');
const newTaskInput = document.querySelector('#new-task');
const addTaskButton = document.querySelector('#add-task');

// Function to create a new task
function createTask(taskName) {
  const task = document.createElement('li');
  task.classList.add('task');

  const taskHeader = document.createElement('div');
  taskHeader.classList.add('task-header');

  const taskNameElement = document.createElement('span');
  taskNameElement.classList.add('task-name');
  taskNameElement.innerText = taskName;

  const deleteTaskButton = document.createElement('button');
  deleteTaskButton.classList.add('delete-task');
  deleteTaskButton.innerText = 'Delete Task';

  taskHeader.appendChild(taskNameElement);
  taskHeader.appendChild(deleteTaskButton);

  const topicList = document.createElement('ul');
  topicList.classList.add('topic-list');

  const newTopicInput = document.createElement('input');
  newTopicInput.classList.add('new-topic');
  newTopicInput.type = 'text';
  newTopicInput.placeholder = 'Add Topic...';

  const addTopicButton = document.createElement('button');
  addTopicButton.classList.add('add-topic');
  addTopicButton.innerText = 'Add Topic';

  task.appendChild(taskHeader);
  task.appendChild(topicList);
  task.appendChild(newTopicInput);
  task.appendChild(addTopicButton);

  // Function to create a new topic
  function createTopic(topicName) {
    const topic = document.createElement('li');
    topic.classList.add('topic');

    const topicCheckbox = document.createElement('input');
    topicCheckbox.type = 'checkbox';

    const topicLabel = document.createElement('label');
    topicLabel.innerText = topicName;

    const deleteTopicButton = document.createElement('button');
    deleteTopicButton.classList.add('delete-topic');
    deleteTopicButton.innerText = 'Delete Topic';

    topic.appendChild(topicCheckbox);
    topic.appendChild(topicLabel);
    topic.appendChild(deleteTopicButton);

    topicList.appendChild(topic);

    // Add event listener to delete topic button
    deleteTopicButton.addEventListener('click', function () {
      topic.remove();
    });

    // Add event listener to checkbox
    topicCheckbox.addEventListener('change', function () {
      if (topicCheckbox.checked) {
        topic.classList.add('completed');
      } else {
        topic.classList.remove('completed');
      }
    });
  }

  // Add event listener to add topic button
  addTopicButton.addEventListener('click', function () {
    const newTopicName = newTopicInput.value.trim();
    if (newTopicName !== '') {
      createTopic(newTopicName);
      newTopicInput.value = '';
    }
  });

  // Add event listener to delete task button
  deleteTaskButton.addEventListener('click', function () {
    task.remove();
  });

  return task;
}

// Add event listener to add task button
addTaskButton.addEventListener('click', function () {
  const newTaskName = newTaskInput.value.trim();
  if (newTaskName !== '') {
    const newTask = createTask(newTaskName);
    taskList.appendChild(newTask);
    newTaskInput.value = '';
  }
});
