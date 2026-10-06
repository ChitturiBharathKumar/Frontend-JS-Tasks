class BankAccount {
  constructor(accName, accHldName) {
    this.accName = accName;
    this.accHldName = accHldName;
  }
  displayBankDet() {
    console.log("Account Number :", this.accName);
    console.log("Account Holder Name :", this.accHldName);
  }
}

class BankBlc extends BankAccount {
  constructor(accName, accHldName, accBlc) {
    super(accName, accHldName);
    this.accBlc = accBlc;
  }
  displayBankBlcDet() {
    super.displayBankDet();
    console.log("Account Balance :", this.accBlc);
  }
}

class BankType extends BankBlc {
  constructor(accName, accHldName, accBlc, accType) {
    super(accName, accHldName, accBlc);
    this.accType = accType;
  }
  displayBankTypeDet() {
    super.displayBankBlcDet();
    console.log("Account Type :", this.accType);
  }
}

let bt = new BankType(1001,"Hero1",20000,"Saving");
bt.displayBankTypeDet();