var array = new Array();
render();
function render(){

    var todolist = "";

    for (let i = 0; i < array.length; i++) {
        const obj = array[i];
        const html = `
            <div>${obj.name}</div>
            <div>${obj.dueDate}</div>
            <button onclick="
                array.splice(${i},1);
                render();
            " class="del-btn">Delete</button>
        `; //generating the HTML instead of writing ;
        todolist += html;
    }
    document.querySelector(".tasks").innerHTML = todolist;
}

function addTodo() {
  const task = document.getElementById("inpt").value;
  const time = document.querySelector('.date').value ;
  array.push(
    {
        name:task,
        dueDate:time
    }
  );
  document.getElementById("inpt").value = "";
  render();
}
