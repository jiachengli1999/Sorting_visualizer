import SelectionSortAlgo from './Algo/SelectionSortAlgo.js'

const ANIMATION_SPEED= 10
const INITIAL_COLOR = 'pink'
const SUCCESS_COLOR = '#7FFFD4' // also iteration color
const SWAP_COLOR = '#F08080'
const DONE_COLOR = '#E6E6FA'

export const SelectionSort = function() {
    const animations = SelectionSortAlgo(this.state.arr)
    const array_bars = document.getElementsByClassName('bar')

    for (var i=0; i < animations.length; i++){
        const [barIndex1, barIndex2, order] = animations[i]
        if (order !== '4th'){
            const color1 = (order === '1st') ? SUCCESS_COLOR :
                            (order === '2nd') ? SUCCESS_COLOR: 
                            (order === '3rd') ? SWAP_COLOR :
                            (order === '5th') ? DONE_COLOR: 'black'

            const color2 = (order === '1st') ? SUCCESS_COLOR : 
                            (order === '2nd') ? INITIAL_COLOR: 
                            (order === '3rd') ? SWAP_COLOR :
                            (order === '5th') ? INITIAL_COLOR: 'black'

            setTimeout(()=>{
                array_bars[barIndex2].style.backgroundColor = color2
                array_bars[barIndex1].style.backgroundColor = color1
            }, i * ANIMATION_SPEED)
        }
        else{ //swap 
            const [idx1, h1, order, idx2, h2] = animations[i]
            setTimeout(() =>{
                // get the height number for the bars
                // const h1 = array_bars[barIndex1].style.height.slice(0, -2)
                // const h2 = array_bars[barIndex2].style.height.slice(0, -2)
                // assign height 
                array_bars[idx1].style.height = `${h1}px`
                array_bars[idx1].innerHTML = h1
                array_bars[idx2].style.height = `${h2}px`
                array_bars[idx2].innerHTML = h2
            }, i*ANIMATION_SPEED)
        }
        // after sorting
        if (i === animations.length-1){
            // make all columns green
            setTimeout(() => {
                for (var i=0; i < array_bars.length; i++){
                    array_bars[i].style.backgroundColor = SUCCESS_COLOR
                }
            }, i*ANIMATION_SPEED)
        }
    }
};