import { TestBed } from '@angular/core/testing';

import { UsuarioService } from './usuario.service';
//import { UsuarioService } from './usuario.service_original';

describe('UsuarioService', () => {
  let service: UsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
