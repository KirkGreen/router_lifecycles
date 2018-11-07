import React, { PureComponent } from 'react';

class Life extends PureComponent {
    // 1 get default props

    // 2 set default state
    state = {
      title: 'Life cycles'
    };

    // // 3 before render
    // componentWillMount(){
    //     console.log('before render');
    // }
    //
    // componentWillUpdate(){
    //     console.log('Before UPDATE')
    // }
    //
    // componentDidUpdate(){
    //     console.log('After UPDATE')
    // }
    //
    // shouldComponentUpdate(nextPorps, nextState ){
    //     if(nextState.title === this.state.title){
    //         return false
    //     }
    //
    //     return true;
    //
    // }
    //
    // componentWillReceiveProps(){
    //     console.log('BEFORE RECEIVE PROPS')
    // }
    //
    // componentWillUnmount(){
    //     console.log('UNMOUNT');
    // }
    //
    // // 4 render jsx

    render(){
        console.log('RENDER');
        return(
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={
                    ()=> this.setState({title:'something else '})}
                >CLICK TO CHANGE</div>
            </div>
        )
    }

}

export default Life;