var total = 0;

for (var index = 2; index < process.argv.length; index++) {
	total += Number(process.argv[index]);
};

console.log(total);