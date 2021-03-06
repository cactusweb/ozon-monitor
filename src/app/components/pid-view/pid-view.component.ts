import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-pid-view',
  templateUrl: './pid-view.component.html',
  styleUrls: ['./pid-view.component.scss']
})
export class PidViewComponent implements OnInit {
  products;
  errorAdd: string = '';

  addForm: FormGroup;

  constructor(
    private http: HttpService,
  ) { }

  ngOnInit(): void {
    this.generateForm();
    this.getProducts();
  }

  async getProducts(){
    this.errorAdd = '';
    await this.http.getProducts()
      .then( w => this.products = w )
      .catch( e => {})
  }

  async deleteProduct( pid ){
    this.errorAdd = '';
    await this.http.deleteProduct( pid )
      .then( () => {
        this.products = this.products.filter( ell => ell.id != pid )
      })
      .catch( e => {
      })
  }

  generateForm(){
    this.addForm = new FormGroup({
      id: new FormControl( '', [Validators.required] )
    })
  }

  async addProduct(){
    this.errorAdd = '';
    await this.http.addProduct( this.addForm.value.id )
      .then( async () => {
        await this.getProducts();
        this.addForm.reset();

      })
      .catch( e => {
        this.errorAdd = e.error.error;
      } )
  }




}
