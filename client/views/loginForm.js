Template.loginForm.events({
	'click .serviceLogin': function(e,t){
		e.preventDefault();
		console.log('clicked on service login');
		console.log(e.target);
		console.log(e.srcElement);
		if(e.target.classList.contains('twitter') ) {
			Meteor.loginWithTwitter(function(err){
				console.log(err);
			});
		}else
		if(e.target.classList.contains('facebook') ) {
			Meteor.loginWithFacebook();
		}else
		if(e.target.classList.contains('github') ) {
			Meteor.loginWithGithub();
		}else
		if(e.target.classList.contains('google') ) {
			Meteor.loginWithGoogle();
		}
	}
});