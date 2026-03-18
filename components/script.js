let salesData = [];
let chartInstance = null;

// File Upload Handler
document.getElementById('csvUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(event) {
        const text = event.target.result;
        processCSV(text);
        
        // Reveal Dashboard with animation
        const dashboard = document.getElementById('dashboard');
        dashboard.classList.remove('hidden');
        dashboard.classList.add('animate__animated', 'animate__fadeIn');
        
        renderStats();
        renderCharts();
    };
    reader.readAsText(file);
});

function processCSV(csv) {
    const lines = csv.split('\n');
    salesData = lines.slice(1).map(line => {
        const cols = line.split(',');
        if (cols.length < 9) return null;
        return {
            age: parseInt(cols[4]),
            category: cols[5].trim(),
            quantity: parseInt(cols[6]),
            price: parseFloat(cols[7]),
            total: parseFloat(cols[8])
        };
    }).filter(row => row !== null);
}

function renderStats() {
    const total = salesData.length;
    const avg = salesData.reduce((sum, r) => sum + r.total, 0) / total;
    
    // Simple logic to find most frequent category
    const catMap = {};
    salesData.forEach(r => catMap[r.category] = (catMap[r.category] || 0) + 1);
    const topCat = Object.keys(catMap).reduce((a, b) => catMap[a] > catMap[b] ? a : b);

    document.getElementById('totalTrans').innerText = total.toLocaleString();
    document.getElementById('avgSpend').innerText = `$${avg.toFixed(2)}`;
    document.getElementById('topCat').innerText = topCat;
}

function renderCharts() {
    const ctx = document.getElementById('clusterChart').getContext('2d');
    if (chartInstance) chartInstance.destroy();

    // Take a sample for performance
    const sample = salesData.slice(0, 150);

    chartInstance = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Young/Budget',
                data: sample.filter(d => d.age < 35).map(d => ({x: d.age, y: d.total})),
                backgroundColor: '#3b82f6'
            }, {
                label: 'Established/Premium',
                data: sample.filter(d => d.age >= 35).map(d => ({x: d.age, y: d.total})),
                backgroundColor: '#10b981'
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'bottom' } },
            scales: {
                x: { title: { display: true, text: 'Customer Age' } },
                y: { title: { display: true, text: 'Spending ($)' } }
            }
        }
    });
}

function predictAmount() {
    const price = parseFloat(document.getElementById('predPrice').value) || 0;
    const qty = parseFloat(document.getElementById('predQty').value) || 0;
    
    // Regression logic from notebook: Total = Price * Qty
    const result = price * qty;
    
    const resultDisplay = document.getElementById('predictionResult');
    
    // Add a quick "pop" animation when updating
    resultDisplay.classList.remove('animate__animated', 'animate__headShake');
    void resultDisplay.offsetWidth; // trigger reflow
    resultDisplay.innerText = `$${result.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
    resultDisplay.classList.add('animate__animated', 'animate__headShake');
}