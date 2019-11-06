import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // tslint:disable-next-line: no-output-rename
  @Output('srvCreated') serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // tslint:disable-next-line: no-output-rename
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = '';
  // newServerContent = '';
  constructor() {}

  ngOnInit() {}

  onAddServer(nameInput: HTMLInputElement, contentInput:HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: contentInput.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: contentInput.value
    });
  }
}
