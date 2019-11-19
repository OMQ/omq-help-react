// @flow strict

import React, { type Node } from 'react';

import { useHelp } from '../hooks/use-help';

/**
 * Type for component properties.
 */
type OmqHelpIntegrationProps = {
  account: string,
  apiKey: string,
};

/**
 * Renders integration snippet and includes help hook to
 * load/update OMQ Help client.
 *
 * @param {OmqHelpIntegrationProps} props - Component properties
 *
 * @since 1.0.0
 *
 * @returns {Node}
 */
export function OmqHelpIntegration(props: OmqHelpIntegrationProps): Node {
  const { account, apiKey } = props;

  useHelp(account, apiKey);

  // render help element
  return (
    <div
      id="omq-help-container"
      data-omq-help-account={account}
      data-omq-help-api-key={apiKey}
    />
  );
}