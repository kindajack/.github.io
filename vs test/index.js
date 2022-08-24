let a, b, c, d, q, w, e, r;	// 전역변수

function setValue() {
	a = Number(document.getElementById('a').value); // 입력값 받기
	b = Number(document.getElementById('b').value);
    c = Number(document.getElementById('c').value); // 입력값 받기
	d = Number(document.getElementById('d').value);
    q = Number(document.getElementById('q').value); // 입력값 받기
	w = Number(document.getElementById('w').value);
    e = Number(document.getElementById('e').value); // 입력값 받기
	r = Number(document.getElementById('r').value);
}



function plus() {
	setValue();
	document.getElementById('stn').value = "+"; // 값 넣기
	document.getElementById('result').value = a + b;
}
function minus() {
	setValue();
	document.getElementById('stn').value = "-"; // 값 넣기
	document.getElementById('result').value = a - b;
}
function multi() {
	setValue();
	document.getElementById('stn').value = "*"; // 값 넣기
	document.getElementById('result').value = (a * b).toFixed(2);
    
}
function div() {
	setValue();
	if(b == 0){ // 0 안됨
		alert('계산할 수 없습니다');
		return;
	}
	document.getElementById('stn').value = "/";
	document.getElementById('result').value = a / b;	
}
function rest() {
	setValue();
	if(b == 0){ // 0 안됨
		alert('계산할 수 없습니다');
		return;
	}
	document.getElementById('stn').value = "%";
	document.getElementById('result').value = a % b;	
}


function per3() {
	setValue();
	document.getElementById('stn3').value = "3%할인하기"; // 값 넣기
    document.getElementById('w').value = "0.97"; // 값 넣기
	document.getElementById('res3').value = q * w;
    
}

function per5() {
	setValue();
	document.getElementById('stn').value = "5%할인하기"; // 값 넣기
    document.getElementById('b').value = "0.95"; // 값 넣기
	document.getElementById('result').value = a * b;
    
}

function per57() {
	setValue();
	document.getElementById('stn3').value = "5x7% 할인하기"; // 값 넣기
    document.getElementById('w').value = "0.8835"; // 값 넣기
	document.getElementById('res3').value = q * w ;
}


function give() {
	setValue();
	document.getElementById('stn2').value = "입금가"; // 값 넣기
}



function save10() {
	setValue();
	document.getElementById('stn').value = "10%마진율"; // 값 넣기
    document.getElementById('b').value = 1.1;

	document.getElementById('result').value = a * b;
}




function per6() {
	setValue();
    document.getElementById('r').value = "0.94"; // 값 넣기S
	document.getElementById('stn4').value = "6수수료"; // 값 넣기
}

   

function per7() {
	setValue();
	document.getElementById('stn4').value = "7수수료"; // 값 넣기
    document.getElementById('r').value = "0.93"; // 값 넣기
}

function per8() {
	setValue();
	document.getElementById('stn4').value = "8수수료"; // 값 넣기
    document.getElementById('r').value = "0.92"; // 값 넣기

}

function per55() {
	setValue();
	document.getElementById('stn4').value = "5.5수수료"; // 값 넣기
    document.getElementById('r').value = "0.945"; // 값 넣기

}


function calcu_x() {
    setValue();
document.getElementById('res4').value = (e * r).toFixed(0);
}

function calcu_minus() {
    setValue();
    document.getElementById('result2').value = (c - d).toFixed(0);
}
