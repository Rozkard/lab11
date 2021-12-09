$(document).ready(function(){
	var wordList = ["hello", "they", "word", "hot", "time"];
	var translationList = ["привіт", "вони", "слово", "гарячий", "час"]
	var userTranslation = [];
	var wordOrder = [];
	var currentWord = 0;
	let wordAmount = 5;
	var rightAnswer = 0;
	var falseAnswer = 0;
	$("#currentStep").html(currentWord+1 + " з " + wordAmount);
	for(var i =0; i<wordAmount;i++){
		wordOrder[i] = i;

	}
	
	wordOrder.sort(() => Math.random() - 0.5);
	$("#word").html(wordList[wordOrder[currentWord]]);
	
	$(".next").click(function(){
		currentWord++;
		if(currentWord==wordAmount){
			currentWord = 0;
		}
		$("#word").html(wordList[wordOrder[currentWord]]);
		$("#currentStep").html(currentWord+1 + " з " + wordAmount);
			$("#inputText").val(userTranslation[wordOrder[currentWord]])
		if(userTranslation[wordOrder[currentWord]]!= undefined){
		
			$('input').attr('readonly',true);
		}
		else{
			$('input').attr('readonly',false);
		}
	});
	$(".prev").click(function(){
		currentWord--;
		if(currentWord==-1){
			currentWord = wordAmount-1;
		}
		$("#word").html(wordList[wordOrder[currentWord]]);
		$("#currentStep").html(currentWord+1 + " з " + wordAmount);
		$("#inputText").val(userTranslation[wordOrder[currentWord]])
		if(userTranslation[wordOrder[currentWord]]!= undefined){
			
			$('input').attr('readonly',true);
		}
		else{
			$('input').attr('readonly',false);
		}
	});
	
	$('input').keydown(function(e) {
		if((e.keyCode === 13)&&((!$('input').prop('readonly')))) {
			
			userTranslation[wordOrder[currentWord]] = $("#inputText").val();
			
			if(userTranslation[wordOrder[currentWord]]==translationList[wordOrder[currentWord]]){
				
				rightAnswer++;
				$("#rightAnswer").html(rightAnswer);
				$("#falseAnswer").html(falseAnswer);
			}			 
			else{ 
				
				falseAnswer++;
				$("#rightAnswer").html(rightAnswer);
				$("#falseAnswer").html(falseAnswer);
				
			}
			$('input').attr('readonly',true);
			if(rightAnswer+falseAnswer==wordAmount){
				if(rightAnswer>0){
					let finalResult = rightAnswer/wordAmount;
					if(finalResult<0.3){
						alert("Your result is Bad")
					}
					else if(finalResult<0.6){
						alert("Your result is Normal")
					}
					else if(finalResult<1){
						alert("Your result is Good")
					}
					else{
						alert("Your result is Perfect")
					}
				}
				else{
					alert("Your result is Awful")
				}
			}
		}
	});
});