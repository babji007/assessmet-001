import React, { PureComponent } from 'react'

export default class Counter extends PureComponent {
  

    constructor(props){
        super(props);
        this.state={count:10}
        this.incrementCount=this.incrementCount.bind(this);  //1st way
        console.log("============CounterComponentcreated================");
   
    }



    componentWillMount(){
   console.log("Counter Component will mount");

    }


    componentWillUpdate(){
        console.log("Counter Component will update");
    }



    componentDidMount(){

        console.log(this.props);
        document.title="Initialized witth value "+this.state.count;

        console.log("=========CounterComponentDidMount==========="+this.state.count);
    }


    componentDidUpdate()
    {
        document.title="Updated witth value "+this.state.count;
        
    }



    componentWillUnmount(){
        console.log("============CounterComponentWillUnmount====== "+this.state.count);
    }



    //defnined
    incrementCount(){
        console.log("In incrementCount "+this.state.count);
        //this.state.count=this.state.count+1; //wrong way
      
       this.setState({count:10});   //correct way    
    
      // this.setState(prevState=>{return{count:prevState.count+1}});   //correct way    
    
    }


    decrementCount(){
        console.log("In decrementCount "+this.state.count);
        //this.state.count=this.state.count+1; //wrong way
        this.setState({count:this.state.count-1});   //correct way    
    }



      handleIncrement=()=>{
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }


    render() {

        console.log("============ClockComponent  render "+this.state.count);
 
        return (
            <div className="container">
                <span>
                <h3>Counter Demo</h3>
                <font size="4" color="green">{this.state.count}</font>
                <br/><br/>
                <button  onClick={this.incrementCount}            className="btn btn-info">Increase Counter</button>   
                <button  onClick={()=>this.decrementCount()}      className="btn btn-primary">Decrease Counter</button>   
                <button  onClick={this.handleIncrement}     className="btn btn-success">Increase Count by 4</button>   
                </span>
                </div>
          )
    }


}
