import React from "react";
import styled from "styled-components";

const Wrapper = styled.section``;

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
      const {location} = this.props;
      if (location.state){

    return (
      <Wrapper>
        <span>{location.state.title}</span>
      </Wrapper>
    );
      } else {
          return null;
      }
  }
}

export default Detail;
