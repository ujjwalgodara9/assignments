/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  var ans=new Array();
  
  for(var i=0;i<transactions.length;i++){
    var flag=0;
    for(var j=0;j<ans.length;j++){
      if(ans[j].category==transactions[i].category){
        ans[j].price+=transactions[i].price;
        flag=1;
        break;
      }
    }
    if(flag==0){
      ans.push({category:transactions[i].category,price:transactions[i].price});
    }
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
