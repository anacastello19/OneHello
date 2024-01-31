function listas(listNum, listaNum) {
    if (listNum.length !== listaNum.length) {
        return 'Las listas deben tener el mismo tamaño';
    }

    let listaSuma = [];
    for (let i = 0; i < listNum.length; i++) {
        listaSuma.push(listNum[i] + listaNum[i]);
    }

    return listaSuma;
}
