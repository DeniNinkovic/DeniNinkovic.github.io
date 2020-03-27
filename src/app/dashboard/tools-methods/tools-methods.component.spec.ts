import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsMethodsComponent } from './tools-methods.component';

describe('ToolsMethodsComponent', () => {
  let component: ToolsMethodsComponent;
  let fixture: ComponentFixture<ToolsMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
