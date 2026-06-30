 

// ============================================
// AUTHENTICATION CHECK - Must be first!
// ============================================

// Check if user is logged in
let isUserLoggedIn = localStorage.getItem("isLoggedIn");
let currentUsername = localStorage.getItem("currentUser");

// If not logged in, redirect to login page
if (isUserLoggedIn !== "true" || currentUsername === null) {
    alert("Please login first!");
    window.location.href = "index.html";
}

// This code follows basic JavaScript DOM concepts:
// 1. SELECT elements from HTML (document.querySelector)
// 2. STORE data in variables (transactions array)
// 3. CREATE functions to do specific tasks
// 4. LISTEN for user events (addEventListener)
// 5. MANIPULATE the DOM (change HTML content and styling)
//


// Select buttons
const addBtn = document.querySelector("#form-open");
const cancelBtn = document.querySelector("#cancelBtn");
const logoutBtn = document.querySelector("#logoutBtn");
const userDisplay = document.querySelector("#userDisplay");

// Select form and inputs
const form = document.querySelector("#transactionForm");
const titleInput = document.querySelector("#title");
const amountInput = document.querySelector("#amount");
const categoryInput = document.querySelector("#category");

// Select display areas
const transactionList = document.querySelector("#transactionList");
const searchInput = document.querySelector("#search");
const filterSelect = document.querySelector("#filter");

// Select statistic cards
const balanceCard = document.querySelector("#balance");
const incomeCard = document.querySelector("#income");
const expenseCard = document.querySelector("#expense");
const transactionCountCard = document.querySelector("#transactionCount");

// Select modal and other elements
const modal = document.querySelector(".modal");
const darkModeCheckbox = document.querySelector(".switch input");
const resetDataBtn = document.querySelector(".reset");
const chartCanvas = document.querySelector("#chart");
 
// Display current user name
userDisplay.textContent = "👤 " + currentUsername;

// Load user's transactions from localStorage
// Each user's transactions are stored with their username as key
let userTransactionsKey = "transactions_" + currentUsername;
let savedTransactions = localStorage.getItem(userTransactionsKey);
let transactions = [];

// If user has saved transactions, load them
if (savedTransactions) {
    transactions = JSON.parse(savedTransactions);
}

let chart = null;

// Function to save transactions to localStorage
function saveTransactionsToStorage() {
    localStorage.setItem(userTransactionsKey, JSON.stringify(transactions));
}

 

 function updateStatistics() {
     let totalIncome = 0;
    let totalExpense = 0;

    for (let i = 0; i < transactions.length; i++) {
        let trans = transactions[i];
        
         
        if (trans.type === "Income") {
            totalIncome = totalIncome + trans.amount;
        } else if (trans.type === "Expense") {
            totalExpense = totalExpense + trans.amount;
        }
    }

     
    let balance = totalIncome - totalExpense;

     
    balanceCard.textContent = "$" + balance;
    incomeCard.textContent = "$" + totalIncome;
    expenseCard.textContent = "$" + totalExpense;
    transactionCountCard.textContent = transactions.length;

    
    updateChart(totalIncome, totalExpense);
}

 

function displayTransactions(listToShow) {
     
    transactionList.innerHTML = "";

     
    if (listToShow.length === 0) {
        transactionList.innerHTML = '<div class="empty">No transactions found!</div>';
        return;
    }

     
    for (let i = 0; i < listToShow.length; i++) {
        let trans = listToShow[i];

         
        let row = document.createElement("div");
        row.className = "transaction-row";

         
        row.innerHTML = `
            <span>${trans.date}</span>
            <span>${trans.title}</span>
            <span>${trans.category}</span>
            <span><span class="type-badge ${trans.type.toLowerCase()}">${trans.type}</span></span>
            <span class="amount-cell ${trans.type.toLowerCase()}">$${trans.amount}</span>
            <span><button class="delete-btn" onclick="deleteTransaction(${trans.id})">Delete</button></span>
        `;

        // Add this row to the page
        transactionList.appendChild(row);
    }
}

 

function filterTransactions() {
    let searchWord = searchInput.value.toLowerCase().trim();
    let selectedFilter = filterSelect.value;

    let filteredList = [];

    for (let i = 0; i < transactions.length; i++) {
        let trans = transactions[i];

         
        let titleMatches = trans.title.toLowerCase().includes(searchWord);

         
        let typeMatches = (selectedFilter === "All Types" || trans.type === selectedFilter);

         
        if (titleMatches && typeMatches) {
            filteredList.push(trans);
        }
    }

     
    displayTransactions(filteredList);
}

 

function renderTransactions() {
    displayTransactions(transactions);
    updateStatistics();
}


function deleteTransaction(transactionId) {
    // Create new list without the deleted transaction
    let newList = [];

    for (let i = 0; i < transactions.length; i++) {
        let trans = transactions[i];
        
        // Keep only transactions that don't match the ID
        if (trans.id !== transactionId) {
            newList.push(trans);
        }
    }

    // Replace transactions with new list
    transactions = newList;
    
    // Save transactions to localStorage
    saveTransactionsToStorage();

    // Refresh display
    renderTransactions();
    filterTransactions();

    console.log("Transaction deleted!");
}

 

function updateChart(totalIncome, totalExpense) {
     
    if (chart === null) {
        chart = new Chart(chartCanvas, {
            type: "bar",
            data: {
                labels: ["Income", "Expense"],
                datasets: [
                    {
                        label: "Amount ($)",
                        data: [totalIncome, totalExpense],
                        backgroundColor: ["#10b981", "#ef4444"],
                        borderColor: ["#059669", "#dc2626"],
                        borderWidth: 2,
                        borderRadius: 8,
                        hoverBackgroundColor: ["#059669", "#dc2626"]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            font: { size: 14, weight: "bold" },
                            padding: 20
                        }
                    },
                    tooltip: {
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        padding: 12,
                        titleFont: { size: 14, weight: "bold" },
                        bodyFont: { size: 13 },
                        callbacks: {
                            label: function(context) {
                                return "$" + context.parsed.y.toFixed(2);
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return "$" + value;
                            },
                            font: { size: 12 }
                        },
                        grid: { color: "rgba(0, 0, 0, 0.05)" }
                    },
                    x: {
                        ticks: {
                            font: { size: 13, weight: "bold" }
                        }
                    }
                }
            }
        });
    } else {
         chart.data.datasets[0].data = [totalIncome, totalExpense];
        chart.update();
    }
}

 

// When you clicks "Add Transaction" button
addBtn.addEventListener("click", function() {
    
    modal.classList.remove("hidden");
});

cancelBtn.addEventListener("click", function() {
     
    modal.classList.add("hidden");
});

 
form.addEventListener("submit", function(event) {
     
    event.preventDefault();

     
    let titleValue = titleInput.value.trim();
    let amountValue = amountInput.value;
    let categoryValue = categoryInput.value;

    
    let selectedTypeElement = document.querySelector("input[name='type']:checked");

     
    if (titleValue === "" || amountValue === "" || selectedTypeElement === null) {
        alert("Please fill all fields!");
        return;
    }

     
    let newTransaction = {
        id: Date.now(),  // Unique ID using current time
        title: titleValue,
        amount: Number(amountValue),
        category: categoryValue,
        type: selectedTypeElement.value,
        date: new Date().toLocaleDateString()
    };

    
    transactions.push(newTransaction);
    
    // Save transactions to localStorage
    saveTransactionsToStorage();

    renderTransactions();
    filterTransactions();

    form.reset();

    modal.classList.add("hidden");

    console.log("Transaction added!");
});

 
searchInput.addEventListener("input", function() {
    filterTransactions();
});

 
filterSelect.addEventListener("change", function() {
    filterTransactions();
});

 
darkModeCheckbox.addEventListener("change", function() {
     
    document.body.classList.toggle("dark-mode");

     
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

// When user clicks reset button
resetDataBtn.addEventListener("click", function() {
     
    let userConfirmed = confirm("Are you sure? This will delete all transactions!");

    if (userConfirmed) {
        // Clear all transactions
        transactions = [];
        
        // Save empty transactions to localStorage
        saveTransactionsToStorage();

        // Reset search and filter
        searchInput.value = "";
        filterSelect.value = "All Types";

        // Refresh display
        renderTransactions();
        filterTransactions();

        alert("All data has been deleted!");
    }
});

window.addEventListener("DOMContentLoaded", function() {
    // Load and display saved transactions
    renderTransactions();
    
    // Check if dark mode was enabled before
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeCheckbox.checked = true;
    }
});

// ============================================
// LOGOUT FUNCTIONALITY
// ============================================

// When user clicks logout button
logoutBtn.addEventListener("click", function() {
    // Ask for confirmation before logging out
    let confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {
        // Clear login status
        localStorage.setItem("isLoggedIn", "false");
        localStorage.setItem("currentUser", "");

        console.log("Logging out...");

        // Redirect to login page
        window.location.href = "index.html";
    }
});

