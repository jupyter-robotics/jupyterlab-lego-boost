import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-lego-boost extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-lego-boost:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-lego-boost is activated!');
  }
};

export default plugin;
