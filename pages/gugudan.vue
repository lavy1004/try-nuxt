<template>
    <div>
        <div>{{first}} 곱하기 {{second}}는</div>
        <form action="" @submit="onSubmitForm">
            <input type="text" ref="input" v-model="value"/>
            <button>입력</button>
        </form>
        <div id="result">{{result}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            first: Math.ceil(Math.random()*9),
            second: Math.ceil(Math.random()*9),
            result: '',
            value: ''
        }
    },
    methods: {
        onSubmitForm: (e) => {
            e.preventDefault ();
            if(parseInt(this.value) === this.first * this.second) {
                this.result = "정답";
                this.first =  Math.ceil(Math.random()*9);
                this.second =  Math.ceil(Math.random()*9);
                this.value = '';
                this.$refs.input.$el.focus();
            } else {
                this.result = "땡";
                this.value = '';
                this.$refs.input.$el.focus();
            }
        }

    }
}
</script>

<style>

</style>
