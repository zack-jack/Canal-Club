import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  incPercentage() {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.incPercentage();
    }, 30);
  }

  render() {
    return (
      <div>
        <div>
          <Fade onReveal={() => this.incPercentage()}>
            <div>
              <div>{this.state.discountStart}%</div>
              <div>off</div>
            </div>
          </Fade>

          <Slide right>
            <div>
              <h3>Get 30% off of the latest album</h3>
              <p>
                Franzen wolf disrupt pour-over yr fixie woke chambray whatever
                salvia intelligentsia. Ugh direct trade artisan man bun. Migas
                pork belly vexillologist portland ennui wayfarers church-key
                blog marfa vape man braid vegan.
              </p>
              <div>button goes here</div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
