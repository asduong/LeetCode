/**
 * @param {number} n
 * @return {number}
 */
/*You are given an integer n, the number of teams in a tournament that has strange rules:

If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
Return the number of matches played in the tournament until a winner is decided. */
const numberOfMatches = (n, matches) => {
  let match = matches;
  if (n === 1) {
    return match;
  } else if (n % 2 === 0) {
    match = match + n / 2;
    n = n / 2;
    return numberOfMatches(n, match);
  } else if (n % 2 === 1) {
    match = match + (n - 1) / 2;
    n = (n - 1) / 2 + 1;
    return numberOfMatches(n, match);
  }
};

let matches = 0;
let n = 5;
console.log(numberOfMatches(n, matches));
