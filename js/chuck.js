// define and call the function right away for initial page load!
(getAFact = function() {
	// check if we're out of facts to avoid an indexOutOfBounds exception
	if (chuckNorrisGeekyFacts.length === 0) {
		// all the facts have been seen, tell user that they're done.
		var fact = finalFact;
	} else {
		// there are still facts in the array, so picks a random one
		var index = Math.floor(Math.random() * chuckNorrisGeekyFacts.length);
		var fact = chuckNorrisGeekyFacts[index];
		// remove this fact from the facts list to avoid repeating facts
		chuckNorrisGeekyFacts.splice(index, 1);
	}
	$("#fact").text(fact);
})();

// set up handler for when random fact button clicked
$("#random-fact").on('click tap', getAFact);
// bind the tweet function
$('.tweet').on('click tap', function() {
	tweet({
		'message' : $('#fact').text()
	});
});

// google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-52531701-1', 'auto');
ga('require', 'displayfeatures');
ga('require', 'linkid', 'linkid.js');
ga('send', 'pageview');
