import React, {Component} from 'react'
import './sortingVisualizer.css'

const ANIMATION_SPEED= 10

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
        const array_bars = document.getElementsByClassName('bar')
        const animation = BubbleSortAlgo(this.state.arr)
        for (var i=0; i <animation.length; i++){
            var changeToGreen = (i%4===0) 
            if (animation[i][0] === -1){
                continue;
            }
            else if (changeToGreen){
                const [barIndex1, barIndex2, reset] = animation[i]
                setTimeout(function(index1, index2){
                    array_bars[index1].style.backgroundColor ='green'
                    array_bars[index2].style.backgroundColor = 'green'
                    if (reset){
                        array_bars[index1-1].style.backgroundColor = 'pink'
                    }
                }, i*ANIMATION_SPEED, barIndex1, barIndex2)
            }
            else if (i%4 === 1){
                const [barIndex1, barIndex2] = animation[i]
                setTimeout(function(index1, index2){
                    array_bars[index1].style.backgroundColor ='red'
                    array_bars[index2].style.backgroundColor = 'red'
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
                const color1 = 'pink'
                const color2 = end ? 'purple' : 'pink'
                setTimeout(function(index1, index2){
                    array_bars[index1].style.backgroundColor = color1
                    array_bars[index2].style.backgroundColor = color2
                }, i*ANIMATION_SPEED, barIndex1, barIndex2)
            }

            // after sorting
            if (i === animation.length-1){
                // make first column purple
                setTimeout(()=>{
                    array_bars[0].style.backgroundColor = 'purple'
                }, i*ANIMATION_SPEED)
                // make all columns green
                setTimeout(() => {
                    for (var i=0; i < array_bars.length; i++){
                        array_bars[i].style.backgroundColor = 'green'
                    }
                }, i*ANIMATION_SPEED)
            }
        }

    }

    render(){
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

function BubbleSortAlgo(arr){
    // push 4 times
    // first time: change the color of the two bars to green
    // seoncd time: reset the color of first bar 
    // third time: change height of first bar 
    // fourth time: change height of second bar 
    var pairs= []
    const length = arr.length
    var res_arr = arr.slice()
    for (var i=0; i< length-1; i++){
        for(var j=0; j < length-i-1; j++){
            let temp = res_arr[j]
            let temp2 = res_arr[j+1]
            var end = (j === length-i-2 ? true: false)
            var reset = (j === 0) ? false : true
            // 1st: Change color to green
            // reset prev bar if current is not two pairs
            pairs.push([j, j+1, reset])
            if (res_arr[j] > res_arr[j+1]){
                [res_arr[j], res_arr[j+1]] = [res_arr[j+1], res_arr[j]]
                // 2nd: change color to red
                pairs.push([j, j+1])
                // 3rd: change positions
                pairs.push([j, temp2, j+1, temp])
                // 4th: change color back
                pairs.push([j, j+1, end])
            }
            else{
                // 2nd: no change 
                pairs.push([-1])
                // 3rd: no change
                pairs.push([-1])
                // 4th: change color if end
                if (end) {
                    pairs.push([j, j+1, end])
                }
                else{ pairs.push([-1])}
            }
        }
    }
    const sorted = arr.slice().sort((a, b) => a - b)
    console.log(res_arr)
    console.log(sorted)
    return pairs
}
export default SortingVisualizer