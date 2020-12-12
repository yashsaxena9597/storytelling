function myFunction() {
 

  localStorage.setItem('Animal',document.getElementById("Animal").value);
  localStorage.setItem('Ano',document.getElementById("Ano").value);
  localStorage.setItem('verb',document.getElementById("verb").value);
  localStorage.setItem('speed',document.querySelector("select[name='speed']").value);
   localStorage.setItem('Anim',document.getElementById("Anim").value);
   localStorage.setItem('Adj',document.getElementById("Adj").value);
    localStorage.setItem('num',document.getElementById("number").value);
    localStorage.setItem('mq',document.getElementById("mq").value);
    localStorage.setItem('ans',document.querySelector("[name='Yes']:checked").value);
}
  

	
	 
	 var j;var i;var k;
	 document.getElementsByClassName("deco")[6].innerHTML=localStorage.getItem('speed');
	 document.getElementsByClassName("deco")[10].innerHTML=localStorage.getItem('Anim');
	 document.getElementsByClassName("deco")[8].innerHTML=localStorage.getItem('Adj');
	 document.getElementsByClassName("deco")[16].innerHTML=localStorage.getItem('num');
	 document.getElementsByClassName("deco")[11].innerHTML=localStorage.getItem('mq');
	 document.getElementsByClassName("deco")[4].innerHTML=localStorage.getItem('ans');
	for(j=0;j<3;j++){
	 document.getElementsByClassName("running")[j].innerHTML=localStorage.getItem('verb');
	
	
	}
	 
	for(i=0;i<8;i++){
	 document.getElementsByClassName("tiger")[i].innerHTML=localStorage.getItem('Animal');
	 
	
	}
	
	for(k=0;k<9;k++){
	 
	 document.getElementsByClassName("lion")[k].innerHTML=localStorage.getItem('Ano');
	
	}
	


	



	 function Fun() {
   localStorage.clear();
}
   