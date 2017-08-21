var priceCalculator = document.getElementById('quote-calc');
priceCalculator.onchange = calculatesubtotal;
priceCalculator.onchange();
function calculatesubtotal() {
	var computers = Number(document.getElementById('computers').value) || 0;
	var extras = 0;
	var salesforce = 0;
	var serviceCloud = 0;
  var monitor = 0;
		if ( $( "#salesforce-col" ).hasClass( "on" ) ) {  salesforce = 99; }
		if ( $( "#serviceCloud-col" ).hasClass( "on" ) ) { serviceCloud = 29; }
    if ( $( "#monitor" ).hasClass( "on" ) ) { monitor = 150; }
	extras = salesforce + serviceCloud + monitor;
	var subtotal = (computers + extras);
	document.getElementById("total").innerHTML = "$" + subtotal.toFixed(2);
}

$('#salesforce-col').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// run function to remove all other 'ons' from other oftens
	} else {
		$$.removeClass('on');
	}
	calculatesubtotal();
})
$('#serviceCloud-col').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// run function to remove all other 'ons' from other oftens
	} else {
		$$.removeClass('on');
	}
	calculatesubtotal();
})
$('#monitor').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// run function to remove all other 'ons' from other oftens
	} else {
		$$.removeClass('on');
	}
	calculatesubtotal();
})
