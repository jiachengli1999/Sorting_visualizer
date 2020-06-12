function MergeSortAlgo(arr){
    const animations = []
    const res_arr = arr.slice()
    MergeSort(res_arr, 0, arr.length-1, arr, animations)
    console.log('sorted:',checkSorting(res_arr))
    return animations
}

function MergeSort(main_arr, start, end, arr, animations){
  if (start === end){ 
    return
  }
  const mid = Math.floor((start+end)/2)
  MergeSort(arr, start, mid, main_arr, animations)
  MergeSort(arr, mid+1, end, main_arr, animations)

  let k = start
  let i = start
  let j = mid + 1
  while (i <= mid && j <= end) {
    // 1. get iteration color; green
    animations.push(['1st', i, j])
    // 2. reset; initial
    animations.push(['2nd', i, j])

    if (arr[i] <= arr[j]) {
      // 3. set 
      animations.push(['3rd', k, arr[i]])
      
      main_arr[k] = arr[i];
      k++
      i++
    } else {
      // 3. set 
      animations.push(['3rd', k, arr[j]])

      main_arr[k] = arr[j];
      k++
      j++
    }
  }
  while (i <= mid) {
    // 3. set 
    animations.push(['3rd', k, arr[i]])

    main_arr[k] = arr[i];
    k++
    i++
  }
  while (j <= end) {
    // 3. set 
    animations.push(['3rd', k, arr[j]])

    main_arr[k] = arr[j];
    k++
    j++
  }
}

function checkSorting(arr){ 
    for (var i=0; i < arr.length-1; i++){
        if (arr[i] > arr[i+1]){ return false }
    }
    return true
}

export default MergeSortAlgo