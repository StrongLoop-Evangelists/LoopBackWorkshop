'use strict';

module.exports = function(Post) {

	Post.beforeRemote('create', function(ctx, model, next) {
		console.log(ctx.req.body);

		//remove created
		delete ctx.req.body.created;

		//sanitize the rest
		ctx.req.body.name = ctx.req.body.name.replace(/<.*?>/g,'');
		ctx.req.body.email = ctx.req.body.email.replace(/<.*?>/g,'');
		ctx.req.body.message = ctx.req.body.message.replace(/<.*?>/g,'');

		next();
	});

};
