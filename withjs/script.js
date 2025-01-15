const applications = [];

function addApplication() {
  // Get form data
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const motherName = document.getElementById("motherName").value;
  const fatherName = document.getElementById("fatherName").value;
  const maritalStatus = document.getElementById("maritalStatus").value;

  // Add to applications array
  applications.push({ name, age, motherName, fatherName, maritalStatus });

  // Clear the form
  document.getElementById("applyForm").reset();

  // Redirect to the Check Status section
  window.location.hash = "#status";
  displayApplications();
}

function displayApplications() {
  const table = document.getElementById("applicationsTable");
  table.innerHTML = ""; // Clear the table

  applications.forEach((app, index) => {
    const row = `
      <tr>
        <td>${app.name}</td>
        <td>${app.age}</td>
        <td>${app.motherName}</td>
        <td>${app.fatherName}</td>
        <td>${app.maritalStatus}</td>
        <td><a href="#apply" class="edit-button" onclick="editApplication(${index})">Edit</a></td>
      </tr>
    `;
    table.innerHTML += row;
  });
}

function editApplication(index) {
  const app = applications[index];

  // Fill the form with application data
  document.getElementById("name").value = app.name;
  document.getElementById("age").value = app.age;
  document.getElementById("motherName").value = app.motherName;
  document.getElementById("fatherName").value = app.fatherName;
  document.getElementById("maritalStatus").value = app.maritalStatus;

  // Remove the old application
  applications.splice(index, 1);
}
