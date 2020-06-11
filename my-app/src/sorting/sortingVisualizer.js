import React, {Component} from 'react'
import './sortingVisualizer.css'
import BubbleSortAlgo from './BubbleSort.js'

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