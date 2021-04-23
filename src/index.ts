import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

 import { ICommandPalette } from '@jupyterlab/apputils';

import { IMainMenu } from '@jupyterlab/mainmenu';

import { Menu } from '@lumino/widgets';

/**
 * Initialization data for the new-mainmenu extension.
 */
 const extension: JupyterFrontEndPlugin<void> = {
  id: 'main-menu',
  autoStart: true,
  requires: [ICommandPalette, IMainMenu],
  activate: (
    app: JupyterFrontEnd,
    palette: ICommandPalette,
    mainMenu: IMainMenu
  ) => {
    const { commands } = app;

    // Add a command
    const command = 'new-mainmenu';
    commands.addCommand(command, {
      label: 'CNS',
      caption: 'CNS',
      execute: (args: any) => {
        window.alert(
          `Congratulation, you have joined Skymind's Consultant & Services.`
        );
      }
    });

    // Add the command to the command palette
    const category = 'Extension Examples';
    palette.addItem({
      command,
      category
    });

    // Create a menu
    const tutorialMenu: Menu = new Menu({ commands: app.commands });
    tutorialMenu.title.label = 'Skymind';
    mainMenu.addMenu(tutorialMenu, { rank: 80 });

    // Add the command to the menu
    tutorialMenu.addItem({ command });
  }
};

export default extension;
