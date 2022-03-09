<template>
    <el-tag type="success">{{weather}}</el-tag>
  </template>
  <script>
//   import request from 'request-promise'
  export default {
    data() {
      return {
        weather: ''
      }
    },
    mounted() {
      const city = encodeURIComponent('温州')
      request({
        uri: '',
        method: 'GET',
        json: true
      }).then(res => {
        this.weather = '${res.result.realtime.info} ${res.result.realtime.temperature}℃'
       })
    }
  }
  </script>
  