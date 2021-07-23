import React from 'react';

class Loading extends React.Component{
  state ={
    isLoading : true,
    movies: [],
  };

  componentDidMount(){
    //데이터 로딩
    setTimeout(()=> {
      this.setState({isLoading : false});
    }, 6000);
  }

  render(){
    const {isLoading} = this.state;

    return (
      <>
        {isLoading ? 'Loading...' : 'We are ready!!!'}
      </>
    )
  }
}

function App(){
  return (
    <>
      <Loading/>
    </>
  );
}

export default App;
