function Tab(ct) {
  this.panels = ct.querySelectorAll('.tab>ul>li')
  this.contents = ct.querySelectorAll('.content>div')
}

Tab.prototype.onclick = function() {
  var _this = this

  _this.panels.forEach(function(panel){
    panel.addEventListener('click', function(event) {
      var target = event.target
      var index = [].indexOf.call(_this.panels, target)
      _this.panels.forEach(function(li) {
        li.classList.remove('active')
      })
      target.classList.add('active')
      _this.contents.forEach(function(div) {
      div.classList.remove('active')
    })
    _this.contents[index].classList.add('active')
  })
    })
    
  
}

var tabs = document.querySelectorAll('.tab')
var tab = []
tabs.forEach(function(tab) {
  tab[[].indexOf.call(tabs, tab)] = new Tab(tab)
  tab[[].indexOf.call(tabs, tab)].onclick()
})
