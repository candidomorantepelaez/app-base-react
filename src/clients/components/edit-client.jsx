import React from "react";
import PropTypes from "prop-types";
import { map } from "ramda";
import Form from "core/components/forms/form";
import createClientForm from "clients/forms/create-client-form";

const EditClient = ({client, onEdit}) => (
  <Form
    actions={createClientForm.actions}
    onSubmit={value => onEdit(value)}
    fields={createClientForm.fields}
    initialValue={client}
  />
);

EditClient.propTypes = {
  client: PropTypes.object,
  onEdit: PropTypes.func,
};

export default EditClient;
