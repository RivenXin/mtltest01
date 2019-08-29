setTimeout(function() {
	//openNextPage();
},1000);

function button01() {
	alert("jump to next page.");
	navigator({
		page: "page01/index.html",
		parameters:{
			key: "value"
		},
		fail: function(err) {
			alert(err.message);
		}
	});
}