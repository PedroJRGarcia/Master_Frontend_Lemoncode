import { act, renderHook, waitFor } from '@testing-library/react';
import { Lookup } from 'common/models';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('useConfirmationDialog specs', () => {
  const lookup: Lookup = {
    id: '1',
    name: 'lookup name test',
  };

  const emptyLookup: Lookup = { id: '', name: '' };

  it('should display default values when component is created', () => {
    // Arrange &&  Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.itemToDelete).toEqual(emptyLookup);
    expect(result.current.isOpen).toBeFalsy();
  });

  it('should display the dialog when call onOpenDialog action', () => {
    // Arrange &&  Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(lookup);
    });

    // Assert
    expect(result.current.itemToDelete).toEqual(lookup);
    expect(result.current.isOpen).toBeTruthy();
  });

  it('should empty the itemToDelete when call onAccept action', () => {
    // Arrange &&  Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(lookup);
      result.current.onAccept();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual(emptyLookup);
    expect(result.current.isOpen).toBeTruthy();
  });

  it('should empty the itemToDelete and set isOpen to false when call onAccept and onClose action', () => {
    // Arrange &&  Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(lookup);
      result.current.onAccept();
      result.current.onClose();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual(emptyLookup);
    expect(result.current.isOpen).toBeFalsy();
  });
});