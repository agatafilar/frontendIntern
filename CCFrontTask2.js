exports.damage = function(spellString)
{
	var damage = 0;

	//is spell valid
	if(spellString.match(/fe/g) == null || spellString.match(/fe/g).length !=1 || spellString.match(/ai/g) == null) 
		return damage;
	
	//is spell "feai" or "aife"
	if(spellString.indexOf("fe") < spellString.lastIndexOf("ai"))
	{
		spellString = spellString.slice(spellString.indexOf("fe")+2, spellString.lastIndexOf("ai"));
		if (!spellString)
			return damage+3;
	}
	else
	{
		return damage;
	}
	
	//replace spells with points
	spellString = spellString.replace(/jee/g,"3");
	spellString = spellString.replace(/je/g,"2");
	spellString = spellString.replace(/dai/g,"5");
	spellString = spellString.replace(/aine/g,"4");
	spellString = spellString.replace(/ain/g,"3");
	spellString = spellString.replace(/ne/g,"2");
	spellString = spellString.replace(/ai/g,"2");		

	//count minus points
	var minusDamage = spellString.replace(/[^A-Z]/gi, "").length;
			
	//count plus points
	spellString = spellString.replace(/[a-zA-Z]+/gi,"");			
	damage = spellString.addDigits()-minusDamage+3;
	
	//decide if negative or positive
	damage = damage>0?damage:0;
	
	return damage;
};

String.prototype.addDigits = function() 
{
	this.split('');                 
	var sum = 0;                               
	for (var i = 0; i < this.length; i++)   
		sum += parseInt(this[i],10);    
    
	return sum;                               
};