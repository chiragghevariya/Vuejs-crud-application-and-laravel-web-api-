<template>
    <div>
        <form v-on:submit.prevent="addInfo">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" v-model="info.name">
            </div>
            <div class="form-group">
                <label for="description">description:</label>
                <textarea class="form-control" rows="5" id="description" v-model="info.description"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="loading == true">Save</button>
            </form>
    </div>
</template>
<script>
import Vue from 'vue';
export default {
    data() {

        return {
            info:{},
            loading:false
        }
    },
    methods:{

         addInfo() {
           this.loading = true;

           let uri = 'http://localhost/laravel-api-creation/public/api/info/post';
            this.axios.post(uri, this.info).then((response) => {
                console.log(response.data)
                if(response.data.success == true){

                    Vue.notify({
                        group: 'foo',
                        title: 'Successfully saved.',
                        type:'success'
                    });
                    this.loading = false;    
                    this.$router.push({ name: 'Home' });
                }
                
            }).catch(error => {
                this.loading = false;
                console.log(error.response.data);
                if(error.response.data.success == false){
                    Vue.notify({
                        group: 'foo',
                        title: error.response.data.data,
                        type:'error'
                    });
                }
            });
        }
    }
    
}
</script>