import React from 'react'

// using mod 2
function SelectionSortAlgo(arr){
    var animations = []
    var res_arr = arr.slice()
    console.log(res_arr)
    for(var i=0; i < res_arr.length; i++){
        var min_index = i
        for (var j=i; j < res_arr.length; j++){
            
            // 1: set color to green for comparison
            animations.push([i, j, '1st'])
            // 2: reset color of index j to initial
            animations.push([i, j, '2nd'])
            if (res_arr[j] < res_arr[min_index]){
                // set new min index
                min_index = j
            }
        }
        // 1: Make red to indicate swapping
        animations.push([i, min_index, '3rd'])
        // 2: swap
        animations.push([i, min_index, '4th'])
        // 1: change color back to initial and set color in index i to DONE_COLOR
        animations.push([i, min_index, '5th'])
        // [res_arr[i], res_arr[min_index]] = [res_arr[min_index], res_arr[i]]
        var temp = res_arr[i]
        res_arr[i] = res_arr[min_index]
        res_arr[min_index] = temp
    }
    console.log(checkSorting(res_arr))
    console.log(res_arr)
    return animations
}

function checkSorting(arr){ 
    for (var i=0; i < arr.length-1; i++){
        if (arr[i] > arr[i+1]){ return false }
    }
    return true
}

export default SelectionSortAlgo