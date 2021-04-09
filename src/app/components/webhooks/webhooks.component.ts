import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-webhooks',
  templateUrl: './webhooks.component.html',
  styleUrls: ['./webhooks.component.scss']
})
export class WebhooksComponent implements OnInit {
  wh: string;

  addForm: FormGroup;

  constructor(
    private http: HttpService,
  ) { }

  ngOnInit(): void {
  }

  async getWH(){
    this.http.getWH()
      .then( (w:any) => this.wh = w.url )
      .catch( e => {})
  }


  async addWH(  ){
    this.http.addWH( this.addForm.value.url )
      .then( () => {
        this.wh = this.addForm.value.url;
        this.addForm.reset();
      })
      .catch( e => {})
  }

  generateForm(){
    this.addForm = new FormGroup({
      url: new FormControl( '', [Validators.required] )
    })
  }

  async deleteWH(){
    this.http.deleteWH()
      .then( () => this.wh = '' )
      .catch( e => {})
  }

}
