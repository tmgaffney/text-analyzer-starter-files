//handle the form submit
function listenTo () {
	$("form").on("submit",function(event){
	event.preventDefault();
	var rawString = $('textarea#user-text').val();	
	var tokens = rawString.toLowerCase().split(/\W+/);
	var totalWordCount = tokens.length;
	var uniqueWords = countUniqueWords(tokens);
	var averageLength = getAverageLength(tokens);
	displayResults(totalWordCount, averageLength, uniqueWords);
})
}

// unique word count
function countUniqueWords(tokens) {
	var uniqueWords = [];
	for (var i=0; i < tokens.length; i++) {
		console.log(uniqueWords.indexOf(tokens[i]))
		if (uniqueWords.indexOf(tokens[i]) === -1) {
			uniqueWords.push(tokens[i]);
		}
		console.log(uniqueWords);
	}
	return uniqueWords.length;
}

// average word length
function getAverageLength(tokens) {
	var totalWordCount = tokens.length;
	var totalLength = tokens.join("").length;
	return (totalLength / totalWordCount);
}


// send results to page
function displayResults(totalWordCount, averageLength, uniqueWords) {
	$(".text-report").removeClass("hidden");
	$(".js-wordCount").text(totalWordCount);
	$(".js-uniqueWordCount").text(uniqueWords);
	$(".js-averageWordLength").text(averageLength);
}

$(listenTo)