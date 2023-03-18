import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SelectComponent } from './select.component';
import { Lookup } from 'common/models';

describe('common/components/form/select/select.component specs', () => {
  it('should render a select element when it feeds required props and three items', () => {
    // Arrange
    const props = {
      items: [
        { id: '1', name: 'Item 1' },
        { id: '2', name: 'Item 2' },
        { id: '3', name: 'Item 3' },
      ] as Lookup[],
      label: 'Test label',
      value: '',
    };

    // Act
    render(<SelectComponent {...props} />);

    const selectElement = screen.getByRole('button');

    // Assert
    expect(selectElement).toBeInTheDocument();
  });

  it('should render a menu with three item when it clicks on select element', async () => {
    // Arrange
    const props = {
      items: [
        { id: '1', name: 'Item 1' },
        { id: '2', name: 'Item 2' },
        { id: '3', name: 'Item 3' },
      ] as Lookup[],
      label: 'Test label',
      value: '',
    };

    // Act
    render(<SelectComponent {...props} />);

    const selectElement = screen.getByRole('button');

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    await userEvent.click(selectElement);

    const menuElement = screen.getByRole('listbox');
    const itemElementList = screen.getAllByRole('option');

    // Assert
    expect(menuElement).toBeInTheDocument();
    expect(itemElementList).toHaveLength(3);
  });
});