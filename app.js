//handle the form submit?

// convert submitted text to tokens
	//sample string
var rawString = "This is a short text about stuff."

var tokens = rawString.toLowerCase().split(/\W+/);

// total word count
var totalWordCount = tokens.length;

// unique word count
function countUniqueWords(tokens) {
	var uniqueWords = [];
	for (var i=0; i < tokens.length; i++) {
		if (uniqueWords.indexOf(tokens[i]) === -1) {
			uniqueWords.push(tokens[i]);
		}
	}
	return uniqueWords.length;
}

// average word length
function getAverageLength(tokens) {
	var totalLength = tokens.join("").length;
	return (totalLength / totalWordCount);
}


// send results to page
