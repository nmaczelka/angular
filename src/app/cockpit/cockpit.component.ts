import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

@ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  /* newServerName = '';
  newServerContent = ''; */

  onAddServer(nameinput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameinput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameinput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameinput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
