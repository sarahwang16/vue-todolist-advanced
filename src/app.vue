<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.jsx'
import Todo from './components/todo.vue'
import './assets/styles/global.css'

export default {
  data () {
    return {
      
    }
  },
  components: {
    Header,
    Footer,
    Todo
  }
}
</script>

<style scoped>
  #app{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  #cover{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #999999;
    opacity: .5;
    z-index: -1;
  }
</style>


