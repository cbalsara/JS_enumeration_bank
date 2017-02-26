var assert = require("assert");
var Bank = require("../bank");

describe("Bank", function(){
  before(function(){
    bank1 = new Bank("RBS", []);
  });

it("should have a name", function(){
  assert.equal("RBS", bank1.name);
}),

it("should have no accounts in it", function(){
  managerResponse = bank1.checkAccounts();
  assert.equal("Sorry, no accounts to show", managerResponse)
})




});