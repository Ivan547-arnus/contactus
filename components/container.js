let container = {
    props:{
        title:{
            type:String,
            default:"Hola mundo"
        }
    },
    data() {
        return {
            name:"",
            email:"",
            text:"",
            submitted:false,
            result:false,
            statusSend:"",
            infoSend:""
        }
    },
    methods: {
        onSubmit(event){
            event.preventDefault();
            this.submitted = true;
            if(this.name != "" && this.email != "" && this.text != ""){
                this.$emit("submit",this);
            }
        },
        restartForm(){
            this.name="";
            this.email="";
            this.text="";

            this.submitted = false;
            this.result = false;
        }
    },
    template:`
        <div class="bg">
            <div class="container-contact">
                <div class="wrapper">
                    <div class="contact-pic js-tilt" data-tilt>
                        <img src="img/arvispace.png" alt="Arvispace logo">
                    </div>
                    <transition name="form-container">
                        <form v-if="!submitted" class="contact-form validate-form louis-george" @submit="onSubmit">
                            <span class="contact-form-title dolce-vita">
                                Contactanos
                            </span>

                            <div class="wrap-input validate-input">
                                <input class="inputcontact" type="text" name="name" placeholder="Nombre" v-model="name">
                                <span class="focus-input"></span>
                                <span :class="submitted && name==''?'error-active':'error-disabled'"><i class="icon-Informacion-general"></i>Este campo es requerido</span>
                            </div>

                            <div class="wrap-input validate-input">
                                <input class="inputcontact" type="text" name="email" placeholder="Correo electronico" v-model="email">
                                <span class="focus-input"></span>
                                <span :class="submitted && email==''?'error-active':'error-disabled'"><i class="icon-Informacion-general"></i>Este campo es requerido</span>
                            </div>

                            <div class="wrap-input validate-input">
                                <textarea class="inputcontact" name="message" placeholder="Mensaje" v-model="text"></textarea>
                                <span class="focus-input"></span>
                                <span :class="submitted && text==''?'error-active':'error-disabled'"><i class="icon-Informacion-general"></i>Este campo es requerido</span>
                            </div>

                            <div class="container-contact100-form-btn">
                                <button type="submit"  class="contact-form-btn">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </transition>
                    <transition name="show-result">
                        <div v-if="result" class="result-container">
                            <div>
                                <p v-if="statusSend == 'failed'" class="text-center">
                                    <i class="icon-x failed-icon"></i>
                                </p>
                                <p v-else class="text-center">
                                    <i class="icon-Correcto success-icon"></i>
                                </p>
                                <span class="contact-form-title dolce-vita text-center">
                                    {{statusSend}}
                                </span>
                                <p class="louis-george text-center">
                                    {{infoSend}}
                                </p>
                                <p class="text-center">
                                    <a href="#" @click="restartForm">
                                        <i class="icon-atras-1"></i> Volver
                                    </a>
                                </p>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    `
}