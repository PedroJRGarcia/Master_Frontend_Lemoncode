import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm'
import { mapProjectFromApiToVm } from './project.mapper';

describe('./pods/project', () => {
  it('should return empty array when feeding undefined project', () => {
    // Arrange
    const project = undefined;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return empty array when feeding null project', () => {
    // Arrange
    const project = null;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return empty array when feeding empty array project', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(project);
  });


  it('should return expected result but feeding null project', () => {
    // Arrange
    const project: apiModel.Project =
      {
        id: 'test id',
        name: 'test project name',
        externalId: 'test external Id',
        comments: 'test comments',
        isActive: true,
        employees: null,
      };

    const expectedResult: viewModel.Project = 
      {
        id: 'test id',
        name: 'test project name',
        externalId: 'test external Id',
        comments: 'test comments',
        isActive: true,
        employees: [],
      };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });


  it('should return expected result but feeding undefined project', () => {
    // Arrange
    const project: apiModel.Project =
      {
        id: 'test id',
        name: 'test project name',
        externalId: 'test external Id',
        comments: 'test comments',
        isActive: true,
        employees: undefined,
      };

    const expectedResult: viewModel.Project = 
      {
        id: 'test id',
        name: 'test project name',
        externalId: 'test external Id',
        comments: 'test comments',
        isActive: true,
        employees: [],
      };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return expected result feeding correct values', () => {
    // Arrange
    const project: apiModel.Project =
      {
        id: 'test id',
        name: 'test project name',
        externalId: 'test external Id',
        comments: 'test comments',
        isActive: true,
        employees: [
          {
            id: 'test id',
            isAssigned: true,
            employeeName: 'test employee name',
          }
        ],
      };

    const expectedResult: viewModel.Project = 
      {
        id: 'test id',
        name: 'test project name',
        externalId: 'test external Id',
        comments: 'test comments',
        isActive: true,
        employees: [
          {
            id: 'test id',
            isAssigned: true,
            employeeName: 'test employee name',
          }
        ],
      };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
