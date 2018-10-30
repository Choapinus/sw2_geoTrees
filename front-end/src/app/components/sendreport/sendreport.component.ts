import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TreesService } from '../../services/trees.service';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER } from '@angular/cdk/overlay/typings/overlay-directives';

@Component({
  selector: 'app-sendreport',
  templateUrl: './sendreport.component.html',
  styleUrls: ['./sendreport.component.css']
})
export class SendreportComponent implements OnInit {
  tree: any;
  email: any;
  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               private _treesService: TreesService) {
               }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this._treesService.getTree(params['idx']).subscribe(
        data => {
          this.tree = data.data;
        }
      );
    });
  }
  success( ) {
    this.router.navigate( ['/success']);
  }
}
