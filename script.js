// Année automatique dans le pied de page
document.getElementById('year').textContent = new Date().getFullYear();

// Petit retour visuel lorsqu'une séance est sélectionnée
document.querySelectorAll('.lesson-card').forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.add('selected');
  });
});
