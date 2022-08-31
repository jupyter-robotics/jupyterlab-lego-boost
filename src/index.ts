import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IBlocklyRegistry } from 'jupyterlab-blockly';

import BlocklyBoost from './lego_boost_python_generators_and_blocks';

/**
 * Initialization data for the jupyterlab-lego-boost extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-lego-boost:plugin',
  autoStart: true,
  requires: [IBlocklyRegistry],
  activate: (app: JupyterFrontEnd, blockly: IBlocklyRegistry) => {
    console.log('JupyterLab extension jupyterlab-lego-boost is activated!');

    //Registering the new toolbox containing all Lego Boost blocks.
    blockly.registerToolbox('boost', BlocklyBoost.Toolbox);
  }
};

export default plugin;
