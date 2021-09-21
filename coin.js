class Coin {
    constructor(name, ticker)
    {
    this.name = name;
    this.ticker = ticker;

    }
}
//returns undefined

class ProofOfWorkCoin extends Coin
    {
        constructor(name, ticker, amount, reward) {
            super(name, ticker);
            this.amount = amount;
            this.reward = reward;
        }
        mine() {
            this.amount += this.reward;
        }
    }
//returns undefined

    const btc = new ProofOfWorkCoin( 'Bitcoin', 'BTC', 18000000, 6.25);
//returns undefined
    '${BTC} ${BTC.amount}';
    //returns "Bitcoin (BTC) 18000000"
    btc.mine()
    //returns undefined
    '${BTC} ${BTC.amount}';
//returns "Bitcoin (BTC) 18000006.25"
btc.mine()
//returns undefined
'${BTC} ${BTC.amount}';
//returns "Bitcoin (BTC) 18000012.5"

//warning: 0.1+0.2 does not give .3 but adds dust.
