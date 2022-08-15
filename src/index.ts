import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IBlocklyRegistry } from 'jupyterlab-blockly';

/**
 * Initialization data for the jupyterlab-lego-boost extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-lego-boost:plugin',
  autoStart: true,
  requires: [IBlocklyRegistry],
  activate: (app: JupyterFrontEnd, blockly: IBlocklyRegistry) => {
    console.log('JupyterLab extension jupyterlab-lego-boost is activated!');
  }
};

export default plugin;
