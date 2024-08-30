import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteSalaComponent } from './componente-sala.component';

describe('ComponenteSalaComponent', () => {
  let component: ComponenteSalaComponent;
  let fixture: ComponentFixture<ComponenteSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteSalaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
