<template>
  <div class="userList">
    <el-tabs type="border-card">
      <el-tab-pane label="用户管理">
        <div class="userCreate" style="text-align: right">
          <el-button size="mini" type="primary" icon="el-icon-refresh" @click="getUsers(currentPage)">刷新</el-button>
          <el-button size="mini" type="primary" icon="el-icon-plus" @click="editUsers('add')">添加用户</el-button>
        </div>
        <el-table
          :data="userList"
          style="width: 100%"
          size="small"
          :default-sort = "{prop: 'id', order: 'ascending'}"
        >
          <el-table-column
            prop="id"
            label="ID"
            align="center"
            sortable>
          </el-table-column>
          <el-table-column
            prop="name"
            label="名字"
            align="center">
          </el-table-column>
          <el-table-column
            prop="loginName"
            label="用户名"
            align="center">
          </el-table-column>
          <el-table-column
            prop="admin"
            label="管理员"
            :formatter="isAdmin"
            align="center">
          </el-table-column>
          <el-table-column
            prop="createTime"
            label="日期"
            align="center">
          </el-table-column>
          <el-table-column
            fixed="right"
            width="200"
            align="center"
            label="操作">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="editUsers('update', scope.row)">编辑</el-button>
              <el-button type="danger" size="mini" @click="deleteUser(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="user-pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="20"
            layout="total, prev, pager, next"
            :total="userTotal">
          </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      center>
      <div style="width: 300px;margin: 0 auto;">
        <el-form :model="ruleForm" size="mini" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="名字" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="用户名" prop="loginName">
            <el-input v-model="ruleForm.loginName"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" type="primary" @click="submitForm('ruleForm')">确 定</el-button>
        <el-button size="mini" @click="resetForm('ruleForm')">重置</el-button>
        <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'userList',
  data () {
    let checkloginName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    }
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (value.length > 5 && value.length < 30) {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass')
          }
          callback()
        } else {
          callback(new Error('密码长度为6-30'))
        }
      }
    }
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    let checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('名字不能为空'))
      } else {
        callback()
      }
    }
    return {
      userList: [], // 用户列表
      userTotal: 0, // 用户总数
      currentPage: 1, // 当前页数
      dialogVisible: false, // 模态框
      submitType: '', // 提交表单类型（add:新添用户，update:修改用户）
      ruleForm: {
        id: '',
        password: '',
        checkPass: '',
        loginName: '',
        name: ''
      },
      rules: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        loginName: [
          { validator: checkloginName, trigger: 'blur' }
        ],
        name: [
          { validator: checkName, trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    this.getUsers(this.currentPage)
  },
  methods: {
    // 获取用户列表
    getUsers (currentPage) {
      let start = (currentPage - 1) * 20
      let end = start + 20
      let obj = {
        n: start,
        l: end,
        deleted: 0
      }
      this.$http.post('/api/sys/user/get', obj).then((response) => {
        if (response.status === 200) {
          this.userList = response.data.d
          this.userTotal = response.data.t
        }
      })
    },
    /**
     * 编辑用户，包括新添和修改
     * @type:编辑类型（新添(add)/修改(update)）
     * */
    editUsers (type, row) {
      this.submitType = type
      if (type === 'add') {
        // 新添用户
        this.resetForm('ruleForm')
      } else {
        // 修改用户
        this.ruleForm.loginName = row.loginName
        this.ruleForm.id = row.id
        this.ruleForm.name = row.name
        this.ruleForm.password = ''
        this.ruleForm.checkPass = ''
      }
      this.dialogVisible = true // 关闭模态框
    },
    /**
     * 保存用户，包括新添和修改
     * @ruleForm:用户数据
     * */
    saveUser (ruleForm) {
      let form = {
        name: ruleForm.name,
        loginName: ruleForm.loginName,
        password: ruleForm.password
      }
      if (this.submitType === 'add') {
        // 新添用户
        this.$http.post('/api/sys/user/add', form).then((response) => {
          if (response.status === 200) {
            this.$message({
              type: 'success',
              message: '用户添加成功'
            })
            this.getUsers(this.currentPage) // 刷新列表
            this.dialogVisible = false // 关闭模态框
          }
        })
      } else {
        // 修改用户
        form.id = ruleForm.id
        this.$http.post('/api/sys/user/put', form).then((response) => {
          if (response.status === 200) {
            this.$message({
              type: 'success',
              message: '用户修改成功'
            })
            this.getUsers(this.currentPage) // 刷新列表
            this.dialogVisible = false // 关闭模态框
          }
        })
      }
    },
    // 删除用户
    deleteUser (row) {
      this.$confirm('是否删除此用户？', '确认信息', {
        distinguishCancelAndClose: true,
        confirmButtonText: '删除',
        cancelButtonText: '取消'
      }).then(() => {
        this.$http.post('/api/sys/user/del', [row.id]).then((response) => {
          if (response.status === 200) {
            this.$message({
              type: 'success',
              message: '用户删除成功'
            })
            this.getUsers(this.currentPage) // 删除成功后刷新列表
          }
        })
      }).catch(action => {
        console.log(2)
      })
    },
    // 表单提交
    submitForm (formName) {
      let self = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          self.saveUser(self.ruleForm)
        } else {
          return false
        }
      })
    },
    // 重置表单
    resetForm (formName) {
      this.$nextTick(() => {
        this.$refs[formName].resetFields()
      })
    },
    isAdmin (row) {
      return row.admin === 0 ? '否' : '是'
    },
    // 当前条数
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    // 翻页
    handleCurrentChange (val) {
      this.getUsers(val)
    }
  }
}
</script>

<style>
  @import "../../assets/css/userList.css";
</style>
