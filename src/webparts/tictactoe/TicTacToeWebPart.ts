import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import {TicTacToePart} from './components/TicTacToePart';

export default class TicTacToePartWebPart extends BaseClientSideWebPart<any> {

  public render(): void {
    const element: React.ReactElement<any > = React.createElement(
      TicTacToePart,
      {
        FirstPlayer: this.properties.FirstPlayer,
        SecondPlayer : this.properties.SecondPlayer
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Tic Tac Toe"
          },
          groups: [
            {
              groupName: "Tic Tac Toe",
              groupFields: [
                PropertyPaneTextField('FirstPlayer', {
                  label: "First Player"
                }), PropertyPaneTextField('SecondPlayer', {
                  label: "Second Player"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
