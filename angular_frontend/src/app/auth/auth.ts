import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private apiUrl = 'http://localhost:8060/users'; // 👉 your backend base URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, { username, password });
  }
  signup(signupData: { username: string; email: string; password: string }): Observable<any> {
  const payload = {
    username: signupData.username,
    email: signupData.email,
    password: signupData.password,
    roleId: 'user',            // default role
    currentBalance: 0.0          // default balance
  };

  return this.http.post(`http://localhost:8060/users`, payload);
}
getAllUsers(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}`);
}
deleteUser(userId: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${userId}`);
}
}
