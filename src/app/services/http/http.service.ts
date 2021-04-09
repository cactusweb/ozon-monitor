import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = '';

  constructor(
    private http: HttpClient
  ) { }

  async addProduct( pid ){
    return await this.http.get( `${this.url}/add?id=${pid}` ).toPromise();
  }

  async deleteProduct(pid){
    return await this.http.get( `${this.url}/delete?id=${pid}` ).toPromise();
  }

  async getProducts(){
    return await this.http.get( `${this.url}/get-products` ).toPromise();
  }

  async addWH( url ){
    return await this.http.post( `${this.url}/add-webhook`, { url: url } ).toPromise();
  }

  async deleteWH(){
    return await this.http.get( `${this.url}/delete-webhook`).toPromise();
  }

  async getWH(){
    return await this.http.get( `${this.url}/webhook` ).toPromise();
  }
}
