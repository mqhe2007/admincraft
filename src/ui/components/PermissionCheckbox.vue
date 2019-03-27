<template>
  <div class="permission-checkbox">
    <div class="flex-fr-hb-vs">
      <Input type="text"
             size="small"
             style="width: 200px"
             v-model="permissionDescr"
             placeholder="请输入查询关键词">\
      <Button slot="append"
              icon="ios-search"
              @click="doFilter"></Button>
      </Input>
      <div class="actions">
        <Button class="item"
                @click="selectAll"
                size="small">全选</Button>
        <Button class="item"
                @click="reset"
                size="small">重置</Button>
      </div>
    </div>
    <Divider />
    <div class="permission-list">
      <template v-for="(item,index) in permissions">
        <Tooltip max-width="200"
                 placement="top"
                 :key="item.id">
          <p slot="content"
             style="white-space: normal">{{item.description}}</p>
          <Tag :color="item.selected ? 'primary': 'default'"
               @click.native="select(item.id, index)">{{item.permissionName}}</Tag>
        </Tooltip>
      </template>

    </div>
  </div>
</template>
<script>
import store from '@/store/'
export default {
  name: 'permissionCheckbox',
  props: ['value'],
  data() {
    return {
      permissionDescr: '',
      selected: this.value,
      selectedBak: []
    }
  },
  computed: {
    permissions() {
      return store.state.permission.all
    }
  },
  created() {
    store.commit('permission/cleanAllSelected')
    this.selectPermission()
  },
  methods: {
    selectPermission() {
      this.selected.forEach(id => {
        let index = this.permissions.findIndex(_item => _item.id === id)
        store.commit('permission/selectPermission', index)
      })
    },
    doFilter() {
      let params = {
        permissionDescr: this.permissionDescr
      }
      store.dispatch('permission/getPermissions', params)
    },
    select(id, index) {
      store.commit('permission/selectPermission', index)
      this.getSelected()
    },
    getSelected() {
      let selectedId = []
      this.permissions.forEach(item => {
        if (item.selected) {
          selectedId.push(item.id)
        }
      })
      this.$emit('input', selectedId)
    },
    selectAll() {
      this.selectedBak = this.selected
      this.permissions.forEach(() => {
        store.commit('permission/selectAllPermission')
      })
      this.getSelected()
    },
    reset() {
      this.selected = this.selectedBak
      store.commit('permission/cleanAllSelected')
      this.selectPermission()
      this.getSelected()
    }
  }
}
</script>

<style lang="stylus" scoped>
.permission-checkbox
  padding 20px 10px

  .actions
    margin-top 1px

    .item
      margin-left 5px

  .permission-list
    margin-top 10px
</style>
