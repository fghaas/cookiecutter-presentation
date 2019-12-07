Reveal.addEventListener('ready', function(event) {
    /* Grab all links with class="qrcode" and iterate over them */
    document.querySelectorAll('a.qrcode').forEach(function(a) {
	a.text = '';
	var qr = new QRCode(a, {
	    text: a.href,
            width : 400,
            height : 400,
            colorDark : "#000000",
            colorLight : "rgba(255,255,255,0)",
	});
    });
});
