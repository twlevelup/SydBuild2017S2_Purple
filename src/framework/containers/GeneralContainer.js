import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateStore as update } from '../actions/GeneralStoreActions';

export class GeneralContainer extends PureComponent {
  render() {
    const WrappedComponent = this.props.WrappedComponent;
    return <WrappedComponent appStore={ this.props.appStore } updateStore={ this.props.updateStore } />;
  }
}

const mapStateToProps = (state) => {
  return { appStore: state };
};

const mapDispatchToProps = {
  updateStore: update,
};

GeneralContainer.propTypes = {
  WrappedComponent: PropTypes.func.isRequired,
  appStore: PropTypes.shape().isRequired,
  updateStore: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneralContainer);
