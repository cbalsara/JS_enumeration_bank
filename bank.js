var Bank = function(bank_name){
  this.name = bank_name;
  this.accounts = []
};

Bank.prototype = {
  checkAccounts: function(){
    if(this.accounts = undefined|| this.accounts.length < 1){
      return "Sorry, no accounts to show"
    }
    else return this.accounts.length
  }
};

module.exports = Bank;