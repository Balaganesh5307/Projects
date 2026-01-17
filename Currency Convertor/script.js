const rates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  INR: 83.5,
  JPY: 150
};

const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');
const resultDiv = document.getElementById('result');
const swapBtn = document.querySelector('.swap-icon');

function formatCurrency(amount, currency) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    }).format(amount);
}

function convertAndShow() {
  const amount = parseFloat(amountInput.value);
  
  // If invalid or empty, show placeholder
  if (isNaN(amount) || amountInput.value === '') { 
    resultDiv.innerHTML = '<span class="placeholder-text">Enter amount to see result</span>';
    resultDiv.classList.remove('has-result');
    return; 
  }

  const from = fromSelect.value;
  const to = toSelect.value;

  const fromRate = rates[from] ?? 1;
  const toRate = rates[to] ?? 1;

  const converted = amount * (toRate / fromRate);

  // UX Improvement: Better formatting
  resultDiv.classList.add('has-result');
  resultDiv.innerHTML = `
    <div class="result-text">
        ${formatCurrency(amount, from)} = 
        <span class="result-highlight">${formatCurrency(converted, to)}</span>
    </div>
  `;
}

// Event Listeners
amountInput.addEventListener('input', convertAndShow);
fromSelect.addEventListener('change', convertAndShow);
toSelect.addEventListener('change', convertAndShow);

// Swap Functionality
swapBtn.addEventListener('click', () => {
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    
    // Add a little rotation animation effect via CSS class toggling if desired, 
    // or just rely on the immediate update
    convertAndShow();
});

// Prevent form submission if user hits enter
document.getElementById('convert').addEventListener('click', function(e){ 
    e.preventDefault(); 
    convertAndShow(); 
});

// Initial call
convertAndShow();