let expenses = [];

function addExpense() {

    let title = document.getElementById("title").value;
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;
    let date = document.getElementById("date").value;

    if (title === "" || amount === "" || category === "" || date === "") {
        alert("Please fill all fields!");
        return;
    }

    let expense = {
        title: title,
        amount: Number(amount),
        category: category,
        date: date
    };

    expenses.push(expense);

    displayExpenses();

    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";
    document.getElementById("date").value = "";
}

function displayExpenses() {

    let list = document.getElementById("expenseList");

    list.innerHTML = "";

    let total = 0;

    expenses.forEach(function(expense, index) {

        total = total + expense.amount;

        list.innerHTML += `
            <tr>
                <td>${expense.title}</td>
                <td>₹${expense.amount}</td>
                <td>${expense.category}</td>
                <td>${expense.date}</td>
                <td>
                    <button class="delete" onclick="deleteExpense(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });

    document.getElementById("total").innerText = total;
}

function deleteExpense(index) {

    expenses.splice(index, 1);

    displayExpenses();
}
