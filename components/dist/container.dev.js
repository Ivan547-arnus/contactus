"use strict";

var container = {
  props: {
    title: {
      type: String,
      "default": "Hola mundo"
    }
  },
  data: function data() {
    return {
      name: "",
      email: "",
      text: "",
      submitted: false,
      result: false,
      statusSend: "",
      infoSend: ""
    };
  },
  methods: {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      this.submitted = true;

      if (this.name != "" && this.email != "" && this.text != "") {
        this.$emit("submit", this);
      }
    }
  },
  template: "\n        <div class=\"bg\">\n            <div class=\"container-contact\">\n                <div class=\"wrapper\">\n                    <div class=\"contact-pic js-tilt\" data-tilt>\n                        <img src=\"img/arvispace.png\" alt=\"Arvispace logo\">\n                    </div>\n                    <transition name=\"form-container\">\n                        <form v-if=\"!submitted\" class=\"contact-form validate-form louis-george\" @submit=\"onSubmit\">\n                            <span class=\"contact-form-title dolce-vita\">\n                                Contactanos\n                            </span>\n\n                            <div class=\"wrap-input validate-input\">\n                                <input class=\"inputcontact\" type=\"text\" name=\"name\" placeholder=\"Nombre\" v-model=\"name\">\n                                <span class=\"focus-input\"></span>\n                                <span :class=\"submitted && name==''?'error-active':'error-disabled'\"><i class=\"icon-Informacion-general\"></i>Este campo es requerido</span>\n                            </div>\n\n                            <div class=\"wrap-input validate-input\">\n                                <input class=\"inputcontact\" type=\"text\" name=\"email\" placeholder=\"Correo electronico\" v-model=\"email\">\n                                <span class=\"focus-input\"></span>\n                                <span :class=\"submitted && email==''?'error-active':'error-disabled'\"><i class=\"icon-Informacion-general\"></i>Este campo es requerido</span>\n                            </div>\n\n                            <div class=\"wrap-input validate-input\">\n                                <textarea class=\"inputcontact\" name=\"message\" placeholder=\"Mensaje\" v-model=\"text\"></textarea>\n                                <span class=\"focus-input\"></span>\n                                <span :class=\"submitted && text==''?'error-active':'error-disabled'\"><i class=\"icon-Informacion-general\"></i>Este campo es requerido</span>\n                            </div>\n\n                            <div class=\"container-contact100-form-btn\">\n                                <button type=\"submit\"  class=\"contact-form-btn\">\n                                    Enviar\n                                </button>\n                            </div>\n                        </form>\n                    </transition>\n                    <transition name=\"show-result\">\n                        <div v-if=\"result\" class=\"result-container\">\n                            <div>\n                                <p v-if=\"statusSend == 'failed'\" class=\"text-center\">\n                                    <i class=\"icon-x failed-icon\"></i>\n                                </p>\n                                <p v-else class=\"text-center\">\n                                    <i class=\"icon-Correcto success-icon\"></i>\n                                </p>\n                                <span class=\"contact-form-title dolce-vita text-center\">\n                                    {{statusSend}}\n                                </span>\n                                <p class=\"louis-george text-center\">\n                                    {{infoSend}}\n                                </p>\n                            </div>\n                        </div>\n                    </transition>\n                </div>\n            </div>\n        </div>\n    "
};