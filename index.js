function writeCards(name, event) {
  let thankYouCards = []
  for (let i = 0; i < names.lenght; i++) {
    event[i] = 'Thank you, ${name[i]}, for the wonderful ${event} gift!';
  }
  return thankYouCards;
}
