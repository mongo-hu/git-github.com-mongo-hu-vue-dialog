Vue.component('kkb-dialog', {
    props: {
        visible: Boolean,
        title: String,
    },
    data() {
        return {};
    },
    watch: {
        visible: function (val) {
            val ? this.$emit("open") : this.$emit("close");

        }
    },
    methods:{
        close(){
            this.$emit('update:visible', false);
        }
    },
    template: `
        <div class="dialog" v-show="visible">
            <div class="dialog-header">
                <span class="dialog-title">提示</span>
                <i class="dialog-close" @click="close">x</i>
            </div>
            <div class="dialog-body">
                <slot></slot>
            </div>
        </div>
    `
});