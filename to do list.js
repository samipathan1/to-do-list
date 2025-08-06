//Element ko select karna
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");


//Jab "add" button click ho
addBtn.addEventListener("click", ()=>{
  const taskText = taskInput.value.trim();  //input sy text lein, trim() sy space hataye

  if(taskText !== ""){

    //1. naya <li> banayein
    const li = document.createElement("li");
    li.textContent = taskText;

    //2. Delete button banayein
    const delBtn = document.createElement("span");
    delBtn.textContent = "❌";
    delBtn.classList.add("delete-Btn");

    //3. Jab delete button click ho to task hata do
    delBtn.addEventListener("click", ()=>{
        li.remove();

    });

    //4. li mein delete button add karein
    li.appendChild(delBtn)

    //5. List mein naya task add kraein
    taskList.appendChild(li);
    //6. Inut box khali kradein
    taskInput.value = "";
  }
});

