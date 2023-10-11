const creditCards = document.querySelectorAll('.credit-card');
creditCards.forEach(card => card.addEventListener('click', () => card.classList.toggle('flipCard')));

