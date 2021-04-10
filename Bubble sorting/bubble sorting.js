let arr = [8,2,4,1,3];

bubble_sorting = (array) => {
    for (let i = 0; i < array.length; i++) { 
        for (let j = 0; j < array.length-i; j++) {
            if (array[j+1] < array[j]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                // console.log(array);
            }
        }
    }
    console.log(array);
}

bubble_sorting(arr);