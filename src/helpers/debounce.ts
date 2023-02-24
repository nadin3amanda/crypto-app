// export default function debounce(func, wait, immediate) {
// 	var timeout;
// 	return function() {
// 		var context = this, args = arguments;
// 		var later = function() {
// 			timeout = null;
// 			if (!immediate) func.apply(context, args);
// 		};
// 		var callNow = immediate && !timeout;
// 		clearTimeout(timeout);
// 		timeout = setTimeout(later, wait);
// 		if (callNow) func.apply(context, args);
// 	};
// };

export default function debounce<F extends Function>(func:F, wait:number):F {
	let timeoutID:number;
  
	if (!Number.isInteger(wait)) {
	  console.warn("Called debounce without a valid number")
	  wait = 300;
	}
  
	// conversion through any necessary as it wont satisfy criteria otherwise
	return <any>function(this:any, ...args: any[]) {
		clearTimeout(timeoutID);
		const context = this;
  
		timeoutID = window.setTimeout(function() {
			  func.apply(context, args);
		}, wait);
	 };
  };