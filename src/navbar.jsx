import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import navbar from '../pug/navbar.pug';      // ← import pug template
import ncontainer from '../pug/navbarcontainer.pug';      // ← import pug template
const NavBar = () => navbar.call(this,NavBarContainer);

/*class NavBar extends React.Component {
  render() {
    var login = true;
    //vavbar container
    return pug`
      nav#navGroup.navbar.navbar-expand-lg.navbar-dark.fixed-top.bg-dark.nav-fill
      button.navbar-toggler(data-parent="#navGroup", data-target='#navbarCollapse', data-toggle='collapse', type='button', aria-controls='navbarCollapse', aria-expanded='false', aria-label='Toggle navigation')
        span.fa.fa-bars
      button.navbar-toggler(data-parent="#navGroup", data-target='#searchbarCollapse', data-toggle='collapse', type='button', aria-controls='navbarCollapse', aria-expanded='false', aria-label='Toggle navigation')
        span.fa.fa-search(aria-hidden="true")
      #navbarCollapse.collapse.navbar-collapse.text-center
        a.navbar-brand.ml-lg-0.ml-3(href='home') JPMusicLearn
        ul#navbar-menu.navbar-nav
        if login
          NavBarLogin()
        else 
          NavBarGuest()
      #searchbarCollapse.collapse.navbar-collapse
        form.nav-item.input-group.mt-2.mt-md-0
        input.form-control.mr-sm-2(type='text', aria-label='Search', placeholder='搜尋')
        button.btn.btn-outline-success.my-2.my-sm-0(type='submit') 搜尋`
  }
}*/

class NavBarContainer extends React.Component {
  render() {
    return ncontainer.call(this);
  }
}

export default NavBar;