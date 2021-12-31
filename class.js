class account {
    constructor(name, accno, balance) {
        this.name = name;
        this.accno = accno;
        this.balance = balance;
        
    }
    getbalance() {
        return `The balance is: ₹${this.balance}`;  
    }
    withdraw(amount) {
        if(this.balance >= amount) {
            this.balance = this.balance - amount;
            console.log("debited amount",this.name, this.balance);
            return this.getbalance();
        }else {
        return `Insufficient balance. ${this.getbalance()}`;
    }
}
deposit(amount) {
  this.balance = this.balance + amount;
  return this.getbalance();
}
}
const naveen = new account("naveen", 3105, 2_85_900);
const preetha = new account("preetha", 3106, 2_95_450);
const sahithyan = new account("sahithyan", 3107, 2_40_100);
const shakthi = new account("shakthi", 3108, 3_00_340);

console.log(naveen);
console.log(preetha);
console.log(sahithyan);
console.log(shakthi);

console.log(naveen.getbalance());
console.log(preetha.getbalance());
console.log(sahithyan.getbalance());
console.log(shakthi.getbalance());

console.log(preetha.deposit(1_00_000));
console.log(naveen.deposit(1_00_000));
console.log(shakthi.deposit(1_00_000));

console.log(naveen.withdraw(3_85_901));
console.log(preetha.withdraw(80_000))



//task
