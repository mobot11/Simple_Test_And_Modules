function greet(name) {
	if (process.argv[3] !== undefined) {
		return "Hello " + process.argv[3];
	}
	else return "Hello " + name;
}

exports.greet = greet;








