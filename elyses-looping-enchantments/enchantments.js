// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let total = 0;
  stack.forEach(cardB => {
    if (cardB === card) total++;
  });
  return total;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let total = 0;
  if (type == true) {
    for (let card of stack) {
      if (card % 2 == 0) total++;
    }
  } else {
    for (let card of stack) {
      if (card % 2 != 0) total++;
    }
  }
  return total;
}
