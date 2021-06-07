new TypeIt("#type1", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,

})
.type(" 유태균 ", { delay: 200 })
.pause(500)
.delete(9)
.type(" 劉泰均 ", { delay: 200 })
.pause(500)
.delete(9)
.go();


