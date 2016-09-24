/*function getTempCallback (location, callback) {
	callback(undefined, 78);
	callback('City not found');
}

getTempCallback( 'Florida', function(err, temp){
	if(err) {
		console.log('error', err);
	}else {
		console.log('success', temp)
	}
});

function getTempPromise (location) {
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve(79);
			reject('City Not Found');
		}, 1000);

	});
};

getTempPromise('Florida').then(function(temp){
	console.log('Promise Success', temp);
	},	function(err){
	console.log('Promise error', err);
});*/

//Challenge Area

function addPromise(a,b){
	return new Promise(function(resolve, reject){
		if(typeof a === 'number'&& typeof b === 'number'){
		resolve(a + b);
	}else {
		reject('A & B should be numbers');
		}
	});
}

addPromise(6,5).then(function(sum){
	console.log('success', sum);
}, function(){
	console.log('error', err);
});

addPromise('jon', 9).then(function(sum){
	console.log('This should not show');
}, function(err){
	console.log('This should apper', err);
});