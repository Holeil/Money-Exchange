// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var errors = {
      error: "You are rich, my friend! We don\'t have so much coins for exchange"
    };
    if(currency > 10000) return errors;
    const H = 50, Q = 25, D = 10, N = 5, P = 1;
    var c = [0, 0, 0, 0, 0];
    var coins = {
    };
    (function find(currency) {
      if(currency >= H) {
        c[0]++;
        return find(currency-H);
      }
      else if(currency >= Q) {
        c[1]++;
        return find(currency-Q);
      }
      else if(currency >= D) {
        c[2]++;
        return find(currency-D);
      }
      else if(currency >= N) {
        c[3]++;
        return find(currency-N);
      }
      else if(currency >= P) {
        c[4]++;
        return find(currency-P);
      }
      else if(currency == 0) return 0;
    })(currency);
    if(c[0] > 0) coins.H = c[0];
    if(c[1] > 0) coins.Q = c[1];
    if(c[2] > 0) coins.D = c[2];
    if(c[3] > 0) coins.N = c[3];
    if(c[4] > 0) coins.P = c[4];
    return coins;
}
