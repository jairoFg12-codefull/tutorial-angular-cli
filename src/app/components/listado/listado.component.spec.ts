import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoComponent } from './listado.component';

describe('ListadoComponent', () => {
  let component: ListadoComponent;
  let fixture: ComponentFixture<ListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  
  it("should be show a list of a last 10 items", () => {

  })

  it("should be show a title, description and status (Done, in process, Todo)", ()=>{

  })

  it("It should show in green those that are already fulfilled, in yellow those that are to be realized, and in orange those that are in process.", ()=>{
    // it may be necessary to distribute them in other specifications :D
  })

  it("Each time I add a new task it is placed at the top of the list.", ()=>{

  })
});
