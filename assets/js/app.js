// Spreadsheet Data
let spreadsheet = [];
const rows = 20; // Number of rows
const cols = 10; // Number of columns
const formulaBar = document.getElementById('formula-bar');
const sheetBody = document.getElementById('sheet-body');

// Initialize spreadsheet with empty cells
for (let i = 0; i < rows; i++) {
    spreadsheet[i] = [];
    for (let j = 0; j < cols; j++) {
        spreadsheet[i][j] = '';
    }
}

// Function to generate the spreadsheet UI
function generateSpreadsheet() {
    // Generate header row
    const headerRow = document.getElementById('header-row');
    for (let j = 0; j < cols; j++) {
        const th = document.createElement('th');
        th.innerText = String.fromCharCode(65 + j); // Column letters (A, B, C, ...)
        headerRow.appendChild(th);
    }

    // Generate cell rows
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.contentEditable = true;
            td.dataset.row = i;
            td.dataset.col = j;
            td.addEventListener('input', (e) => updateCellData(e));
            tr.appendChild(td);
        }
        sheetBody.appendChild(tr);
    }
}

// Update cell data in the spreadsheet
function updateCellData(e) {
    const row = e.target.dataset.row;
    const col = e.target.dataset.col;
    spreadsheet[row][col] = e.target.innerText;
}

// Update the formula bar input
function updateFormula() {
    const formula = formulaBar.value.trim();
    // Handle formulas like SUM, AVERAGE here (simplified for now)
    if (formula === '=SUM(A1:B2)') {
        alert("SUM function not implemented yet.");
    }
}

// Basic text formatting for selected cells
function formatCell(command) {
    const selectedCells = document.querySelectorAll('td:focus');
    selectedCells.forEach(cell => {
        if (command === 'bold') {
            cell.classList.toggle('bold');
        } else if (command === 'italic') {
            cell.classList.toggle('italic');
        } else if (command === 'increaseFont') {
            cell.style.fontSize = 'larger';
        } else if (command === 'decreaseFont') {
            cell.style.fontSize = 'smaller';
        }
    });
}

// Initialize the spreadsheet
generateSpreadsheet();
