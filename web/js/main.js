new Vue({
    el: "#app",
    data(){
        return {
            courses: [],
            title: "",
            time: "",
            totalTime: 0
        }
    },
    methods: {
        savecource(){
            let data = {
                title: this.title,
                time: this.time
            };
            if(this.title != "" && this.time != ""){
                this.courses.push(data);
            }
            
        },
    }
});