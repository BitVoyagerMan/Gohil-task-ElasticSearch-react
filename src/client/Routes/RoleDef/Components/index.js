import * as React from 'react';

import { ThemeContext } from '../../../Context';
import RoleListComponent from './RoleList';
import { connect } from "react-redux";
import { getPublished } from "../../../actions/roles";
import { RoleDefProp } from './RoleDefProp';
/**
 * Root component which calls the list component to show the existing role list
 * Then list component calls different other components like create, members, etc
 * @extends React.Component
 */
class RoleDefComponent extends React.Component {
  /**
   * Render the component to the DOM
   * @returns {}
   */
  constructor(props ) {
    super(props);
    
      
  }
  componentDidMount() {
    this.props.getPublished()
  }
  
  
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {
            theme => (
              <RoleListComponent
                theme={theme}
                roleDefs={this.props.roleDefs}
              />
            )
          }
        </ThemeContext.Consumer>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    roleDefs: state.data
  };
};
const mapDispatchToProps = {
  getPublished
};

export default connect(mapStateToProps, mapDispatchToProps)(RoleDefComponent);