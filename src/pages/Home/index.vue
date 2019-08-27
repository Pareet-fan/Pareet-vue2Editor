<template>
    <div v-loading="loading">
      <vue-editor :v-html="content" @change="editorChange"></vue-editor>
      <div v-html="content" class="box"></div>
    </div>
</template>

<script>
import { Message } from 'element-ui';
import VueEditor from '@/components/vue2Editor';
import Vue from 'vue';
export default {
  components: { 
    VueEditor
  },
  data () {
    return {
      content:'this is initdata'
    }
  },
  methods:{
    editorChange (data) {
      // 实时获取数据
      this.content = data;
    }
  }
}
</script>

<style lang="less" scoped>
div{
    font-size: 18px;
    text-align: center;
    padding:100px 0;
}
.box{
  padding:10px;
  border-radius: 4px;
  border:1px solid #dddddd;
}
</style>
