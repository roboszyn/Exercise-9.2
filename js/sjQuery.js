$("span:even").css('color','red');

var p = $('p');
p.each(function(index, element){
	var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
	$(element).append(button) 
});

$("button").click(function(){
	alert($(this).attr("data-tmp"));
});