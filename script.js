const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');

function openModal() {
  document.body.style.overflow = 'hidden'; // Disable scroll on body
  modal.style.display = 'block';
}

function closeModal() {
  document.body.style.overflow = 'auto'; // Enable scroll on body
  modal.style.display = 'none';
}

openModalBtn.addEventListener('click', openModal);
