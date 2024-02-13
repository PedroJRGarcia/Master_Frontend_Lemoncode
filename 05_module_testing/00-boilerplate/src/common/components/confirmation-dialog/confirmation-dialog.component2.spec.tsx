import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('confirmation dialog component test', () => {
  const props = {
    isOpen: false,
    onAccept: () => {},
    onClose: () => {},
    title: 'test title',
    labels: {
      closeButton: 'test closeButton',
      acceptButton: 'test acceptButton',
    },
    children: (
      <span>
        <p>test children.</p>
      </span>
    ),
  };

  it('should not display the dialog component when isOpen is false', () => {
    //Arrange

    //Act
    render(<ConfirmationDialogComponent {...props} />);
    const emptyScreen = screen.getAllByRole;

    //Assert
    expect(emptyScreen).not.toBeInTheDocument;
  });

  it('should display the dialog component title when isOpen is true', () => {
    //Arrange
    props.isOpen = true;

    //Act
    render(<ConfirmationDialogComponent {...props} />);
    const title = screen.getByRole('dialog').firstChild.textContent;

    //Assert
    expect(title).toEqual('test title');
  });

  it('should call onClose callback when the closeButton is clicked', async () => {
    //Arrange
    let counter = 0;
    props.onClose = () => counter++;

    //Act
    render(<ConfirmationDialogComponent {...props} />);
    const closeButton = screen.getAllByRole('button')[0];
    await userEvent.click(closeButton);

    //Assert
    expect(counter).toEqual(1);
  });

  it('should call onAccept and onClose callback when the acceptButton is clicked', async () => {
    //Arrange
    let onAcceptCounter = 0;
    let onCloseCounter = 0;
    props.onAccept = () => onAcceptCounter++;
    props.onClose = () => onCloseCounter++;

    //Act
    render(<ConfirmationDialogComponent {...props} />);
    const acceptButton = screen.getAllByRole('button')[1];
    await userEvent.click(acceptButton);

    //Assert
    expect(onAcceptCounter).toEqual(1);
    expect(onCloseCounter).toEqual(1);
  });

  it('should display the label of the acceptButton correctly when isOpen is true', () => {
    //Arrange
    props.isOpen = true;
    props.labels.acceptButton = 'test label';

    //Act
    render(<ConfirmationDialogComponent {...props} />);
    const acceptButton = screen.getAllByRole('button')[1];
    const acceptButtonLabel = acceptButton.textContent;

    //Assert
    expect(acceptButtonLabel).toEqual('test label');
  });

  it('should display the children of the dialog component when isOpen is true', () => {
    //Arrange
    props.isOpen = true;
    props.children = (
      <div>
        <h1 role="myChild">Test Child</h1>
      </div>
    );

    //Act
    render(<ConfirmationDialogComponent {...props} />);
    const children = screen.getByRole('myChild');
    const childrenText = children.textContent;

    //Assert
    expect(childrenText).toEqual('Test Child');
  });
});
