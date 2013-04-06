var carousel = {};   
carousel.dom = (function() {
 var $ = Sizzle;

    function hasClass(el, clsName) {
        var regex = new RegExp("(^|\\s)" + clsName + "(\\s|$)");
        return regex.test(el.className);
    }

    function addClass(el, clsName) {
        if (!hasClass(el, clsName)) {
            el.className += " " + clsName;
        }
    }

    function removeClass(el, clsName) {
        var regex = new RegExp("(^|\\s)" + clsName + "(\\s|$)");
        el.className = el.className.replace(regex, " ");
    }

    function bind(element, event, handler) {
        if (typeof element == "string") {
            element = $(element)[0];
        }
        if (typeof element.addEventListener == "function") {
    element.addEventListener(event, handler, false);
    }
  else {
    element.attachEvent("on" + event, handler); 
    }     
    }

    return {
        $ : $,
        hasClass : hasClass,
        addClass : addClass,
        removeClass : removeClass,
        bind : bind
    };
})();

(function() {
    var dom = carousel.dom,
        $ = dom.$;
        
 function showData(dataId) {
        var activeData = $(".is-active")[0],
            hideData = activeData.getAttribute("data-relid"),
            unhidden = dataId.getAttribute("data-relid");
             dom.removeClass(activeData, "is-active");
             dom.addClass($("#" + hideData)[0], "is-hidden");
             dom.addClass(dataId, "is-active");	
             dom.removeClass($("#" + unhidden)[0], "is-hidden");
            
    }
    function getEvent() {
        dom.bind("ul.carousel-tabs", "click", function(e) {
        	var targetElement;        
        	     if (typeof e.target != 'undefined'){
 				  	  			  targetElement = e.target;
               } else {
               		  	  targetElement = e.srcElement;
					}  
               if (targetElement.nodeName.toLowerCase() === "li") {      	  					                  
                             
                    showData(targetElement);               	
            }
        });
    }    
    getEvent();
})();   