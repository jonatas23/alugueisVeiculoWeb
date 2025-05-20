import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlugueisListaComponent } from './alugueis-lista.component';

describe('AlugueisListaComponent', () => {
  let component: AlugueisListaComponent;
  let fixture: ComponentFixture<AlugueisListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlugueisListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlugueisListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
