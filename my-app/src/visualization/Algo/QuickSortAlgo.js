
function QuickSortAlgo(arr){
    const animations = []
    const res_array = arr.slice()
    QuickSort(res_array, 0, res_array.length-1)
    console.log(checkSorting(res_array))
    return animations
}

function QuickSort(arr, low, high){
    if (low < high){
        var pivot = partion(arr, low, high)
        QuickSort(arr, low, pivot-1)
        QuickSort(arr, pivot+1, high)
    }
}

// use last elem as pivot
function partion(arr, low, high){
    var i = low-1
    var pivot = arr[high]

    for (var j=low; j <high; j++){
        if (arr[j] < pivot){
            i++;
            var temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    var temp = arr[i+1]
    arr[i+1] = arr[high]
    arr[high] = temp    

    return i+1
}

function checkSorting(arr){ 
    for (var i=0; i < arr.length-1; i++){
        if (arr[i] > arr[i+1]){ return false }
    }
    return true
}

export default QuickSortAlgo