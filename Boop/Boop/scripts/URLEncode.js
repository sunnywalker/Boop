/**
	{
		"api":1,
		"name":"URL Encode",
		"description":"Encodes URL entities",
		"author":"Ivan",
		"icon":"link",
		"tags":"url,encode,convert"
	}
**/

function main(input) {
	
	input.text = encodeURIComponent(input.text)
	
}