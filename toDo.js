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
  
  const ol = document.getElementById('todo-list');

  const populateTodos = (arr) => {
    
    for (let index = 0; index < arr.length; index++) {
      const title = arr[index].title;


      let li = document.createElement('li');
      var text = document.createTextNode(title);
      if (arr[index].completed){
        li.style.color = 'green'
        
      } else {
          li.style.color = 'red'
      }
      li.append(text)
      ol.append(li)
    }
  }

  document.getElementById('populate').addEventListener('click', function(){
    populateTodos(arrayOfTodos)
  })
    
  

    const filterUserId = () => {
      ol.innerHTML = ''
      let userId = document.querySelector('#inputUserID');
       arrayOfTodos = arrayOfTodos.filter(todo => {
        return todo.userId == userId.value;
      })
      console.log(arrayOfTodos)
          populateTodos(arrayOfTodos) 
        
         userId.value = ''
        
        }
      
    
  
   const removeLi = () => {
     ol.innerHTML = " ";
      
   }
//pass in an array 
   const completedLi = () => {
    ol.innerHTML = " ";
     let complete = document.querySelector('#complete');
     arrayOfTodos = arrayOfTodos.filter(todo => {
       return todo.completed === true
     })
     populateTodos(arrayOfTodos) 

   }

   const inCompleteLi = () => {
    ol.innerHTML = " ";
     let inComplete = document.querySelector('#inComplete');
     arrayOfTodos = arrayOfTodos.filter(todo => {
       return todo.completed === false
     })
     populateTodos(arrayOfTodos) 

   }