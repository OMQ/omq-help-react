//@flow strict

import React from 'react';

import { loadOmqHelpClient } from '../utils/helpers';

// public API
// noinspection JSUnusedLocalSymbols
declare var OMQHelp: {
  update: (account: string, apiKey: string) => void,
  unmountOMQHelp: () => void,
};

/**
 * React hook to add/remove OMQ Help from page.
 *
 * @param {string} account - Name/URL of account
 * @param {string} apiKey - OMQ Help API key
 */
export function useHelp(account: ?string, apiKey: ?string) {
  React.useEffect(() => {
    const { OMQHelp } = window;

    // check if account & apiKey
    if (account == null || account === '' || apiKey == null || apiKey === '') {
      return;
    }

    // check if client already has been loaded
    if (OMQHelp == null) {
      // load client
      loadOmqHelpClient(account);
    } else {
      // update client, if already on screen
      OMQHelp.update({
        account,
        apiKey,
      });
    }

    // unmount help when component is unmounted
    return () => {
      if (OMQHelp != null) {
        OMQHelp.unmountOMQHelp();
      }
    };
  }, [account, apiKey]);
}
