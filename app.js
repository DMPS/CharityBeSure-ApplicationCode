var accountid = ["65468154-d0d4-4a4e-b743-89d794f2c0dd","53de89f2-3d31-4841-a3d2-bc1287de7c18","fa3b7550-fc11-4c84-aadc-337df4e6f2bb"];
console.log(accountid);
console.log(accountid[1]);
function results(){
	$( "#posOL" ).empty();
	$("#negOL").empty();
	console.log("function is called!");
	$.getJSON( "https://apisandbox.openbankproject.com/obp/v1.2.1/banks/obp-bank-x-r/accounts/"+accountid[($( "#charitySelector" ).val()-1)]+"/public/transactions", function( data ) {
		console.log(data.transactions);
		$.each( data.transactions, function(i,transaction){
			var unixDate = new Date(transaction.details.completed);
			console.log( transaction.other_account.holder.name + ": " + transaction.details.value.amount + " " +transaction.details.new_balance.currency);
			if (transaction.details.value.amount>0){
				$("#posOL").append("<li>"+ unixDate.getDay() + "/"+ unixDate.getMonth() + "/" + unixDate.getFullYear() + " " + transaction.other_account.holder.name + ": " + transaction.details.value.amount + " " +transaction.details.value.currency + "</li>");
			}
			else {
				$("#negOL").append("<li>"+ unixDate.getDay() + "/"+ unixDate.getMonth() + "/" + unixDate.getFullYear() + " " + transaction.other_account.holder.name + ": " + transaction.details.value.amount + " " +transaction.details.value.currency + "</li>");
			}
		});
	})
}

$(function searchbox() {
	var availableTags = [
	"Oxfam",
	"Cancer Research UK",
	"International Alert"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  });