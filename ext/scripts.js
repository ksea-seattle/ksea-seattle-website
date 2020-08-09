$(document).ready(function(){

	$('#nmsc_english').hide();
	
	$('#chooseKoreanNMSC').click(function() {
		$('#nmsc_english').hide();
		$('#nmsc_korean').show();
	});
	$('#chooseEnglishNMSC').click(function() {
		$('#nmsc_korean').hide();
		$('#nmsc_english').show();
	});

	$('#emailprez').click(function() {
		window.location = "mailto:ksea.yg.seattle@gmail.com";
	});

	$.fn.gotoAnchor = function(anchor) {
		location.href = this.selector;
	}

	toastr.options = {
	  "closeButton": true,
	  "debug": false,
	  "newestOnTop": false,
	  "progressBar": true,
	  "positionClass": "toast-bottom-full-width",
	  "preventDuplicates": false,
	  "showDuration": "1000",
	  "hideDuration": "1000",
	  "timeOut": "60000",
	  "extendedTimeOut": "10000",
	  "showEasing": "swing",
	  "hideEasing": "linear",
	  "showMethod": "fadeIn",
	  "hideMethod": "fadeOut",
	  "onclick": function(){$('#events').gotoAnchor(); $('#nmsclink').click();}
	};
	
	toastr["info"]("Please click here for information about the National Math & Science Competition", "NMSC (수학과학경시대회)");
});