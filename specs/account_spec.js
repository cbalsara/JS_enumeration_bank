var assert = require("assert");
var Account = require("../account");

describe("Account", function(){
  before(function(){
    account1 = new Account(1000, "Cyrus", "Personal");
  });

it("should have a balance", function(){
  assert.equal(1000, account1.balance)
}),

it("should have a holder name", function(){
  assert.equal("Cyrus", account1.name)
}),

it("should have an account type", function(){
  assert.equal("Personal", account1.type)
});








});