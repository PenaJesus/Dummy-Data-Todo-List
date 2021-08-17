console.log('connected')

    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
      {
      "userId": 14,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
  },
  {
      "userId": 20,
      "id": 2,
      "title": "delectus aut autem",
      "completed": false
  }]
  
  const fetchTodos = () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then( (response) => response.json())
      .then( (json) => arrayOfTodos = json)
  }
  
  const logTodos = () => {
      console.log(arrayOfTodos)
  }
  
  const populateTodos = () => {
    const ol = document.getElementById('todo-list')
    for (let index = 0; index < arrayOfTodos.length; index++) {
      const title = arrayOfTodos[index].title;
      let li = document.createElement('li');
      var text = document.createTextNode(title);
      if (arrayOfTodos[index].completed){
        li.style.color = 'green'
        
        let li = document.createElement('input');
        x.setAttribute('type' , 'checkbox');
        x.checked = true
      } else {
          li.style.color = 'red'
      }
      li.append(text)
      ol.append(li)
      li.appendChild()
    }
  }