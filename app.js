const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const txtIds = ['monT', 'tueT', 'wedT', 'thuT', 'friT', 'satT', 'sunT'];

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < days.length; i++) {
      const day = document.getElementById(days[i]);
      day.style.height = (data[i].amount * 3) + "px";
      day.addEventListener("mouseover", function() {
        const txtId = txtIds[i];
        const txt = document.getElementById(txtId);
        txt.style.top = 20;
        txt.classList.remove("hidden");
      });
      day.addEventListener("mouseout", function() {
        const txtId = txtIds[i];
        const txt = document.getElementById(txtId);
        txt.classList.add("hidden");
      });
    }
  })
  .catch(error => console.log(error));