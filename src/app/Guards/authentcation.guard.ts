import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authentcationGuard: CanActivateFn = (route, state) => {
  const _RouterG = inject(Router);

  if (localStorage.getItem('userToken') !== null) {
    return true;
  } else {
    _RouterG.navigate(['/login']);
    return false;
  }
};

