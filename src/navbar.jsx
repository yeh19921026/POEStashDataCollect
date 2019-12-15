import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class NavBar extends React.Component {
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
}

class NavBarLogin extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  render() {
    return pug`
    mixin nava(hrf, txt)
      li.nav - item
      a.nav - link(href = hrf)=txt
        block
    mixin navlink(hrf, txt)
      li.nav - item
        Link.nav - link(to = hrf)=txt
          block
    +navlink('/profile', '個人檔案')
      if isvarified
      else
        span.badge.badge - warning.ml - 1!
    + navlink('/searchresult', '歌曲列表')
    + navlink('/myfavorite', '我的最愛(無)')
    + navlink('/history', '播放紀錄(無)')
    + navlink('/playlist', '播放清單')
    + navlink('/addsong', '新增歌曲')
    + navlink('/song', '歌曲(暫時)')
    + navlink('/searchresult', '搜尋結果(暫時)')
    + nava('#', '登出')`
  }
}

class NavBarGuest extends React.Component {
  constructor(props) {
    super(props);
    this.authenticate = this.authenticate.bind(this);
  }
  render() {
    //vavbar container
    return pug`
    mixin nava(hrf,txt)
      li.nav-item
        a.nav-link(href=hrf)= txt
          block
    mixin navlink(hrf,txt)
      li.nav-item
        Link.nav-link(to=hrf)= txt
          block
    li.nav-item
        a.nav-link(href='#',onClick='{this.authenticate}')登入
    +navlink('/searchresult', '歌曲列表')`
  }
}

export default NavBar;