function InsertionSortAlgo(arr){
    const animations = []
    const res_arr = arr.slice()
    for (var i =1; i < res_arr.length; i++){
        var prev_index = i-1 
        var current_val = res_arr[i]
        // 1. push iteration color: green
        animations.push(['1st', prev_index, i])

        while(prev_index >= 0 && res_arr[prev_index] > current_val){
            // 2. checking prev and curr val: red
            animations.push(['2nd', prev_index, prev_index+1])
            // 3. swap
            animations.push(['3rd', prev_index, current_val, prev_index+1, res_arr[prev_index]])
            // 4. set current index to inital, but keep prev SWAP_COLOR
            animations.push(['4th', prev_index, prev_index+1])

            // swap and check next prev 
            res_arr[prev_index+1] = res_arr[prev_index]
            prev_index -= 1
        }
        if (prev_index < 0) {
            // 5. reset first index to initial color; current index is green
            animations.push(['5th', prev_index+1, prev_index+1])
        }
        else{
            // 6. set indexes to inital after backtracking 
            animations.push(['6th', prev_index, prev_index+1])
        }

        // add val to current position 
        res_arr[prev_index +1] = current_val
    }
    console.log(res_arr)
    console.log('sorted:',checkSorting(res_arr))
    return animations
}

function checkSorting(arr){ 
    for (var i=0; i < arr.length-1; i++){
        if (arr[i] > arr[i+1]){ return false }
    }
    return true
}

export default InsertionSortAlgo