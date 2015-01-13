var $rem1     = $('#rem-1'),
	$rem2     = $('#rem-2'),
	$rem3     = $('#rem-3'),
	$rem4     = $('#rem-4'),
	$rem5     = $('#rem-5'),
	$rem6     = $('#rem-6'),
	$min1     = $('#fig-1'),
	$min2     = $('#fig-2'),
	$min3     = $('#fig-3'),
	$min4     = $('#fig-4'),	
	$min5     = $('#fig-5'),	
	$min6     = $('#fig-6'),
	$mod1     = $('.modelo1'),
	$mod2     = $('.modelo1'),	
	$mod3     = $('.modelo1'),
	$s        = $('.s'),
	$m        = $('.m'),
	$l        = $('.l'),
	$small    = $('.small'),
	$medium   = $('.medium'),
	$large    = $('.large'),
	$btnCom1    = $('.comprar1'),
	$btnCom2    = $('.comprar2'),
	$btnCom3    = $('.comprar3');
	
	
function apareceRemera1() {
		$rem1.slideDown(500);
		$rem2.css('display','none' );
		$rem3.css('display','none' );
		$rem4.css('display','none' );
		$rem5.css('display','none' );
		$rem6.css('display','none' );
		$mod1.slideDown(500);		
};
function apareceRemera2() {
		$rem2.slideDown(500);
		$rem1.css('display','none' );
		$rem3.css('display','none' );
		$rem4.css('display','none' );
		$rem5.css('display','none' );
		$rem6.css('display','none' );	
		// $rem2.fadeIn();
		$mod2.slideDown(500);		
	
};
function apareceRemera3() {
		$rem1.css('display','none' );
		$rem2.css('display','none' );
		$rem4.css('display','none' );
		$rem5.css('display','none' );
		$rem6.css('display','none' );		
		$rem3.slideDown(500);
$mod3.slideDown(500);		
};
function apareceRemera4() {
		$rem1.css('display','none' );
		$rem2.css('display','none' );
		$rem3.css('display','none' );
		$rem5.css('display','none' );
		$rem6.css('display','none' );
		$rem4.slideDown(500);
};
function apareceRemera5() {
		$rem1.css('display','none' );
		$rem2.css('display','none' );
		$rem3.css('display','none' );
		$rem4.css('display','none' );
		$rem6.css('display','none' );
		$rem5.slideDown(500);		
};
function apareceRemera6() {
		$rem1.css('display','none' );
		$rem2.css('display','none' );
		$rem3.css('display','none' );
		$rem4.css('display','none' );
		$rem5.css('display','none' );
		$rem6.slideDown(500);
$apareceRemera6=true;		
};
function apareceS() {
		// $rem1.css('display','none' );
		// $rem2.css('display','none' );
		// $rem3.css('display','none' );
		// $rem4.css('display','none' );
		// $rem5.css('display','none' );
		$small.slideDown(500);
			if (apareceRemera6 = true){
			$btnCom1.slideDown(500);
			};
};
function apareceM() {
		// $rem1.css('display','none' );
		// $rem2.css('display','none' );
		// $rem3.css('display','none' );
		// $rem4.css('display','none' );
		// $rem5.css('display','none' );
		$medium.slideDown(500);
if (apareceRemera6 = true){
			$btnCom2.slideDown(500);
			};		
};
function apareceL() {
		// $rem1.css('display','none' );
		// $rem2.css('display','none' );
		// $rem3.css('display','none' );
		// $rem4.css('display','none' );
		// $rem5.css('display','none' );
		$large.slideDown(500);	
};
// function condicion() {
		// if
// };


$min1.click( apareceRemera1 );
$min2.click( apareceRemera2 );
$min3.click( apareceRemera3 );
$min4.click( apareceRemera4 );
$min5.click( apareceRemera5 );
$min6.click( apareceRemera6 );
$s.click( apareceS );
$m.click( apareceM );
$l.click( apareceL );
$btnCom1.click( condicion );





