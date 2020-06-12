import BubbleSortAlgo from './Algo/BubbleSortAlgo.js'

const ANIMATION_SPEED= 10
const INITIAL_COLOR = 'pink'
const SUCCESS_COLOR = '#7FFFD4' // also iteration color
const SWAP_COLOR = '#F08080'
const DONE_COLOR = '#E6E6FA'

export const BubbleSort = function() {
    this.setState({title: 'Bubble Sort'})
    const array_bars = document.getElementsByClassName('bar')
    const animation = BubbleSortAlgo(this.state.arr)
    for (var i=0; i <animation.length; i++){
        if (animation[i][0] === -1){
            continue;
        }
        else if (i%4===0){
            // const [barIndex1, barIndex2, reset] = animation[i]
            // setTimeout(function(index1, index2){
            //     array_bars[index1].style.backgroundColor = SUCCESS_COLOR
            //     array_bars[index2].style.backgroundColor = SUCCESS_COLOR
            //     if (reset){
            //         array_bars[index1-1].style.backgroundColor = INITIAL_COLOR
            //     }
            // }, i*ANIMATION_SPEED, barIndex1, barIndex2)
            const [barIndex1, barIndex2, reset] = animation[i]
            setTimeout(() =>{
                array_bars[barIndex1].style.backgroundColor = SUCCESS_COLOR
                array_bars[barIndex2].style.backgroundColor = SUCCESS_COLOR
                if (reset){
                    array_bars[barIndex1-1].style.backgroundColor = INITIAL_COLOR
                }
            }, i*this.state.ANIMATION_SPEED)
        }
        else if (i%4 === 1){
            // const [barIndex1, barIndex2] = animation[i]
            // setTimeout(function(index1, index2){
            //     array_bars[index1].style.backgroundColor = SWAP_COLOR
            //     array_bars[index2].style.backgroundColor = SWAP_COLOR
            // }, i*this.state.ANIMATION_SPEED, barIndex1, barIndex2)
            const [barIndex1, barIndex2] = animation[i]
            setTimeout(()=>{
                array_bars[barIndex1].style.backgroundColor = SWAP_COLOR
                array_bars[barIndex2].style.backgroundColor = SWAP_COLOR
            }, i*this.state.ANIMATION_SPEED)
        }
        else if (i%4 === 2){
            // const [barIndex1, newHeight1, barIndex2, newHeight2] = animation[i]
            // setTimeout(function(index1, height1, index2, height2){
            //     array_bars[index1].style.height = `${height1}px`
            //     array_bars[index1].innerHTML = height1

            //     array_bars[index2].style.height = `${height2}px`
            //     array_bars[index2].innerHTML = height2
                
            // }, i*this.state.ANIMATION_SPEED, barIndex1, newHeight1, barIndex2, newHeight2)
            const [barIndex1, newHeight1, barIndex2, newHeight2] = animation[i]
            setTimeout(()=>{
                array_bars[barIndex1].style.height = `${newHeight1}px`
                array_bars[barIndex1].innerHTML = newHeight1

                array_bars[barIndex2].style.height = `${newHeight2}px`
                array_bars[barIndex2].innerHTML = newHeight2
                
            }, i*this.state.ANIMATION_SPEED)
        }
        else if(i%4 ===3){
            // const [barIndex1, barIndex2, end] = animation[i]
            // const color1 = INITIAL_COLOR
            // const color2 = end ? DONE_COLOR : INITIAL_COLOR
            // setTimeout(function(index1, index2){
            //     array_bars[index1].style.backgroundColor = color1
            //     array_bars[index2].style.backgroundColor = color2
            // }, i*this.state.ANIMATION_SPEED, barIndex1, barIndex2)
            const [barIndex1, barIndex2, end] = animation[i]
            const color1 = INITIAL_COLOR
            const color2 = end ? DONE_COLOR : INITIAL_COLOR
            setTimeout(()=>{
                array_bars[barIndex1].style.backgroundColor = color1
                array_bars[barIndex2].style.backgroundColor = color2
            }, i*this.state.ANIMATION_SPEED)
        }

        // after sorting
        if (i === animation.length-1){
            // make first column purple
            setTimeout(()=>{
                array_bars[0].style.backgroundColor = DONE_COLOR
            }, i*this.state.ANIMATION_SPEED)
            // make all columns green
            setTimeout(() => {
                for (var i=0; i < array_bars.length; i++){
                    array_bars[i].style.backgroundColor = SUCCESS_COLOR
                }
                this.setState({disabled: false})
            }, i*this.state.ANIMATION_SPEED)
        }
    }
};