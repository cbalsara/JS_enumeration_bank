var Account = function(account_balance, account_name, account_type){
  this.balance = account_balance;
  this.name = account_name;
  this.type = account_type;
};

module.exports = Account;