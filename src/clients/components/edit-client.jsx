import React from "react";
import PropTypes from "prop-types";
import Form from "core/application/components/forms/form";
import createClientForm from "clients/forms/create-client-form";
import { map } from "ramda";

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
