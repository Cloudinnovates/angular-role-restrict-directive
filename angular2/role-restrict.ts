import { Directive, ElementRef } from '@angular/core';
import { AuthService } from './services/auth-service';

@Directive({
  selector: '[role-restrict]'
})
export class RoleRestrictDirective {

  constructor(private _authService: AuthService, private _elementRef: ElementRef) {}

  ngOnInit() {
    this.restrict();
  }

  private restrict(): void {
    let accessDenied: boolean = false;

    let roles = this._elementRef.nativeElement.attributes.allow.nodeValue.split(' ');

    // you can check for default roles such as an admin here 
    //if(this._authService.user.role.toLowerCase().trim() === 'admin') return;

    for (let role of roles)
      if (role.toLowerCase().trim() === this._authService.user.role.toLowerCase().trim())
        accessDenied = true;

    if (!accessDenied) {
      let el: HTMLElement = this._elementRef.nativeElement;
      el.parentNode.removeChild(el);
    }
  }
}
