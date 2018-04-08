function openModal() {
	var modal = document.getElementById('modal');
	modal.style.display = "block";
	var modalContentNode = document.getElementById('modalContent');
	modalContentNode.className = modalContentNode.className.replace("close-modal-animate", "");
}

function closeModal() {
	var modalContentNode = document.getElementById('modalContent');
	modalContentNode.className = modalContentNode.className + " close-modal-animate";
	var modal = document.getElementById('modal');
	setTimeout( function(){
		modal.style.display = "none";
	} , 400)
} 

//form
var es = document.getElementsByClassName('form-control');
for (var i = 0; i < es.length; i++){
	es[i].onfocus = function (){
		this.parentNode.className += " control-focus";
	}
	es[i].onblur = function (){
		var val;
		if (this.tagName == "SELECT") {
			val = this.options[this.selectedIndex].text;
		}
		else {
			val = this.value;
		}
		if (val != ''){
			this.parentNode.className = this.parentNode.className.replace("control-focus", "control-highlight");
		}else{
			this.parentNode.className = this.parentNode.className.replace("control-focus", "");
			this.parentNode.className = this.parentNode.className.replace("control-highlight", "");
		}
	}
}


// function onFocus() {
// 	this.parentNode.className += " control-focus";
// }

// function onBlur() {
// 	this.parentNode.className = this.parentNode.className.replace("control-focus", "");
// }