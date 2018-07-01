<template>
  <div  class="hello" ref='captureItem'>
    <!-- <input @keydown.enter="login" type="text" v-model="username"> -->
    <img  class="leaf" src="@/assets/leaf.jpg" alt="">
    <button @mousemove="changeColor" @click="capture" class="button"><span>点击</span></button>
    <div class="container"></div>
    <img class="test" src="" ref="test" alt="">
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import html2canvas from "html2canvas";
import canvas2image from '@/lib/utils/canvas2image';
export default {
  name: "HelloWorld",
  data() {
    return {
      username: ""
    };
  },
  methods: {
    changeColor(e) {
      const x = e.pageX - e.target.offsetLeft;
      const y = e.pageY - e.target.offsetTop;
      e.target.style.setProperty("--x", `${x}`);
      e.target.style.setProperty("--y", `${y}`);
    },
    login() {
      this.$store.dispatch("setUsername", this.username);
      this.$router.push("/login");  
    },
    capture() {
      html2canvas(this.$refs.captureItem).then(canvas => {
        if (canvas) {
          console.log(canvas);
          canvas2image().saveAsPNG(canvas,document.body.offsetWidth,document.body.offsetHeight,'png')
          // canvas2image.saveAsPNG(canvas.toDataURL(), document.body.offsetWidth, document.body.offsetHeight);
          // console.log(canvas.toDataURL());
          this.$refs.test.src = canvas.toDataURL('png');
          document.querySelector(".container").appendChild(canvas);
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.leaf {
  display: inline-block;
  width: 100%;
}
.test {
  display: inline-block;
  width: 100%;
}
.button {
  position: relative;
  appearance: none;
  background: #f72359;
  padding: 1em 2em;
  border: none;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  outline: none;
  width: 200px;
  overflow: hidden;
  border-radius: 100px;
  text-align: center;
  span {
    position: relative;
  }
  &::before {
    --size: 0;
    content: "";
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle closest-side, #4405f7, transparent);
    transform: translate(-50%, -50%);
    transition: width 0.2s ease height 0.2s ease;
  }
  &:hover::before {
    --size: 400px;
  }
}
</style>
