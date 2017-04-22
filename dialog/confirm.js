function Confirm(message,action1,action2){
	Alert.call(this,message,action1)
	this.cancelAction = action2
}
Confirm.prototype = Object.create(Alert.prototype)
console.log(Confirm.prototype.constructor);
Confirm.prototype.constructor = Confirm
console.log(Confirm.prototype.constructor);

//重写showbutton方法，在按钮框中生成 “确定” 和 “取消” 按钮
Confirm.prototype.showButton = function(){
	var btnBox = document.querySelector('.modal-button-box')
	var separator = document.createElement('span')
	separator.className = 'modal-separator'
	btnBox.appendChild(separator)
	var action1 = document.createElement('span')
	action1.innerText = '确定'
	action1.className = 'modal-left-button'
	btnBox.appendChild(action1)
	var action2 = document.createElement('span')
	action2.innerText = '取消'
	action2.className = 'modal-right-button'
	btnBox.appendChild(action2)
	var self = this
	action1.onclick = function(){
		self.close()
		if(typeof self.action === 'function'){
			self.action()
		}
	}
	action2.onclick = function(){
		self.close()
		if(typeof self.action === 'function'){
			self.cancelAction()
		}
	}
}
