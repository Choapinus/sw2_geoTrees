import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TreesService } from '../../services/trees.service';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

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
               private _treesService: TreesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.tree = this._treesService.getTree( params['idx'] );
    });
  }
  success( ) {
    this.router.navigate( ['/success']);
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
}

export class FormFieldErrorExample {
  email = new FormControl('', [Validators.required, Validators.email]);
