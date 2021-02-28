<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
    <div class="createdAt">
      <FormItem field-name="日期"
                type="date"
                placeholder="在这里输入日期"
                :value.sync="record.createdAt"/>
    </div>
    <div class="notes">
      <FormItem field-name="备注"
                placeholder="在这里输入备注"
                :value.sync="record.notes"/>
    </div>
    <Tags @update:value="record.tags= $event"/>

  </Layout>
</template>

<script lang="ts">

import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";
import Component from "vue-class-component";
import store from "@/store/index.ts";
import Tabs from "@/components/Tabs.vue";
import recordTypeList from "@/constants/recordTypeList";

@Component({
  components: {Tabs, Tags, FormItem, NumberPad},
})
export default class Money extends Vue {
  get count(){
    return store.state.recordList;
  }
  recordTypeList = recordTypeList;
  record: RecordItem = {tags: [], notes: "", type: "-", amount: 0, createdAt: new Date().toISOString()};
  created(){
    this.$store.commit('fetchRecords')
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    if(!this.record.tags || this.record.tags.length===0){
      return window.alert('要选择一个标签噢！')
    }
    this.$store.commit('createRecord', this.record)
    if(this.$store.state.createRecordError === null){
      window.alert('记账成功！')
      this.record.notes = '';
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  ::-webkit-input-placeholder {
    color: #FFEFEF;
  };
  background-color: #FFBAC6;
}
.createdAt{
  background-color: #FFBAC6;
}

</style>
<style lang="scss" scoped>
</style>