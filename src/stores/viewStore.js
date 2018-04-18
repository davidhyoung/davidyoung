/**
 * 
 */

import { observable, action, computed } from 'mobx';
import autobind from 'autobind-decorator';

import { breakpoints } from 'App.style';

@autobind
class ViewStore {
  @observable width = window.innerWidth;
  @observable height = window.innerHeight;
  @observable showSidebar = true;

  @action
  update() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  @action
  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  @computed get useSidebar() {
    return this.width > breakpoints.medium; 
  };

  @computed get device() {
    if (this.width < breakpoints.small) {
      return 'small';
    } else if (this.width < breakpoints.medium) {
      return 'medium';
    } else if (this.width < breakpoints.large) {
      return 'large';
    } else {
      return 'huge';
    }
  }
}

export default new ViewStore();