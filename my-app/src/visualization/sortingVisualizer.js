import React, {Component} from 'react'
import './sortingVisualizer.css'
import { SelectionSort } from './SelectionSort.js'
import { BubbleSort } from './BubbleSort.js'
import { InsertionSort } from './InsertionSort.js'

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
        // reset all color
        const array_bars = document.getElementsByClassName('bar')
        for (var i=0; i < array_bars.length; i++){
            array_bars[i].style.backgroundColor = INITIAL_COLOR
        }
    }

    BubbleSort = BubbleSort.bind(this)

    SelectionSort = SelectionSort.bind(this)

    InsertionSort = InsertionSort.bind(this)

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
                    <label onClick={this.SelectionSort}>Selection Sort</label>
                    <label onClick={this.InsertionSort}>Insertion Sort</label>
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