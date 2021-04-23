import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the new-mainmenu extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'new-mainmenu:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension new-mainmenu is activated!');
  }
};

export default extension;
