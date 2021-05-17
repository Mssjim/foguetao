console.log('Hello World!');

timeout = (n) => {
	setTimeout(() => {
		console.log(n);
	}, 3000);
}

for(let i=0; i<5; i++) {
	timeout(i+1);
}
