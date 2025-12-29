//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Container div
  const container = document.createElement("div");
  container.className = "container";
  body.appendChild(container);

  // Heading
  const heading = document.createElement("h1");
  heading.textContent = "MyBookList";
  container.appendChild(heading);

  // Form div
  const formDiv = document.createElement("div");
  formDiv.className = "form-group";
  container.appendChild(formDiv);

  // Title input
  const titleInput = document.createElement("input");
  titleInput.id = "title";
  titleInput.placeholder = "Book Title";
  formDiv.appendChild(titleInput);

  // Author input
  const authorInput = document.createElement("input");
  authorInput.id = "author";
  authorInput.placeholder = "Author";
  formDiv.appendChild(authorInput);

  // ISBN input
  const isbnInput = document.createElement("input");
  isbnInput.id = "isbn";
  isbnInput.placeholder = "ISBN#";
  formDiv.appendChild(isbnInput);

  // Submit button
  const submitBtn = document.createElement("button");
  submitBtn.id = "submit";
  submitBtn.textContent = "Add Book";
  formDiv.appendChild(submitBtn);

  // Table
  const table = document.createElement("table");
  table.className = "table table-striped";
  container.appendChild(table);

  // Table head
  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>ISBN#</th>
      <th>Action</th>
    </tr>
  `;
  table.appendChild(thead);

  // Table body
  const tbody = document.createElement("tbody");
  tbody.id = "book-list";
  table.appendChild(tbody);

  // Handle submit button
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const isbn = isbnInput.value.trim();

    if (!title || !author || !isbn) {
      alert("Please fill in all fields!");
      return;
    }

    // Create new row
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${title}</td>
      <td>${author}</td>
      <td>${isbn}</td>
      <td><button class="delete">Clear</button></td>
    `;

    tbody.appendChild(row);

    // Clear inputs
    titleInput.value = "";
    authorInput.value = "";
    isbnInput.value = "";

    // Add event listener to delete button
    row.querySelector(".delete").addEventListener("click", () => {
      row.remove();
    });
  });
});
