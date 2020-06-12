import QuickSortAlgo from './Algo/QuickSortAlgo'

const ANIMATION_SPEED= 10
const INITIAL_COLOR = 'pink'
const SUCCESS_COLOR = '#7FFFD4' // also iteration color
const SWAP_COLOR = '#F08080'
const DONE_COLOR = '#E6E6FA'

export const QuickSort = function(){
    this.setState({title: 'Quick Sort'})
    const animations = QuickSortAlgo(this.state.arr)
    const arr_bars = document.getElementsByClassName('bar')
    
    for (var i =0; i < animations.length; i++){
        const [order, barIndex1, barIndex2] = animations[i]
        if (order !== '4th'){
            const color1 = (order === '1st') ? 'yellow' : 
                           (order === '2nd') ? SUCCESS_COLOR :
                           (order === '2.5nd') ? SUCCESS_COLOR :
                           (order === '3rd') ? SWAP_COLOR :
                           (order === '5th') ? INITIAL_COLOR :
                           (order === '6th') ? DONE_COLOR : 
                           (order === '7th') ? DONE_COLOR : 'black' 
            
            const color2 = (order === '1st') ? 'yellow' : 
                           (order === '2nd') ? SUCCESS_COLOR :
                           (order === '2.5nd') ? INITIAL_COLOR :
                           (order === '3rd') ? SWAP_COLOR :
                           (order === '5th') ? INITIAL_COLOR :
                           (order === '6th') ? INITIAL_COLOR : 
                           (order === '7th') ? DONE_COLOR : 'black' 
            
            setTimeout(()=>{
                console.log(barIndex1,barIndex2,'=========')
                arr_bars[barIndex1].style.backgroundColor = color1
                arr_bars[barIndex2].style.backgroundColor = color2
            }, i*this.state.ANIMATION_SPEED)
        }
        else{ // swap
            const [order, barIndex1, h1, barIndex2, h2] = animations[i]
            setTimeout(()=>{
                arr_bars[barIndex1].style.height = `${h1}px`
                arr_bars[barIndex1].innerHTML = h1
                arr_bars[barIndex2].style.height = `${h2}px`
                arr_bars[barIndex2].innerHTML = h2
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