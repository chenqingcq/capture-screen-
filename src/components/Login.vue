<template>
    <div>
        {{message}}
        <div>
          test
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      message: "login"
    };
  },
  computed:{
      ...mapGetters(['getUserName'])
  },
  methods: {
    init() {
      this.message = this.getUserName;
      this.$http.get('/myproject/index.php').then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style scoped lang ='less'>
div {
  color: red;
  div{
    color: rebeccapurple;
  }
}
</style>

