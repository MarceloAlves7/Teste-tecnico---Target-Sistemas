function inverterString(str) {
    var o = '';
    for (var i = str.length - 1; i >= 0; i--) {
        o += str[i];
    }
    return o;
}
console.log(inverterString("Teste concluido e enviado"));