import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import userEvent from '@testing-library/user-event';

describe('Confirmation Dialog component', () => {
  const closeButtonLabel = 'close';
  const acceptButtonLabel = 'accept';

  const labelProps = {
    acceptButton: acceptButtonLabel,
    closeButton: closeButtonLabel,
  };

  const props = {
    isOpen: false,
    onAccept: jest.fn(),
    onClose: jest.fn(),
    title: 'TestTitle',
    labels: labelProps,
    children: (
      <div>
        <h1>test children.</h1>
      </div>
    ),
  };

  it('should not display the confirmation dialog component if it is not open', () => {
    // Arrange

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const closeButton = screen.queryByRole('button', {
      name: labelProps.closeButton,
    });

    // Assert
    expect(closeButton).not.toBeInTheDocument();
  });

  it('should  display the confirmation dialog component if it is open', () => {
    // Arrange
    props.isOpen = true;

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const closeButton = screen.getByRole('button', {
      name: labelProps.closeButton,
    });

    const acceptButton = screen.getByRole('button', {
      name: labelProps.acceptButton,
    });

    const childrenText = screen.getByText(/test children/i);
    screen.debug();

    // Assert
    expect(closeButton).toBeInTheDocument();
    expect(acceptButton).toBeInTheDocument();
    expect(childrenText).toBeInTheDocument();
  });

  it('should call onClose when it clicks on "Close" button', async () => {
    // Arrange
    props.isOpen = true;

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const closeButton = screen.getByRole('button', {
      name: labelProps.closeButton,
    });

    await userEvent.click(closeButton);
    screen.debug();

    // Assert
    expect(closeButton).toBeInTheDocument();
    expect(props.onClose).toHaveBeenCalled();
    expect(props.onAccept).not.toHaveBeenCalled();
  });

  it('should call onAccept and onClose when it clicks on "Accept" button', async () => {
    // Arrange
    props.isOpen = true;

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const acceptButton = screen.getByRole('button', {
      name: labelProps.acceptButton,
    });

    await userEvent.click(acceptButton);
    screen.debug();

    // Assert
    expect(acceptButton).toBeInTheDocument();
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  });
});