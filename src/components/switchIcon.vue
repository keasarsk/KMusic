<template>
    <div class="switchIcon">
        <i ref="off" class="el-icon-star-off" @click="change1" style="display: block"></i>
        <i ref="on" class="el-icon-star-on" @click="change2" style="display: none"></i>
    </div>
</template>

<script>
    export default {
        name: "switchIcon",
        methods: {
            change1() {
                this.$refs.on.style.display = "block";
                this.$refs.off.style.display = "none";
            },
            change2() {
                this.$refs.on.style.display = "none";
                this.$refs.off.style.display = "block";
            }
        }
    }
</script>
