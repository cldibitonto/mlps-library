import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MLPSLoaderService {
  public isLoading = new BehaviorSubject(false);
  private readonly requests: HttpRequest<any>[] = [];

  removeRequest(req: HttpRequest<any>) {
      const i = this.requests.indexOf(req);
      if (i >= 0) {
          this.requests.splice(i, 1);
      }
      this.isLoading.next(this.requests.length > 0);
  }

  addRequest(req: HttpRequest<any>) {
      this.requests.push(req);
      this.isLoading.next(true);
  }
}
