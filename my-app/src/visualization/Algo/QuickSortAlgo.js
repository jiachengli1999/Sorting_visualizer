
function QuickSortAlgo(arr){
    const animations = []
    const res_array = arr.slice()
    QuickSort(res_array, 0, res_array.length-1, animations)
    console.log(checkSorting(res_array))
    return animations
}

function QuickSort(arr, low, high, animations){
    if (low < high){
        var pivot = partion(arr, low, high, animations)
        QuickSort(arr, low, pivot-1, animations)
        animations.push(['7th',low, pivot])
        QuickSort(arr, pivot+1, high, animations)
        animations.push(['7th',pivot, high])
    }
}

// use last elem as pivot
function partion(arr, low, high, animations){
    var i = low
    var pivot = arr[high]

    // 1. push pivot: yellow
    animations.push(['1st', high, high])

    for (var j=low; j <high; j++){
        // 2: push iteration: green
        animations.push(['2nd', i, j])
        // 2.5: reset j to initial
        animations.push(['2.5nd', i, j])

        if (arr[j] < pivot){
            // 3. getting ready to swap: red
            animations.push(['3rd', i, j])
            // 4. swap
            animations.push(['4th', i, arr[j], j, arr[i]])
            // 5. reset color to inital 
            animations.push(['5th', i, j])

            var temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++;
        }
    }
    // 3. getting ready to swap: red
    animations.push(['3rd', i, high])
    // 4. swap
    animations.push(['4th', i, arr[high], high, arr[i]])
    // 6. set index i to done 
    animations.push(['6th', i, high])

    var temp = arr[i]
    arr[i] = arr[high]
    arr[high] = temp    

    return i
}

function checkSorting(arr){ 
    for (var i=0; i < arr.length-1; i++){
        if (arr[i] > arr[i+1]){ return false }
    }
    return true
}

export default QuickSortAlgo