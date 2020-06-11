
function BubbleSortAlgo(arr){
    // push 4 times
    var pairs= []
    const length = arr.length
    var res_arr = arr.slice()
    for (var i=0; i< length-1; i++){
        for(var j=0; j < length-i-1; j++){
            let temp = res_arr[j]
            let temp2 = res_arr[j+1]
            var end = (j === length-i-2 ? true: false)
            var reset = (j === 0) ? false : true
            // 1st: Change iterating blocks to green
            pairs.push([j, j+1, reset])
            if (res_arr[j] > res_arr[j+1]){
                [res_arr[j], res_arr[j+1]] = [res_arr[j+1], res_arr[j]]
                // 2nd: change color to red for swapping
                pairs.push([j, j+1])
                // 3rd: swap bars
                pairs.push([j, temp2, j+1, temp])
                // 4th: change bar colors back to initial color
                pairs.push([j, j+1, end])
            }
            else{
                // 2nd: no change 
                pairs.push([-1])
                // 3rd: no change
                pairs.push([-1])
                // 4th: change color if end
                if (end) {
                    pairs.push([j, j+1, end])
                }
                else{ pairs.push([-1])}
            }
        }
    }
    const sorted = arr.slice().sort((a, b) => a - b)
    console.log(res_arr)
    console.log(sorted)
    return pairs
}

export default BubbleSortAlgo