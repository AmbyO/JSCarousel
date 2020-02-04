
function pChange(){
	
	ico ++;
	animation();
	images.src = "build/images/image" + ico + ".jpg";
	//~ console.log(ico);
	
	if (ico >= inr){
		
		ico = 1;
		images.src = "build/images/image" + ico + ".jpg";

		
		}	
		
	}

function nChange(){
	
	ico --;
	animation();
	//~ console.log(ico);
	images.src = "build/images/image" + ico + ".jpg";
	
	if (ico == 0){
		
		images.src = "build/images/image" + numberOfImages + ".jpg";
		ico = numberOfImages;
		
		}	
		
	}
	

function animation(){
		
	var pos = 0;
	var id = setInterval(frame, 7);
	
	function frame(){
		
		if ( pos == 99){
			
			clearInterval(id);
			
			}
			
		pos++;
		
		images.style.height = pos + "vh";
		images.style.width = pos + "vw";
		
		
	}
	
	
	}

function move(){

		loop = setInterval(function(){
		num = 1;
		num++;
		pChange()
		console.log(num);
		
		},5000);
		
}

move();

function stopMove(){
	
		clearInterval(loop);
		setTimeout(move, 1000);
	
	
	}
