import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  url = 'http://localhost:3000';
  constructor() { }

  async getTasks(){
    return fetch(`${this.url}/todos`)
    .then(res=> res.json());
  }

  async getTask(details: string){
    const response = await fetch(`${this.url}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    });

    if(!response.ok){
      throw new Error('Could not get tasks');
    }

    return response.json;
  }
}
