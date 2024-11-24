import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevousuarioComponent } from './nuevousuario.component';

describe('NuevousuarioComponent', () => {
  let component: NuevousuarioComponent;
  let fixture: ComponentFixture<NuevousuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevousuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevousuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
