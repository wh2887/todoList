import $ from 'jquery'

const todoContent = $('.todo-content')
const todoListUl = $('.todo-list-ul')
const list = window.localStorage.getItem('todoList')
let dbList = JSON.parse(list) || ['学习数据结构', '复习排序算法']

for (let i = 0; i < dbList.length; i++) {
  $(`<li><span>${dbList[i]}</span><div class="buttons"><button>已完成</button><button class="delete">删除</button></div></li>`).prependTo(todoListUl)
}

$('#target').submit(() => {
  const x = todoContent.val()
  dbList.push(x)
  localStorage.setItem('todoList', JSON.stringify(dbList))
})

// 事件委托
todoListUl.on('click', '.delete', (e) => {
  const html = $(e.target).parent().siblings().html()
  dbList.forEach((item, index) => {
    if (item === html) {
      dbList.splice(index, 1)
      localStorage.setItem('todoList', JSON.stringify(dbList))
      location.reload()
    }
  })
})

