function changeStringLetter(s,letter,pos){
    if(pos<s.length){
        const string=s.split('');
        string[pos-1]=letter;
        s=string.join('')
    }
    return s
}
str="muhammed";
s=changeStringLetter(str,"M",1)
console.log(s);