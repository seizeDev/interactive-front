<template>
     <header class="app-header" @click="titleClick">{{book.title}}{{readersNumber}}</header>
</template>

<script lang="ts">

import { computed, ref, reactive } from "vue";
export default  {
  name: "CommonHeader",
  setup(){
    const readersNumber = ref(0)
    const book = reactive({ title: 'Vue 3 Guide' })
    let titleClick = (value:any) => {
      console.log('122112',value)
      readersNumber.value = '1231221'
    }
    // 暴露给 template
    return {
      titleClick,
      readersNumber,
      book
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" src="../less/app.less"></style>

