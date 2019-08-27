<template>
    <div class="vue2Editor-warp">
        <vue-editor v-model="content" useCustomImageHandler @image-added="handleImageAdded" @text-change="onSelectionChange"/>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { MessageBox } from 'element-ui';
import { uploadSingle } from '@/utils/api';
export default {
    components: { VueEditor },
    props:{
        vHtml:{
            type:String,
            default:''
        }
    },
    data () {
        return {
            content: ''
        }
    },
    mounted () {
        // install content
        this.content = this.vHtml;
    },
    methods:{
        handleImageAdded (file, Editor, cursorLocation, resetUploader) {
            MessageBox.confirm('确定上传此图片？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            }).then(() => {
                this.uploadAjax(file, Editor, cursorLocation, resetUploader);
            }).catch(() => {});
        },
        async uploadAjax (file, Editor, cursorLocation, resetUploader) {
            const res = await uploadSingle(file);
            Editor.insertEmbed(cursorLocation, "image", res.data.data.file_url);
            resetUploader();
        },

        onSelectionChange() {
            // 实时获取数据
            this.$emit('change',this.content);

        }
    }
}
</script>

<style lang="less">
.vue2Editor-warp{
    .quillWrapper .ql-snow.ql-toolbar{
        border-radius: 4px 4px 0 0;
    }
    .ql-toolbar.ql-snow+.ql-container.ql-snow{
        border-radius: 0 0 4px 4px;
    }
}
    
</style>