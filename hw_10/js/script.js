var array = [];
// we ask user to enter the number
var numberOfUsers = prompt('Enter the number of users ', 0);
// we fill array
for(var i = 0; i < numberOfUsers; i++){
	 array[i] = prompt('Enter user`s names','')}
// we ask user about own name
var userName = prompt('Enter your name','');

function checkUser(userName) {
	for (var i = 0; i < array.length; i++){
		if (userName == array[i]) {
		return true;
    	}
	}
}
if (checkUser(userName)) {
	alert('Добро пожаловать ' + userName + '!');
	console.log(array);
} else {
	alert('Вы чужой!');
}