let arr = [8,2,4,1,3];

insertion_sort = (array) => {
    let n = array.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = array[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < array[j])) {
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = current;
        }
    console.log(array);
}

insertion_sort(arr);