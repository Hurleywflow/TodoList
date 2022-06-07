const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = (todo) => {
  const html = /*html*/ `
    <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
        <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
  `;
  // append the template to the ul list
  list.innerHTML += html;
};
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // get value from input by name of the input field
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    // clear the input field
    addForm.reset();
  }
});
