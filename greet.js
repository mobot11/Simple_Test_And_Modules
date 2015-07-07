function greet(name) {
	if (process.argv[2] != undefined) {
		return "Hello " + process.argv[2];
	}
	else return "Hello " + name;
}

exports.greet = greet;





