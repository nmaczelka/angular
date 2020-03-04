import { Component,
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};


  constructor() { 
    console.log("constructor log");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges log");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOninit log");
  }

  ngDoCheck() {
    console.log("ngDoCheck log");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit log");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked log");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit log");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked log");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy log");
  }
}
