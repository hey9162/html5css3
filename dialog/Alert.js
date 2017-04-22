function Alert(message,action){
	this.message = message
	this.action = action  
}
Alert.prototype.showMask = function(){
	var mask = document.createElement('div')
	mask.className = 'modal-mask'
	document.body.appendChild(mask)
}
Alert.prototype.showBody = function(){
	var box = document.createElement('div')
	box.className = 'modal-box'
	document.body.appendChild(box)
	var msg = document.createElement('div')
	msg.className = 'modal-message'
	msg.innerText = this.message
	box.appendChild(msg)
	var btnBox = document.createElement('div')
	btnBox.className = 'modal-button-box'
	box.appendChild(btnBox)
}
Alert.prototype.showButton = function(){
	var btn = document.createElement('div')
	btn.innerText = '确定'
	document.querySelector('.modal-button-box').appendChild(btn)
	var self = this
	btn.onclick = function(ev){
		self.close()
		if(typeof self.action === 'function'){
			self.action()
		}
	}
}
Alert.prototype.close = function(){
	var mask = document.querySelector('.modal-mask')
	var box = document.querySelector('.modal-box')
	document.body.removeChild(mask)
	document.body.removeChild(box)
	document.documentElement.style.overflow = 'initial'
}
Alert.prototype.show = function(){
	this.showMask()
	this.showBody()
	this.showButton()
}