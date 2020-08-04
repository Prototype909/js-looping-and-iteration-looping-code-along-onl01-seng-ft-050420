function writeCards(name, event) {
  let thankYouCards = []
  for (let i = 0; i < name.length; i++) {
    thankYouCards.push('Thank you, ${name[i]}, for the wonderful ${event} gift!')
  }
  return thankYouCards
}



function writeCards( namesArray, event ) {
let thankYouCards = []
for ( let i = 0; i < namesArray.length; i++ ) {
  thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
}
return thankYouCards
}
