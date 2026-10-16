let form = document.querySelector(".form");

let input = document.querySelector(".input");

let ul = document.querySelector("ul");

let li = document.querySelector("li");

let list = JSON.parse(localStorage.getItem("list"))
list.forEach((task) => {
    toDoList(task);
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    toDoList()

})

function toDoList(task) {
    let newTask = input.value;
    if(task){
        newTask = task.name;
    }
    console.log(task);
    let list = document.createElement("li");
    if(task && task.checked){
        list.classList.add("checked");
    }
    list.innerText = newTask;
    ul.appendChild(list);
    input.value = "";

    const checkBtn = document.createElement("div");
    checkBtn.innerHTML = `<i class="fa-solid fa-square-check"></i>`;
    list.appendChild(checkBtn);

    const trashBtn = document.createElement("div");
    trashBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    list.appendChild(trashBtn);

    checkBtn.addEventListener("click", () => {
        console.log("Clicked");
        list.classList.toggle("checked");
        updateLocalStorage()
    });

    trashBtn.addEventListener("click", () => {
        list.remove();
        updateLocalStorage()
    });

    updateLocalStorage()
};

function updateLocalStorage() {
    const li = document.querySelectorAll("li");
    list = [];
    li.forEach((el) => {
        list.push({
            name: el.innerText,
            checked: el.classList.contains("checked"),
        })
    })

    localStorage.setItem("list", JSON.stringify(list));
}

