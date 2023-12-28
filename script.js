const hexBox = document.getElementById("hex-color");
	const length = 6;
	
	const letters = "abcdef";
	const number = "0123456789";
	const allChars = letters + number;
	
	function createHexColor(){
		let hexColor = "";
		hexColor += letters[Math.floor(Math.random() * letters.length)];
		hexColor += number[Math.floor(Math.random() * number.length)];
		
		while(length > hexColor.length) {
			hexColor += allChars[Math.floor(Math.random() * allChars.length)];
		}
		hexBox.value = hexColor;
        document.getElementById("bd").style.backgroundColor = '#' + hexColor;
	}
	function copyHexColor() {
		const getHex = document.getElementById("hex-color");
		hexBox.select();
		navigator.clipboard.writeText(getHex.value);
	}
	function clearHexColor() {
		hexBox.value = "";
	}