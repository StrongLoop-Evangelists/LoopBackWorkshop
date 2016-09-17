var $posts, $name, $email, $message;

$(document).ready(function() {
	$posts = $('#posts');
	$name = $('#name');
	$email = $('#email');
	$message = $('#message');

	$('#newPost').on('submit', doPost);

	loadPosts();
});

function loadPosts() {

	$.get('/api/posts').then(function(res) {
		console.log(res);
		if(!res.length) {
			$posts.html('<i>Sad guestbook has no posts yet. :(</i>');
			return;
		}

		var s = '';
		res.forEach(function(post) {
			s += '<p>'+post.name + ' said:<br/>';
			s += post.message;
			s += '<br><i>Posted at '+post.created+'</i></p>';
		});

		$posts.html(s);

	});

}

function doPost(e) {
	e.preventDefault();
	var post = {
		name:$name.val(),
		email:$email.val(),
		message:$message.val(),
		created:new Date()
	}

	$.post('/api/posts', post).then(function(res) {
		console.log('success', res);
		$message.val('');
		loadPosts();
	}).catch(function(e) {
		console.log('error', e);
	});

}