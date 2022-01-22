function addStrings(str1, str2) {
    let output = ""
    // for(let i=0; i<str1.length; i++){
    //     for(j=0; j<str2.length; j++){
    //         if(i==j){
    //             let add = parseInt(str1[i])+ parseInt(str2[j])
    //             output+= add;
    //         }
    //     }
    // }

    output = (parseInt(str1) + parseInt(str2)).toString()

    return output;
}

console.log("output",addStrings("123456","312321"))
console.log("output",addStrings("123456","123456"))