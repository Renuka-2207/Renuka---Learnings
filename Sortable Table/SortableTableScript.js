var switching;

function ascendingFirstName() {
    var table, i, shouldSwitch, x, y, rows;
    table = document.getElementById("mytable");
    switching = true;
    var btn1 = document.getElementById("btn1");
    var btn1a = document.getElementById("btn1a");
    btn1.parentElement.setAttribute("aria-sort", "Ascending");
    btn1.style.display = "none";
    btn1a.style.display = "block";

    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
//Function to sort the rows in descending order for first name.
function descendingFirstName() {
    var table, i, shouldSwitch, x, y, rows;
    table = document.getElementById("mytable");
    switching = true;
    var btn1 = document.getElementById("btn1");
    var btn1a = document.getElementById("btn1a");
    
    btn1.style.display = "block";
    btn1a.style.display = "none";
    btn1a.parentElement.setAttribute("aria-sort", "Descending");

    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

//Function to sort the rows in ascending order based on last name.
function ascendingLastName() {
    var table, i, shouldSwitch, x, y, rows;
    table = document.getElementById("mytable");
    switching = true;
    var btn2 = document.getElementById("btn2");
    var btn2a = document.getElementById("btn2a");
    btn2.style.display = "none";
    btn2a.style.display = "block";
    btn2.parentElement.setAttribute("aria-sort", "Ascending");

    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[1];
            y = rows[i + 1].getElementsByTagName("TD")[1];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

//Function to sort the rows in descending order based on last name.
function descendingLastName() {
    var table, i, shouldSwitch, x, y, rows;
    table = document.getElementById("mytable");
    switching = true;
    var btn2 = document.getElementById("btn2");
    var btn2a = document.getElementById("btn2a");
    btn2.style.display = "block";
    btn2a.style.display = "none";
    btn2a.parentElement.setAttribute("aria-sort", "Descending");

    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[1];
            y = rows[i + 1].getElementsByTagName("TD")[1];
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
