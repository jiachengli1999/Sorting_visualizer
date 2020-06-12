function MergeSortAlgo(arr){
    const res_arr = MergeSort(arr)
    console.log('sorted:',checkSorting(res_arr))
}

function MergeSort(arr){
    if (arr.length === 1) {
        return true
    }

    const mid = Math.floor(arr.length/2)
    const left = MergeSort(arr.slice(0, mid))
    const right = MergeSort(arr.slice(mid))

    var res_arr = []
    var i = 0
    var j = 0
    while (i < left.length && j < right.length){
        if (left[i] < right[j]){
            res_arr.push(left[i])
            i++;
        }
        else{
            res_arr.push(right[j])
            j++;
        }
    }
    // get any left over elem in one of the arrays
    while(i < left.length){
        res_arr.push(left[i])
        i++;
    }
    while(j < right.length){
        res_arr.push(right[i])
        j++;
    }

    return res_arr
}

function checkSorting(arr){ 
    for (var i=0; i < arr.length-1; i++){
        if (arr[i] > arr[i+1]){ return false }
    }
    return true
}

export default MergeSortAlgo