<template>
    <div style="width: 1000px;height: 100px;">
  <div>Tokens</div>
  <div style="height: 20px; line-height: 60px; border-bottom: 1px solid #ccc">
  </div>
      <div style="width: 1000px;height: 100px;background-color: rgba(236, 236, 236, 0.5);margin: auto;margin-top: 30px;">
        
          <div style="padding-left: 50px;padding-top: 10px;">
            Plus 专业版
          <div style="padding-top: 10px;color: #ccc;font-size: 10px;">
            Tokens 使用
          </div>
          <div style="padding-left: 20px;padding-top: 10px;width: 1000px;">
            <el-row>
    <el-col :span="6">
      
      <el-statistic :value="1982041">
        <template #suffix>/100,000,000</template>
      </el-statistic>
    </el-col>
  </el-row>
          </div>
        </div>
      </div>
  <div style="font-size: 50px;padding-top: 20px;" >
    <el-table :data="filterTableData" style="width: 100%">
      <el-table-column label="方案" prop="date" />
      <el-table-column label="描述" prop="name" />
      <el-table-column label="操作">

        <template #default>
          <el-button
              size="large"
              text @click="open"
              style="color: blueviolet"
          >续费 100w tokens</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
    <div style="width: 1000px;height: 260px;background-color: rgba(236, 236, 236, 0.5);margin: auto;margin-top: 30px;">
        
        <div style="padding-left: 50px;font-size: 20px;padding-top: 20px;">
          同学你好
        </div>
        <div style="padding-left: 70px;">
        <div style="padding-top: 20px;font-size: 15px;">
          1)消耗tokens数量在1,000,000以内，可以继续使用教学环境;
        </div>
        <div style="padding-top: 20px;font-size: 15px;">
          2)在2023年5月10日24时之前，如果消耗tokens超过1,000,000，统一按照1,000,000计算，无需补交费用，后续继续使用则需要开始充值;
        </div>
        <div style="padding-top: 20px;font-size: 15px;">
          3)同学优惠充值价格为:20元/1,000,000 tokens.
        </div>
        <div style="padding-top: 20px;font-size: 15px;">
          4)请注意，已充值费用，不接受退费和转赠。请避免单次大额充值;
        </div>
        <div style="padding-top: 20px;font-size: 15px;">
          5)充值完成后的10分钟内，对应的tokens将到账,祝你使用愉快!
        </div>
      </div>
        
      
    </div>
  </div>


</template>
<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus'


import { computed, ref } from 'vue'

        
    
interface User {
  date: string
  name: string
  address: string
}

const search = ref('')
const filterTableData = computed(() =>
    tableData.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}
const open = {
  
}

const tableData: User[] = [
  {
    date: 'Plus 专业版',
    name: '仅用于教学用途，不支持大量商用和非教学用途',
    address: 'No. 189, Grove St, Los Angeles',
  },

]


    
        
           
        
    


</script>