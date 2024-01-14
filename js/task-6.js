function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input');
    const createBtn = document.querySelector('[data-create]');
    const destroyBtn = document.querySelector('[data-destroy]');
    const boxesContainer = document.getElementById('boxes');

    function createBoxes(amount) {
      let size = 30;
      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);
        size += 10;
      }
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }

createBtn.addEventListener('click', () => {
      destroyBoxes();
      const amount = parseInt(input.value);
      if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = '';
      } else {
        alert('Please enter a number between 1 and 100');
      }
    });

    destroyBtn.addEventListener('click', destroyBoxes);