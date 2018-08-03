import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Mr Narco 2' },
      { id: 14, name: 'Mr Narco 3' },
      { id: 15, name: 'Mr Narco 4' },
      { id: 16, name: 'Mr Narco 5' },
      { id: 17, name: 'Mr Narco 6' },
      { id: 18, name: 'Dr Mr Narco 7' },
      { id: 19, name: 'Mr Narco 8' },
      { id: 20, name: 'Mr Narco 9' }
    ];
    return {heroes};
  }
}