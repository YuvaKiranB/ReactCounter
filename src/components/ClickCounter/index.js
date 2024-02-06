// Write your code here
import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  increaseCount = () => {
    this.setState(previousCount => ({
      count: previousCount.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="content">
        <h1 className="h1">
          The Button has been clicked <br />{' '}
          <span className="span">{count}</span> times
        </h1>
        <p className="p1">Click the button to increase the count!</p>
        {
          // eslint-disable-next-line
          <button className="button" onClick={this.increaseCount}>
            Click Me!
          </button>
        }
      </div>
    )
  }
}

export default ClickCounter
