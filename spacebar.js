function changeIdValue(id, value) {
    document.getElementById(id).style.height = value;
}
    
    document.getElementById ("balklongwaarde").addEventListener("click", function(){ changeIdValue("balklongwaarde", "60px")});
    
    document.getElementById ("balklevensverwachting").addEventListener("click", function(){ changeIdValue("balklevensverwachting", "60px")});
    
    document.getElementById ("balkhart").addEventListener("click", function(){ changeIdValue("balkhart", "60px")});
    
    document.getElementById ("balklever").addEventListener("click", function(){ changeIdValue("balklever", "60px")});
    
    document.getElementById("balkhersenen").addEventListener("click", function(){ changeIdValue("balkhersenen", "60px")});
    