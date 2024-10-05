/* Energy Cost Calculator */

let price = parseFloat(prompt("Unit Price (kWh)")).toFixed(2);

function monthly(price) {
  let title = document.querySelectorAll(".padded thead tr")[1];
  let addTitle = title.insertCell(7);
  addTitle.innerHTML = "Electricity\r\nBill";
  addTitle.classList.add("bold");

  for (i = 0; i < 12; i++) {
    let cell = document.querySelectorAll(".padded tbody")[1];
    let numCell = cell.children[i].cells[5].outerText.split(" ");
    usage = Number(numCell[0]);
    let yaz = cell.children[i].insertCell(7);
    yaz.innerHTML = (usage * price).toFixed(2);
  }
}

function daily(price) {
  let title = document.querySelectorAll(".padded thead tr")[0];
  let addTitle = title.insertCell(7);
  addTitle.innerHTML = "Electricity\r\nBill";
  addTitle.classList.add("bold");

  for (i = 0; i <= 30; i++) {
    let cell = document.querySelectorAll(".padded tbody")[0];
    let numCell = cell.children[i].cells[5].outerText.split(" ");
    usage = Number(numCell[0]);
    let yaz = cell.children[i].insertCell(7);
    yaz.innerHTML = (usage * price).toFixed(2);
  }
}

monthly(price);daily(price);