// start here, ignore below

// server (make sure you have the right port), below is just an example
	var socket = io.connect('http://ec2-184-73-100-108.compute-1.amazonaws.com:5000');
	console.log('your script is working');
	
	var yourName = prompt('Please name yourself');
	
	socket.on('send back', function(data) {
		console.log(data.msg);
	});
	
	$('#msgSend').click(function() {
		var msg = $('#msgInput').val();
		socket.emit('send chat', {'name': yourName,'msg': msg});
		$('#inputTxt').val('');
	});
	
	$('#msgInput').keypress(function(e) {
		var msg = $('#msgInput').val();
		if(e.which == 13) {
			socket.emit('send chat', {'name': yourName,'msg': msg});
			$('#msgInput').val('');
		}
	});
	
	socket.on('server send', function(data) {
		console.log(data);
		$('#msgWindow').stop().animate({ scrollTop: $('#msgWindow')[0].scrollHeight }, 800);	
		$('#msgWindow').append('<br>' + data.name + ": " + data.msg);
	});
	





