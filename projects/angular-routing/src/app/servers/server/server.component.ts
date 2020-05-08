import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
// tslint:disable:no-string-literal
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  constructor(private serverService: ServersService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serverService.getServer(id);

    this.route.params.subscribe((params: Params) => {
        this.server = this.serverService.getServer(+params['id']);
      }
    );
  }

}
