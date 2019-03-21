function _Promise(fn) {
	var status = 'pending'; //  success:fulfilled   error:rejected
	var successBack = [],
		failBack = [];

	function resolve(response) {
		status = 'fulfilled';
		setTimeout(() => {
			successBack.forEach((callback) => {
				callback(response);
			});
		}, 0);
	}

	function reject(response) {
		status = 'rejected';
		setTimeout(() => {
			failBack.forEach((callback) => {
				callback(response);
			});
		}, 0);
	}

	this.then = function(successCallBack, errorCallBack) {
		successBack.push(successCallBack);
		failBack.push(errorCallBack);
		return this;
	};

	fn && fn(resolve, reject);
}

window._Promise = _Promise;
