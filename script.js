let tasks = [
  { id: 1, description: 'imprimir boleto', level: 2 },
  { id: 2, description: 'estudar para a prova', level: 3 },
  { id: 3, description: 'beber 2L de agua', level: 1 },
  { id: 4, description: 'ler um livro', level: 1 },
  { id: 5, description: 'passeio com o cachorro', level: 1 },
];

const menuOptions = () => {
  alert(
    'Opções do Programa:\n' +
    '1. Listar Tarefas\n' +
    '2. Adicionar nova tarefa\n' +
    '3. Atualizar uma tarefa\n' +
    '4. Remover uma tarefa\n' +
    '5. Buscar uma tarefa por ID\n' +
    '0. Sair'
  );
};

const listAll = (tasks) => {
  console.log('--- Lista de Tarefas ---');
  tasks.map((task, index) => {
     console.log(`${task.id}. Tarefa: ${task.description}, Nível: ${task.level}`);
  });
}

const addTask = (tasks, newTask, level) => {
  const newId = Math.max(...tasks.map(task => task.id)) + 1;
  tasks.push({id: newId, description: newTask, level: level });
}

const updateTask = (tasks, id, newDescription, newLevel) => {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.description = newDescription;
    task.level = newLevel;
  } else {
    console.log(`Não foi possível encontrar a tarefa com ID ${id}`);
  }
}

const removeTaskById = (tasks, id) => {
  if (id < 0 || id >= tasks.length) {
    console.log('Índice inválido');
    return tasks;
  }
  const newTasks = [...tasks];
  newTasks.splice(index, 1);
  return newTasks
}

const searchTaskById = (tasks, id) => {
  const task = tasks.find(task => task.id === id);
 return task ? task : `Não foi possível encontrar a tarefa com ID ${id}`
}


const handleOption = (escolha) => {
  switch (escolha) {
    case '1':
      listAll(tasks);
      break;
    case '2':
      const newTask = prompt('Digite o nome da nova tarefa:');
      const level = parseInt(prompt('Qual o nível da tarefa (1-3):'));
      addTask(tasks, newTask, level);
      break;
    case '3':
      const idToUpdate = parseInt(prompt('Digite o ID da tarefa a ser atualizada:'));
      const newDescription = prompt('Digite a nova descrição da tarefa:');
      const newLevel = parseInt(prompt('Digite o novo nível da tarefa (1-3):'));
      updateTask(tasks, idToUpdate, newDescription, newLevel);
      break;
    case '4':
      const removeTask = parseInt(prompt('Digite o ID da tarefa a ser removida:'))
      tasks = removeTaskById(tasks, removeTask)
      break;
    case '5':
      const searchId = parseInt(prompt('Digite o ID da tarefa:'));
      const task = searchTaskById(tasks, searchId);
      console.log(task);
      break;
    case '0':
      alert('Saindo do programa.');
      break;
    default:
      alert('Opção inválida.');
      break;
  }
};

const startProgram = () => {
  let option = '';
  while (option !== '0') {
    menuOptions();
    option = prompt('Escolha uma opção:');
    handleOption(option);
  }
};

startProgram();