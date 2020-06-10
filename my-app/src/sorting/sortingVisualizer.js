import React, {Component} from 'react'
import './sortingVisualizer.css'

class SortingVisualizer extends Component{
    constructor(){
        super()
        this.state = ({
            arr: []
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
        const length = this.state.arr.length
        var res_arr = this.state.arr
        const array_bars = Document.getElementsByClassName('bar')
        for (var i=0; i< length-1; i++){
            for(var j=0; j < length-i-1; j++){
                if (res_arr[j] > res_arr[j+1]){
                    [res_arr[j], res_arr[j+1]] = [res_arr[j+1], res_arr[j]]
                }
            }
        }
        this.setState({arr: res_arr})
    }

    render(){
        console.log(this.state.arr)
        return(
            <div className='container'>
                <div className='graph_section'>
                    {this.state.arr.map((i, index) =>(
                        <div className='bar' key={index} 
                        style={{height: `${i}px`, backgroundColor: 'pink'}}>
                            {i}
                        </div>
                    ))}
                </div>
                <div className='button_section'>
                    <button onClick={this.resetArr}>Reset</button>
                    <button onClick={this.BubbleSort}>Bubble Sort</button>
                </div>
            </div>
        )
    }
}

// returns a random number from 5-100
function getRandNum(){
    const min = 5
    const max = 100
    return Math.floor(min + Math.random() * (max - min)) 
}
export default SortingVisualizer