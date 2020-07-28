const container = {
    props:{
        title:{
            type:String,
            default:"Hola mundo"
        }
    },
    components:{
        'carousel':carousel
    },
    template:`
        <div class="bg">
            <div class="container-contact">
                <div class="wrapper">
                    <div class="contact-pic js-tilt" data-tilt>
                        <img src="img/arvispace.png" alt="Arvispace logo">
                    </div>

                    <form class="contact-form validate-form louis-george">
                        <span class="contact-form-title dolce-vita">
                            Contactanos
                        </span>

                        <div class="wrap-input validate-input" data-validate="Name is required">
                            <input class="inputcontact" type="text" name="name" placeholder="Nombre">
                            <span class="focus-input"></span>
                        </div>

                        <div class="wrap-input validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input class="inputcontact" type="text" name="email" placeholder="Correo electronico">
                            <span class="focus-input"></span>
                        </div>

                        <div class="wrap-input validate-input" data-validate="Message is required">
                            <textarea class="inputcontact" name="message" placeholder="Mensaje"></textarea>
                            <span class="focus-input"></span>
                        </div>

                        <div class="container-contact100-form-btn">
                            <button class="contact-form-btn">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `
}