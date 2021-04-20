window.addEventListener('DOMContentLoaded', () => {

  const cookieStorage = {
    getItem: key => {
      const cookies = document.cookie
                          .split('; ')
                          .map(cookie => cookie.split('='))
                          .reduce((acc, [key, value]) => 
                            ({...acc,
                              [key]: value}), {});

      return cookies[key];
    },
    setItem: (key, value) => {
      document.cookie = `${key}=${value};expires=Sun, 16 Jul 3567 06:23:41 GTM`;
    }
  };


  const storageType = cookieStorage;
  const consentPropertyType = 'site_concent';

  const hasConsented = () => storageType.getItem(consentPropertyType) === "true" ? true : false;
  const toggleStarage = prop => storageType.setItem(consentPropertyType, prop);

  const popup = document.querySelector('.popup'),
        btnConfirm = document.querySelector('[data-confirm]'),
        btnCancel = document.querySelector('[data-cancel]');

  if (hasConsented()) {
    console.log('Loading...');
  } else {
    popup.classList.add('popup_active');
  }

  btnConfirm.addEventListener('click', () => {
    toggleStarage(true);
    popup.classList.remove('popup_active');
    console.log('Loading...');
  });

  btnCancel.addEventListener('click', () => {
    toggleStarage(false);
    popup.classList.remove('popup_active');
    console.log('Error');
  });

  // class CookieConcent {
  //   constructor({popup, btnConfirm, btnCancel, activeClass = '', script} = {}) {
  //     this.popup = document.querySelector(popup);
  //     this.btnConfirm = document.querySelector(btnConfirm);
  //     this.btnCancel = document.querySelector(btnCancel);
  //     this.activeClass = activeClass;
  //     this.consentPropertyType = 'site_concent';
  //     this.script = script;
  //   }

  //   getItem = key => {
  //     const cookies = document.cookie
  //                         .split('; ')
  //                         .map(cookie => cookie.split('='))
  //                         .reduce((acc, [key, value]) => 
  //                           ({...acc,
  //                             [key]: value}), {});

  //     return cookies[key];
  //   }

  //   setItem = (key, value) => {
  //     document.cookie = `${key}=${value};expires=Sun, 16 Jul 3567 06:23:41 GTM`;
  //   }

  //   hasConsented = () => {
  //     return this.getItem(this.consentPropertyType) === "true" ? true : false;
  //   }

  //   changeStatus = prop => {
  //     this.setItem(this.consentPropertyType, prop);
  //     if (this.hasConsented()) {
  //       // подписка
  //       this.script();
  //     }
  //   }

  //   btnTrigger = ({ btn, prop } = options) => {
  //     btn.addEventListener('click', () => {
  //       this.changeStatus(prop);
  //       this.popup.classList.remove(this.activeClass);
  //     })
  //   }

  //   bindTriggers = () => {
  //     this.btnTrigger({
  //       prop: true,
  //       btn: this.btnConfirm
  //     });

  //     this.btnTrigger({
  //       prop: false,
  //       btn: this.btnCancel
  //     });
  //   }

  //   init = () => {
  //     try {
  //       if (this.hasConsented()) {
  //         this.script();
  //       } else {
  //         this.popup.classList.add(this.activeClass);
  //       }

  //       this.bindTriggers();
  //     } catch(e) {
  //       console.error('Переданы не все данные', e);
  //     }
  //   }
  // }

  // new CookieConcent({
  //   activeClass: 'popup_active',
  //   popup: '.popup',
  //   btnConfirm: '[data-confirm]',
  //   btnCancel: '[data-cancel]',
  //   myScripts
  // }).init();

  // function myScripts() {
  //   console.log('Loading...');
  // }
});