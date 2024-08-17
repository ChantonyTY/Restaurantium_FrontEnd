import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private apiUrl = `${environment.apiBaseUrl}/restaurants`;

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getRestaurant(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createRestaurant(restaurant: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, restaurant);
  }

  updateRestaurant(id: string, restaurant: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, restaurant);
  }

  deleteRestaurant(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
