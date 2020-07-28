<?php
    class routes{
        public $server;
        public $libraries;
        public $components;
        public $style;
        public $js;
        public $vue;
        public $less;
        public $axios;
        public $init;
        public $popper;

        function __construct() {
            $this->server = "https://arvispace.com/";
            $this->libraries = $this->server."lib/" ;
            $this->components = "components/";
            $this->style = "less/";
            $this->js = "../js/";
            $this->vue = "https://cdn.jsdelivr.net/npm/vue/dist/vue.js";
            $this->less = "https://cdn.jsdelivr.net/npm/less";
            $this->axios = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
            $this->init = "app.js";
            $this->popper = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js";
        }
    }
?>