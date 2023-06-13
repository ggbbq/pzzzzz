<script setup>
import { RouterView } from 'vue-router'
</script>
<template>
  
  <div>
    <div style="height: 60px;  border-bottom: 1px solid #ccc">
      <div style="display: flex;">
        
        <div style="width: 250px;text-align: center; font-weight: 1000;padding-top: 10px;font-size: 30px;">
          上课网
        </div>
        <div style="display: flex; flex: 1">
          <div style="flex: 1; text-align: right;">
            
          </div>
          <div style="width: 100px;margin-right: 30px;
 height: 30px;
margin-top: 18px;
 border:3px solid #ddd;
text-align: center;
 border-image-source: linear-gradient(#D40, #07F);

 border-image-slice: 1;">
            ChatGPT</div>
        
          
        <div style="width: 250px;text-align: left">
          <el-dropdown>
    <span class="el-dropdown-link" style="padding-top: 18px;font-size: 20px;padding-right: 10px;">
      陈育玮@ChatGPT
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item divided>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        </div>
      </div>
    </div>
    <div style="display: flex;">

      <div style="width: 300px; min-height: calc(100vh - 80px);  padding:50px;">
        <el-menu
            default-active="/"
            class="el-menu-vertical-demo"
            :router="true"
        >
          <el-menu-item index="/home" >
            <el-icon></el-icon>
            <span >我的课程</span>
          </el-menu-item>
          <el-menu-item index="/user">
            <el-icon></el-icon>
            <span >账户设置</span>
          </el-menu-item>
          <el-menu-item index="/message" >
            <el-icon></el-icon>
            <span >订单信息</span>
          </el-menu-item>
          <el-menu-item index="/tokens" >
            <el-icon></el-icon >
            <span >Tokens</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div style="flex: 1; padding: 50px 50px 30px;">
        <RouterView />
      </div>


    </div>
  </div>
</template>

<script>
import { ArrowDown } from '@element-plus/icons-vue'
</script>
<style scoped>

</style>