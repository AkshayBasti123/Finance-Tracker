const form = document.getElementById('transactionForm');
const transactionsDiv = document.getElementById('transactions');

form.addEventListener('submit', async e => {
    e.preventDefault();
    const desc = document.getElementById('desc').value;
    const amount = document.getElementById('amount').value;

    const res = await fetch('http://localhost:8080/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: desc, amount })
    });
    const data = await res.json();

    const div = document.createElement('div');
    div.className = 'transaction';
    div.textContent = `${data.description}: $${data.amount}`;
    div.style.opacity = 0;
    transactionsDiv.appendChild(div);
    setTimeout(() => { div.style.opacity = 1; }, 50); // simple fade-in
});
