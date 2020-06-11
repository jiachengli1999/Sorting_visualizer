import React, {Component} from 'react'
import './sortingVisualizer.css'
import BubbleSortAlgo from './BubbleSort.js'
import SelectionSortAlgo from './SelectionSort.js'

const ANIMATION_SPEED= 10
const INITIAL_COLOR = 'pink'
const SUCCESS_COLOR = '#7FFFD4' // also iteration color
const SWAP_COLOR = '#F08080'
const DONE_COLOR = '#E6E6FA'

class SortingVisualizer extends Component{
    constructor(){
        super()
        this.state = ({
            arr: [],
        })
        this.resetArr = this.resetArr.bind(this)
        this.BubbleSort = this.BubbleSort.bind(this)
        this.InsertionSort = this.InsertionSort.bind(this)
        this.SelectionSort = this.SelectionSort.bind(this)
        this.QuickSort = this.QuickSort.bind(this)
        this.MergeSort = this.MergeSort.bind(this)
    }

    componentDidMount(){
        this.resetArr()
    }

    resetArr(){
        const res = []
        for (var i =0; i <20; i++){
            res.push(getRandNum())
        }
        this.setState({arr: res})
    }

    BubbleSort(){
        const array_bars = document.getElementsByClassName('bar')
        const animation = BubbleSortAlgo(this.state.arr)
        for (var i=0; i <animation.length; i++){
            if (animation[i][0] === -1){
                continue;
            }
            else if (i%4===0){
                const [barIndex1, barIndex2, reset] = animation[i]
                setTimeout(function(index1, index2){
                    array_bars[index1].style.backgroundColor = SUCCESS_COLOR
                    array_bars[index2].style.backgroundColor = SUCCESS_COLOR
                    if (reset){
                        array_bars[index1-1].style.backgroundColor = INITIAL_COLOR
                    }
                }, i*ANIMATION_SPEED, barIndex1, barIndex2)
            }
            else if (i%4 === 1){
                const [barIndex1, barIndex2] = animation[i]
                setTimeout(function(index1, index2){
                    array_bars[index1].style.backgroundColor =SWAP_COLOR
                    array_bars[index2].style.backgroundColor = SWAP_COLOR
                }, i*ANIMATION_SPEED, barIndex1, barIndex2)
            }
            else if (i%4 === 2){
                const [barIndex1, newHeight1, barIndex2, newHeight2] = animation[i]
                setTimeout(function(index1, height1, index2, height2){
                    array_bars[index1].style.height = `${height1}px`
                    array_bars[index1].innerHTML = height1

                    array_bars[index2].style.height = `${height2}px`
                    array_bars[index2].innerHTML = height2
                    
                }, i*ANIMATION_SPEED, barIndex1, newHeight1, barIndex2, newHeight2)
            }
            else if(i%4 ===3){
                const [barIndex1, barIndex2, end] = animation[i]
                const color1 = INITIAL_COLOR
                const color2 = end ? DONE_COLOR : INITIAL_COLOR
                setTimeout(function(index1, index2){
                    array_bars[index1].style.backgroundColor = color1
                    array_bars[index2].style.backgroundColor = color2
                }, i*ANIMATION_SPEED, barIndex1, barIndex2)
            }

            // after sorting
            if (i === animation.length-1){
                // make first column purple
                setTimeout(()=>{
                    array_bars[0].style.backgroundColor = DONE_COLOR
                }, i*ANIMATION_SPEED)
                // make all columns green
                setTimeout(() => {
                    for (var i=0; i < array_bars.length; i++){
                        array_bars[i].style.backgroundColor = SUCCESS_COLOR
                    }
                }, i*ANIMATION_SPEED)
            }
        }
    }

    InsertionSort(){

    }

    SelectionSort(){
        const animations = SelectionSortAlgo(this.state.arr)
        const array_bars = document.getElementsByClassName('bar')
        console.log(array_bars[0].style.height.slice(0,-2))
        for (var i=0; i < animations.length; i++){
            // if (animations[i][0] === -1) {continue}
            // var changeColor = (i%5 === 0) || (i%5 === 1) || (i%5 === 2) || (i%5 === 4)
            // if (changeColor){
            //     const [barIndex1, barIndex2] = animations[i]
            //     const color1 = (i%5 === 0) ? SUCCESS_COLOR : (i%5 === 1) ? SUCCESS_COLOR : 
            //         (i%5 === 2) ? SWAP_COLOR : (i%5 === 4) ? DONE_COLOR : null
            //     const color2 = (i%5 === 0) ? SUCCESS_COLOR : (i%5 === 1) ? INITIAL_COLOR : 
            //         (i%5 === 2) ? SWAP_COLOR : (i%5 === 4) ? INITIAL_COLOR : null
            //     setTimeout(()=>{
            //         array_bars[barIndex1].style.backgroundColor = color1
            //         array_bars[barIndex2].style.backgroundColor = color2
            //     }, i*1000)
            // }
            // else { // i%5 === 3
            //     const [barIndex1, newHeight1, barIndex2, newHeight2] = animations[i]
            //     setTimeout(function(index1, h1, index2, h2){
            //         array_bars[index1].style.height = `${h1}px`
            //         array_bars[index1].innerHTML = h1
            //         array_bars[index2].style.height = `${h2}px`
            //         array_bars[index2].innerHTML = h2
            //     }, i*ANIMATION_SPEED, barIndex1, newHeight1, barIndex2, newHeight2)
            // }

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
                }, i * 10)
            }
            else{ //swap 
                setTimeout(() =>{
                     // get the height number for the bars
                    const h1 = array_bars[barIndex1].style.height.slice(0, -2)
                    const h2 = array_bars[barIndex2].style.height.slice(0, -2)
                    // assign height 
                    array_bars[barIndex1].style.height = `${h2}px`
                    array_bars[barIndex1].innerHTML = h2
                    array_bars[barIndex2].style.height = `${h1}px`
                    array_bars[barIndex2].innerHTML = h1
                }, i*10)
            }
            
            // if (i%5 === 1){
            //     const [barIndex1, barIndex2] = animations[i]
            //     setTimeout(()=>{
            //         array_bars[barIndex1].style.backgroundColor = SUCCESS_COLOR
            //         array_bars[barIndex2].style.backgroundColor = INITIAL_COLOR
            //     }, i * 500)
            // }

        }
    }

    QuickSort(){

    }

    MergeSort(){

    }


    render(){
        return(
            <div>
                <div className='button_section'>
                    <label onClick={this.resetArr}>Reset</label>
                    <label onClick={this.BubbleSort}>Bubble Sort</label>
                    <label onClick={this.InsertionSort}>Insertion Sort</label>
                    <label onClick={this.SelectionSort}>Selection Sort</label>
                    <label onClick={this.QuickSort}>Quick Sort</label>
                    <label onClick={this.MergeSort}>Merge Sort</label>
                </div>
                <div className='container'>
                    <div className='title'><h1>Sorting Visualizer</h1></div>
                    <div className='graph_section'>
                        {this.state.arr.map((i, index) =>(
                            <div className='bar' key={index} 
                            style={{height: `${i}px`, backgroundColor: INITIAL_COLOR}}>
                                <div className='text' key={index}>{i}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

// returns a random number from 50-300
function getRandNum(){
    const min = 50
    const max = 300
    return Math.floor(min + Math.random() * (max - min)) 
}

export default SortingVisualizer