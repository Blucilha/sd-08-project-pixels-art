function addTable() {
    let table = document.querySelector('.table');

    for (let index = 0; index < 5; index += 1) {
        for (let index2 = 0; index2 < 5; index2 += 1) {
            let tableDiv = document.createElement('tr');
            tableDiv.className = 'pixel';
            table.appendChild(tableDiv);
        }
    }
}

addTable();
