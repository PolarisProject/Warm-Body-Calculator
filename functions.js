var priceCalculator = document.getElementById('quote-calc');
priceCalculator.onchange = calculatesubtotal;
priceCalculator.onchange();
function calculatesubtotal() {
	var computers = Number(document.getElementById('computers').value) || 0;
	var extras = 0;
	var salesforce = 0;
	var serviceCloud = 0;
  var monitor = 0;
	var keyboard = 0;
	var mouse = 0;
	var adobeAcrobat = 0;
	var adobeCC = 0;
	var intranet = 0;
	var deskPhone = 0;
	var phoneHeadset = 0;
		if ( $( "#salesforce-col" ).hasClass( "on" ) ) {  salesforce = 99; }
		if ( $( "#serviceCloud-col" ).hasClass( "on" ) ) { serviceCloud = 29; }
    if ( $( "#monitor" ).hasClass( "on" ) ) { monitor = 150; }
		if ( $( "#keyboard" ).hasClass( "on" ) ) { keyboard = 15; }
		if ( $( "#mouse" ).hasClass( "on" ) ) { mouse = 15; }
		if ( $( "#adobeAcrobat" ).hasClass( "on" ) ) { adobeAcrobat = 55; }
		if ( $( "#adobeCC" ).hasClass( "on" ) ) { adobeCC = 245; }
		if ( $( "#intranet" ).hasClass( "on" ) ) { intranet = 36; }
		if ( $( "#deskPhone" ).hasClass( "on" ) ) { deskPhone = 80; }
		if ( $( "#phoneHeadset" ).hasClass( "on" ) ) { phoneHeadset = 100; }
	extras = salesforce + serviceCloud + monitor + keyboard + mouse + adobeAcrobat + adobeCC + intranet + deskPhone + phoneHeadset;
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
$('#keyboard').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// run function to remove all other 'ons' from other oftens
	} else {
		$$.removeClass('on');
	}
	calculatesubtotal();
})
$('#mouse').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// run function to remove all other 'ons' from other oftens
	} else {
		$$.removeClass('on');
	}
	calculatesubtotal();
})
$('#adobeAcrobat').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// run function to remove all other 'ons' from other oftens
	} else {
		$$.removeClass('on');
	}
	calculatesubtotal();
})
$('#adobeCC').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// run function to remove all other 'ons' from other oftens
	} else {
		$$.removeClass('on');
	}
	calculatesubtotal();
})
$('#intranet').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// run function to remove all other 'ons' from other oftens
	} else {
		$$.removeClass('on');
	}
	calculatesubtotal();
})
$('#deskPhone').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// run function to remove all other 'ons' from other oftens
	} else {
		$$.removeClass('on');
	}
	calculatesubtotal();
})
$('#phoneHeadset').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// run function to remove all other 'ons' from other oftens
	} else {
		$$.removeClass('on');
	}
	calculatesubtotal();
})
