import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-webhooks',
  templateUrl: './webhooks.component.html',
  styleUrls: ['./webhooks.component.scss']
})
export class WebhooksComponent implements OnInit {
  wh: string = ''

  error: string = '';

  addForm: FormGroup;

  constructor(
    private http: HttpService,
  ) { }

  ngOnInit(): void {
    this.generateForm();
    this.getWH();
  }

  async getWH(){
    this.error = '';
    this.http.getWH()
      .then( (w:any) => this.wh = w.url )
      .catch( e => {})
  }


  async addWH(  ){
    this.error = '';
    this.http.addWH( this.addForm.value.url )
      .then( () => {
        this.wh = this.addForm.value.url;
        this.addForm.reset();
      })
      .catch( e => {
        this.error = e.error.error;
      })
  }

  generateForm(){
    this.addForm = new FormGroup({
      url: new FormControl( '', [Validators.required] )
    })
  }

  async deleteWH(){
    this.error = '';
    this.http.deleteWH()
      .then( () => this.wh = '' )
      .catch( e => {
        this.error = e.error.error;
      })
  }

}
