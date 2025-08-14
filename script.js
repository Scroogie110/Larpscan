// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// Wallet scan simulation
const scanButton = document.getElementById("scan-btn");
scanButton.addEventListener("click", () => {
    const walletInput = document.getElementById("wallet-input").value.trim();
    const resultBox = document.getElementById("scan-result");

    if (!walletInput) {
        resultBox.innerHTML = "<p style='color:red;'>Please enter a wallet address or username.</p>";
        return;
    }

    // Placeholder fake scan result
    resultBox.innerHTML = `
        <h3>Scan Report for: ${walletInput}</h3>
        <p>Balance: 2.34 SOL</p>
        <p>Transactions: 245</p>
        <p>Rug Projects Joined: 3</p>
        <p>LarpScore: 78/100</p>
    `;
});
