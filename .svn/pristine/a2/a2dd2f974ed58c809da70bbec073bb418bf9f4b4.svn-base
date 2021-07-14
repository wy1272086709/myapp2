class Event {
	throttle(fn, wait = 500, isImmediate = false) {  
	  let flag = true;  
	  if (isImmediate) {  
	    return function() {  
	      if (flag) {  
	        fn.apply(this, arguments);  
	        flag = false;  
	        setTimeout(() => {  
	          flag = true  
	        }, wait)  
	      }  
	    }  
	  }  
	  return function() {  
	    if (flag == true) {  
	      flag = false  
	      setTimeout(() => {  
	        fn.apply(this, arguments)  
	        flag = true  
	      }, wait)  
	    }  
	  }  
	}  
}

export default new Event;