import React from 'react'
import ControlSearch from './ControlSearch'
import ControlSort from './ControlSort'
import ControlAdd from './ControlAdd'

class Control extends React.Component {
  render() {
    return (
      <div className="row">
        <ControlSearch></ControlSearch>
        <ControlSort></ControlSort>
        <ControlAdd></ControlAdd>
      </div>
    )
  }
}
export default Control
