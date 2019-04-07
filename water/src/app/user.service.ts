import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { IUser } from '../app/Interface/User';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ILaundryRequest } from './Interface/LaundryRequest';
import { ITransaction } from './Interface/Transaction';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  SignUp(user:IUser): Observable<string>{
    
    return this.http.post<string>('https://localhost:44377/api/washer/signup', user).pipe(catchError(this.errorHandler));
  }
  login(email:string,password:string):Observable<string>{
    var str='?email='+email+'&password='+password
    return this.http.get<string>('https://localhost:44377/api/washer/login'+str).pipe(catchError(this.errorHandler));
  }
  userInfo(userId:string):Observable<IUser>{
    var str='?userId='+userId
    return this.http.get<IUser>('https://localhost:44377/api/washer/UserInfo'+str).pipe(catchError(this.errorHandler));
  }
  raiseRequest(laundryRequest:ILaundryRequest):Observable<string>{
    //alert(laundryRequest.DenimsOrTrousersOnly)
    return this.http.post<string>('https://localhost:44377/api/washer/RaiseRequest', laundryRequest).pipe(catchError(this.errorHandler));
  }
  buyCoins(userId:string,accountNumber:number,coins:number):Observable<string>{
    var t='?userId='+userId+'&accountNumber='+accountNumber+'&numberOfCoins='+coins;
    var temp= {userId:userId,accountNumber:accountNumber,numberOfCoins:coins};
    return this.http.post<string>('https://localhost:44377/api/washer/BuyCoins'+t,temp).pipe(catchError(this.errorHandler));
  }
  fetchCash(userId:string):Observable<number>{
    var str='?userId='+userId
    return this.http.get<number>('https://localhost:44377/api/washer/FetchLaundrocashForUser'+str)
  }
  fetchTransaction(userId:string):Observable<ITransaction[]>{
    var str='?userId='+userId
    return this.http.get<ITransaction[]>('https://localhost:44377/api/washer/GetAllTransaction'+str)
  }
  savedWater(userId:string):Observable<number>{
    var str='?userId='+userId
    return this.http.get<number>('https://localhost:44377/api/washer/watersaved'+str)
  }
  fetchMatchedRequest(userId:string):Observable<any[]>{
    var str='?userId='+userId
    return this.http.get<any[]>('https://localhost:44377/api/washer/ViewMatchedRequests'+str)
  }
  fetchUserLaundry(requestId:number):Observable<any>{
    var str='?requestId='+requestId
    return this.http.get<any>('https://localhost:44377/api/washer/GetUserLaundryInfo'+str)
  }
  sendRequest(model:any):Observable<boolean>{
    return this.http.put<boolean>('https://localhost:44377/api/washer/SendRequest',model);
  }
  fetchPendingRequest(userId:string):Observable<any[]>{
    var str='?userId='+userId;
    return this.http.get<any[]>('https://localhost:44377/api/washer/ViewPendingRequests'+str);
  }
  acceptRequest(reqId:number,status:string):Observable<boolean>{
    var str="?matchedRequestId="+reqId+"&newStatus="+status;
    return this.http.put<boolean>('https://localhost:44377/api/washer/AcceptOrRejectRequest'+str,null);
  }
  fetchLaundryStatus(userId:string):Observable<string>{
    var str="?userId="+userId;
    return this.http.get<string>('https://localhost:44377/api/washer/FetchLaundryStatus'+str)
  }
  fetchMatchedStatus(userId:string):Observable<boolean>{
    var str="?userId="+userId;
    return this.http.get<boolean>('https://localhost:44377/api/washer/FetchMatchedStatus'+str)
  }
  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  } 
}
