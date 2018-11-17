import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import CreateClient from "clients/components/create-client";
import { createClient } from "clients/actions";

class CreateClientPage extends Component {
  static propTypes = {
    saveClient: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(value) {
    this.props.saveClient(value);
  }

  render() {
    return (
      <div>
        <h1><FormattedMessage id="clients.create.page.title" /></h1>
        <CreateClient onSave={this.handleSave} />
      </div>
    );
  }
}

const storeConnect = connect(
  () => ({}),
  dispatch => ({
    saveClient: value => dispatch(createClient(value)),
  }),
);

export default storeConnect(CreateClientPage);
