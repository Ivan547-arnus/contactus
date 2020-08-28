

let app = new Vue({
    el:'#root',
    components:{
        'container':container
    },methods: {
        onSubmit(form){
            console.log(form);
            
            let formData = new FormData();
            formData.append("to_mail","villegas.rojas.ivan@gmail.com");
            formData.append("to_name","Equipo de Arvispace");
            
            axios.post('https://arvispace.com/sendMailService/sendMailService.php',formData).then(function(response){
                form.result = true;
                console.log(response);
                form.statusSend = response.data.status;
                form.infoSend = response.data.message;
            }).catch(function(exception){
                console.log(exception);
            });
        }
    },
});