var one = [];
var two = [];
function mydata(data){
    var splitdata = data.split("");
    console.log(splitdata);
    splitdata.map(function(v1){
        if(v1 == "w"){
            one.push(v1);
        }
        if(v1 == "e"){
            two.push(v1);
        }
    })
    console.log(one.length,one.toString());
    console.log(two.length,two.toString());
}

mydata("welcome");