let ticketPrice = 10;
let ticketCount = 0;
function openModal() {
  document.getElementById("ticketModal").style.display = "flex";
}
function addTickets() {
  let input = document.getElementById("ticketInput").value;
  ticketCount = parseInt(input);
  if (isNaN(ticketCount) || ticketCount <= 0) {
    alert("Please enter a valid number of tickets");
    return;
  }
  document.getElementById("ticketCount").innerText = ticketCount;
  document.getElementById("totalBill").innerText = ticketCount * ticketPrice;
  document.getElementById("ticketModal").style.display = "none";
 let backendPayment = ticketCount*ticketPrice*100;
}
// Function to proceed to payment
function pay() {
  if (ticketCount === 0) {
    alert("Please add tickets before proceeding.");
  } else {
    alert("Proceeding to payment...");
  }
}
window.onclick = function (event) {
  let modal = document.getElementById("ticketModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
