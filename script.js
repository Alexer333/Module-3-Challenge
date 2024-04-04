// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data

const salaryCell = 0;

const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const AllEmployees = [];

  let decision = true;

  while(decision){
    const firstNameCell = prompt("Enter Employee First Name");
    const lastNameCell = prompt("Enter Employee Last Name");
    const salaryCell = prompt ("Enter Employee's Salary");
    if(isNaN(salaryCell) || salaryCell === null){
      salaryCell = 0;
    }
    let employee = {
      firstName: firstNameCell,
      lastName: lastNameCell,
      salary: salaryCell
    }
    decision = confirm("Do you want to add another employee?")

    AllEmployees.push(employee);
  } return AllEmployees;

}





// Display the average salary
// TODO: Calculate and display the average salary

const displayAverageSalary = function(collectEmployees){

let totalSalary = 0;

for (let i = 0; i < collectEmployees.length; i++) {
  const averageSalary = collectEmployees[i];
  totalSalary += parseInt(averageSalary.salary);
}

let averageSalary = totalSalary / collectEmployees.length; 

console.log(`The Average Salary Is: $${averageSalary.toFixed(2)}`);

}


// Select a random employee


const getRandomEmployee = function(collectEmployees) {
  // TODO: Select and display a random employee
  let random = Math.floor(Math.random() * collectEmployees.length);
  console.log(`The Random Employee Picked Is: ${collectEmployees[random].firstName} ${collectEmployees[random].lastName}`);
}




/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table

const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
