<template>
  <section class="real-app">
    <input 
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下来要做什么..."
      @keyup.enter="addNewTodo"
      >
      <todo-item 
        v-for="todo in filteredTodos"
        :todo="todo"
        :key="todo.id"
        @delete="deleteTodo" />
      <todo-footer 
        :filter="filter" 
        :todos="todos"
        @toggleFilter="toggleFilter"
        @clearAllCompleted="clearAllCompleted"
        />
  </section>
</template>

<script>
import TodoItem  from './todo-item.vue'
import TodoFooter from './todo-footer.vue'
import Utils from '../utils.js'

export default {
  data () {
    return {
      todos: Utils.getLocalStorageItem('todo-list') || [],
      filter: 'all',
      todoID: Utils.getLocalStorageItem('todoID') || 0
    }
  },
  computed: {
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const isCompleted = this.filter === 'completed'
      return this.todos.filter(todo => todo.completed === isCompleted)
    }
  },
  watch: {
    todos: {
      handler (val) {
        Utils.setLocalStorageItem('todo-list', val)
      },
      deep: true
    },
    todoID (val) {
      Utils.setLocalStorageItem('todoID', val)
    }
  },
  components: {
    TodoItem,
    TodoFooter
  },
  methods: {
    addNewTodo (e) {
      this.todos.unshift({
        id: this.todoID++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value = ''
    },
    deleteTodo (todoID) {
      this.todos.splice(this.todos.findIndex(todo => todoID === todo.id), 1)
    },
    toggleFilter (state) {
      this.filter = state
    },
    clearAllCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  }
}
</script>

<style scoped>
.real-app{
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666666;
}
.add-input{
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  line-height: 1.4em;
  border: 0;
  outline: none;
  padding: 12px 12px 12px 45px;
  border-bottom: 1px solid #999999;
  box-sizing: border-box;
  font-family: inherit;
  font-weight: inherit;
}
</style>
