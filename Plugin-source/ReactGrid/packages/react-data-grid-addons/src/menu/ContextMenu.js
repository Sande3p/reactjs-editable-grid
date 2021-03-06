import React, {PropTypes} from 'react';
import {ContextMenu} from 'react-contextmenu';

class ReactDataGridContextMenu extends React.Component {
  render() {
    return (
      <ContextMenu id="reactDataGridContextMenu">
        {this.props.children}
      </ContextMenu>
    );
  }
}

ReactDataGridContextMenu.propTypes = {
  children: PropTypes.node
};

export default ReactDataGridContextMenu;
