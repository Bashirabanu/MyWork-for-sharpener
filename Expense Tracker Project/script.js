
        // Initializing Variables
        let expenses = [];
        let expenseAmount;
        let description;
        let expenseCategory;

        // Function to get data from input box and store in local storage
        function storeData(){
            expenseAmount = document.getElementById("expenseAmount").value;
            description = document.getElementById("description").value;
            expenseCategory = document.getElementById("expenseCategory").value;

            let expense = {
              amount: expenseAmount,
              desc: description,
              category: expenseCategory
            }

            expenses.push(expense);
            localStorage.setItem("expenses", JSON.stringify(expenses));

            let display = document.getElementById("displayData");
            display.innerHTML += `<tr>
            <td>${expense.amount}</td>
            <td>${expense.desc}</td>
            <td>${expense.category}</td>
            <td><button class="edit-btn" onclick="editData(${expenses.length - 1})">Edit Expense</button></td>
            <td><button class="delete-btn" onclick="deleteData(${expenses.length - 1})">Delete Expense</button></td>
            </tr><br>`;
        }

        // Function to edit data in local storage
        function editData(index){
            let editedExpense = prompt("Edit Expense Amount");
            expenses[index].amount = editedExpense;
            localStorage.setItem("expenses", JSON.stringify(expenses));
            window.location.reload();
        }

        // Function to delete data from local storage
        function deleteData(index){
            expenses.splice(index, 1);
            localStorage.setItem("expenses", JSON.stringify(expenses));
            window.location.reload();
        }

        // On page load, get data from local storage and display
        window.onload = function(){
            if(localStorage.getItem("expenses") != null){
                expenses = JSON.parse(localStorage.getItem("expenses"));
                let display = document.getElementById("displayData");
                for(let i = 0; i < expenses.length; i++){
                    display.innerHTML += `<tr>
                    <td>${expenses[i].amount}</td>
                    <td>${expenses[i].desc}</td>
                    <td>${expenses[i].category}</td>
                    <td><button class="edit-btn" onclick="editData(${i})">Edit</button></td>
                    <td><button class="delete-btn" onclick="deleteData(${i})">Delete</button></td>
                    </tr><br><br>`;
                }
            }
        }
    