import {Component} from "vue-property-decorator";
import Vue from "vue";

@Component
export class TagHelper extends Vue {
    createTag() {
        const name = window.prompt("请输入标签名");
        if (!name) {return window.alert("标签名不能为空");}
        this.$store.commit("createTag", name);
    }
}

export default TagHelper;

