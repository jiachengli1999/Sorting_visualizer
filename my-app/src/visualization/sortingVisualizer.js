import React, {Component} from 'react'
import './sortingVisualizer.css'
import { SelectionSort } from './SelectionSort.js'
import { BubbleSort } from './BubbleSort.js'
import { InsertionSort } from './InsertionSort.js'
import { QuickSort } from './QuickSort.js'
import { MergeSort } from './MergeSort.js'

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
            disabled: false,
            title: 'Sorting Visualizer',
        })
        this.resetArr = this.resetArr.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        this.resetArr()
    }

    resetArr(){
        this.setState({title: 'Sorting Visualizer'})
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
        this.setState({disabled: false})
    }

    handleClick(e){
        const val = e.target.innerHTML
        if (!this.state.disabled){
            // set disabled and run
            this.setState({disabled: true})
            if (val === 'Reset'){ return this.resetArr() }
            else if (val === 'Bubble Sort'){ return this.BubbleSort()}
            else if (val === 'Selection Sort'){ return this.SelectionSort()}
            else if (val === 'Insertion Sort'){ return this.InsertionSort()}
            else if (val === 'Quick Sort'){ return this.QuickSort()}
            else if (val === 'Merge Sort'){ return this.MergeSort()}
        }
    }

    BubbleSort = BubbleSort.bind(this)

    SelectionSort = SelectionSort.bind(this)

    InsertionSort = InsertionSort.bind(this)

    QuickSort = QuickSort.bind(this)

    MergeSort = MergeSort.bind(this)


    render(){
        return(
            <div>
                <div className='button_section'>
                    <label onClick={this.handleClick} >Reset</label>
                    <label onClick={this.handleClick} >Bubble Sort</label>
                    <label onClick={this.handleClick} >Selection Sort</label>
                    <label onClick={this.handleClick} >Insertion Sort</label>
                    <label onClick={this.handleClick} >Quick Sort</label>
                    <label onClick={this.handleClick} >Merge Sort</label>
                </div>
                <div className='container'>
                    <div className='title'><h1>{this.state.title}</h1></div>
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