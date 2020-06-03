<template>
    <div>
        <div class="addButton">
            <div class="row">
                <div class="col-md-6">
                    <form v-on:submit.prevent="fetchInfoData">
                         <div class="form-group">
                            <input type="text" placeholder="Search" class="form-control" id="name" v-model="search_string">
                        </div>
                        <button type="submit" class="btn btn-primary">Search</button> |
                        <router-link :to="{ name: 'CreateInfo' }" class="btn btn-success">Add Info</router-link>
                    </form>
                </div>
                
            </div>
        </div>
        <table class="table">
        <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>

        <tr v-for="info in infoData" :key="info.id">
            <td>{{ info.name }}</td>
            <td>{{ info.description }}</td>
            <td>
                <router-link :to="{name: 'EditInfo', params: { id: info.id }}" class="btn btn-primary">Edit</router-link> |
                <button class="btn btn-danger">Delete</button>
            </td>
        </tr>
        <tr v-if="infoData.length == 0" class="not-found">
            <td></td>
            <td>Data Not found</td>
            <td></td>
        </tr>
        <div v-if="infoData.length > 0" class="pagination">
            <ul>
                <li v-for="(info,index) in last_page" v-bind:key="index" v-on:click="fetchInfoData(index+1)" >{{index+1}}</li>
            </ul>
        </div>
        </tbody>
    </table>
    </div>
</template>
<script>

export default {
    data(){
        return {

            infoData:[],
            last_page:0,
            search_string:''
        }
    },
    created: function()
    {
        this.fetchInfoData();
    },

    methods: {
        fetchInfoData(page = undefined)
        {   
            let url = 'http://localhost/laravel-api-creation/public/api/info?page='+page+'&search_string='+this.search_string;
            this.axios.get(url).then((response) => {
                console.log(response);
                console.log(response.data.data);
                this.infoData = response.data.data.data;
                this.last_page = response.data.data.last_page;
            });
        }

    }
}
</script>
<style>

.addButton{
    padding: 10px;
}
.not-found{text-align: center}
.pagination ul{

    display: inline-flex;
    list-style-type: none;
}
.pagination ul li{

    color:white;
    background-color: blue;
    float: left;
    margin-right: 10px;
    padding: 8px 16px;
    text-decoration: none;
}
.pagination ul li:hover{
cursor: -webkit-grabbing; cursor: grabbing;
}

</style>