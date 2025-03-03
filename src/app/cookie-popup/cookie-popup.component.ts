import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div *ngIf="showPopup" class="popup">
      <p>Welcome! This is your popup message.</p>
      <button (click)="closePopup()">Close</button>
    </div>
  `,
  styles: [`
    .popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      text-align: center;
    }
    .popup button {
      margin-top: 10px;
      padding: 5px 10px;
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
    }
  `],
  providers: [CookieService] // Provide CookieService in the standalone component
})
export class AppComponent {
  showPopup: boolean = false;

  constructor(private cookieService: CookieService) {
    this.checkPopup();
  }

  checkPopup() {
    const popupSeen = this.cookieService.get('popup_seen');
    if (!popupSeen) {
      this.showPopup = true; // Show popup if cookie is not set
    }
  }

  closePopup() {
    this.showPopup = false;
    this.cookieService.set('popup_seen', 'true', 1); // Set cookie to expire in 1 day
  }
}
