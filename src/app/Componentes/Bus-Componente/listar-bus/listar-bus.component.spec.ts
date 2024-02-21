import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBusComponent } from './listar-bus.component';

describe('ListarBusComponent', () => {
  let component: ListarBusComponent;
  let fixture: ComponentFixture<ListarBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarBusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
