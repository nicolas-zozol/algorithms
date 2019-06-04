function removeNegativeLeft(array) {

    let index = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            index++;
        } else {
            break;
        }
    }
    return array.slice(index);

}


function removeNegativeRight(array) {

    let index = array.length - 1;
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] < 0) {
            index--;
        } else {
            break;
        }
    }
    return array.slice(0, index + 1);
}

