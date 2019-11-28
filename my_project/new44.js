function generate()
{
    var num = document.getElementById("num").value;
    var result = document.getElementById("result");
    var chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var randomChars = []; 
	 
      for(var i = 1; i<= num; i++)
	   {
          var targetChar = chars[Math.floor(Math.random()*26)]
          randomChars.push( targetChar )
       }
		
		
	 result.innerHTML = "";
     randomChars.forEach( el => 
							{result.innerHTML += "<button>   "+el+"   </button>"}
						); 
}