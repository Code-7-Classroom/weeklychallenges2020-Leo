const avgNum = () => {
    let array = [1, 2, 3];
    let total = 0;
    for(var i = 0; i < array.length; i++) {
        total += array[i];
    }
    let avg = total / array.length;
    console.log(avg);
}
avgNum();

