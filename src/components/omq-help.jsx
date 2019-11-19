// @flow strict

import React, { type Node } from 'react';

import { OmqHelpIntegration } from './omq-help-integration';

/**
 * Type for component properties.
 */
type OmqHelpProps = {
  // Name/URL of account
  account: string,

  // OMQ Help API key
  apiKey: string,
};

/**
 * Render OMQ Help integration if all
 * passed properties are valid.
 *
 * @param {OmqHelpProps} props - Component properties
 *
 * @returns {Node}
 */
export function OmqHelp(props: OmqHelpProps): Node {
  const { account, apiKey } = props;

  if (account == null || account === '' || apiKey == null || apiKey === '') {
    console.error(
      'OMQ Help: Account and/or API key is missing. Please check the integration of OMQ Help component.',
      '\nAdd your account and API key as props to the component: <OMQHelp account="ACCOUNT_NAME" apiKey="HELP_API_KEY" />',
    );
    return null;
  }

  return <OmqHelpIntegration account={account} apiKey={apiKey} />;
}
