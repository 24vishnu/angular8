import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
// tslint:disable:no-output-rename
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  // Event emitter is a generic type so it use <> sign
  // EventEmitter an object of angular framework which allow to emitte your own events.
  // These are not input for this coponent this is output so we use output decorator
  // for passing data out of the component
  @Output()
  serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // we can use alise of output event
  @Output('bpCreated')
  blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

}
