function init() {
    const cells = document.querySelectorAll('.square');
    cells.forEach(el => {
      el.addEventListener('dragover', ev => ev.preventDefault())
      el.addEventListener('drop', ev => {
        const data = ev.dataTransfer.getData("text/plain");
        ev.target.appendChild(document.getElementById(data));
      })
    });
  
    const pieces = document.querySelectorAll('.piece');
    cells.forEach(el => el.addEventListener('dragstart', ev => {
      ev.dataTransfer.setData("text/plain", ev.target.id);
      console.log(ev.target);
      ev.dataTransfer.dropEffect = "move";
    }));
  
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    init();
  });
  