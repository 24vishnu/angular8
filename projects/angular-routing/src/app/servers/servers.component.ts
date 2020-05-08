import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];
  constructor(
    private serverService: ServersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.servers = this.serverService.getServers();
  }
  onReload() {
    // this.router.navigate(['/servers'], {relativeTo: this.route});
  }
}
