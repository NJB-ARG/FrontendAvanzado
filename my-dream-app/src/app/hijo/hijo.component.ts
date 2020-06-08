import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit, OnChanges{

  @Input()
  public tituloHijo: string = 'HijoComponent titulo';
  @Input()
  public titleHijo: string = 'HijoComponent title';
  
  @Output() 
  public salidaHijo: EventEmitter<any> = new EventEmitter();
  @Output()
  public salidaHijo2: EventEmitter<MouseEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('HijoComponent.ngOnChanges', changes);
    
    this.salidaHijo.emit("salidaHijo");
    this.salidaHijo2.emit();
  }

  public OnClick(event : any): void {
    console.log('HijoComponent.OnClick - 1', event);
    this.salidaHijo.emit();
  }

  public OnClick2(event : MouseEvent): void {
    console.log('HijoComponent.OnClick - 2', event);
    this.salidaHijo2.emit();
  }

}