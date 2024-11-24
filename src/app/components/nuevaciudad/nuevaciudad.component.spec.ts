import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaciudadComponent } from './nuevaciudad.component';

describe('NuevaciudadComponent', () => {
  let component: NuevaciudadComponent;
  let fixture: ComponentFixture<NuevaciudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaciudadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaciudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
