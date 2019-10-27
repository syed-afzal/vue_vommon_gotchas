<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <br><br>
        <select v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br><br>
        <button class="btn btn-primary" @click="show = !show">
          Show Alert
        </button>
        <br><br>
        <transition :name="alertAnimation">
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <transition name="slide" appear>
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <transition
          appear
          enter-active-class="animated bounce"
          leave-active-class="animated shake"
        >
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>

        <transition
          appear
          :name="alertAnimation"
          mode="out-in"
        >
          <div class="alert alert-info" v-if="show" key="info">This is some info</div>
          <div class="alert alert-warning" v-else key="warning">This is some info</div>
        </transition>

        <hr>
        <button class="btn btn-primary" @click="load = !load">
          Load / Remove Element
        </button>
        <br><br>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"

          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
        >
          <div style="width: 100px; height: 100px; background-color: yellow"></div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        show: true,
        load: true,
        alertAnimation:'fade',
      }
    },
    methods: {
      beforeEnter(el) {
        console.log('before enter');
      },
      enter(el, done) {
        console.log('enter');
        done();
      },
      afterEnter(el) {
        console.log('after enter');
      },
      enterCancelled(el) {
        console.log('enter cancelled');
      },

      beforeLeave(el) {
        console.log('before leave');
      },
      leave(el, done) {
        console.log('leave');
        done();
      },
      afterLeave(el) {
        console.og('after leave')
      },
      leaveCancelled(el) {
        console.log('leave cancelled')
      }

    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity 1s;
  }
  .fade-leave{
    /* opacity:1 */
  }
  .fade-leave-active{
    transition: 1s;
    opacity: 0;
  }

  .slide-enter {
    /*transform: translateY(20px);*/
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in 1s ease-out;
    transition: opacity 1s;
  }
  .slide-leave {

  }
  .slide-leave-active {
    animation: slide-out 1s ease-out;
    transition: opacity 1s;
    opacity: 0;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }
    @keyframes slide-out {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(20px);
      }
    }
</style>
