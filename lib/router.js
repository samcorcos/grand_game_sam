Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
});

Router.map(function() {
    this.route('rules', {path: '/'});
    this.route('rules', {path: '/rules/'});
    this.route('battle', {path: '/battle/' });
	this.route('outcome', {path: '/outcome/' });
	this.route('politics', {path: '/politics/' });
	this.route('statistics', {path: '/statistics/'});
});