import MergeSortAlgo from './Algo/MergeSortAlgo.js'

const ANIMATION_SPEED= 10
const INITIAL_COLOR = 'pink'
const SUCCESS_COLOR = '#7FFFD4' // also iteration color
const SWAP_COLOR = '#F08080'
const DONE_COLOR = '#E6E6FA'

export const MergeSort = function(){
    this.setState({title: 'Merge Sort'})
    const animations = MergeSortAlgo(this.state.arr)
    const arr_bars = document.getElementsByClassName('bar')

    for (var i =0; i < animations.length; i++){
        const [order, barIndex1, barIndex2] = animations[i]
        if (order !== '3rd'){
            const color1 = (order === '1st') ? SUCCESS_COLOR : 
                           (order === '2nd') ? INITIAL_COLOR : 'black'
                           
            
            const color2 = (order === '1st') ? SUCCESS_COLOR : 
                           (order === '2nd') ? INITIAL_COLOR : 'black' 
            
            setTimeout(()=>{
                arr_bars[barIndex1].style.backgroundColor = color1
                arr_bars[barIndex2].style.backgroundColor = color2
            }, i*this.state.ANIMATION_SPEED)
        }
        else{ // set new height
            const [order, barIndex1, h1] = animations[i]
            setTimeout(()=>{
                arr_bars[barIndex1].style.height = `${h1}px`
                arr_bars[barIndex1].innerHTML = h1
            }, i *this.state.ANIMATION_SPEED)
        }
        // after sorting
        if (i === animations.length-1){
            // make all columns green
            setTimeout(() => {
                for (var i=0; i < arr_bars.length; i++){
                    arr_bars[i].style.backgroundColor = SUCCESS_COLOR
                }
                this.setState({disabled: false})
            }, i*this.state.ANIMATION_SPEED)
        }
    }
}