<script setup>
    import Header from './../shared/Header.vue';
    import Footer from './../shared/Footer.vue';
    import AppointmentModal from '../components/modals/AppointmentModal.vue';
</script>

<template>
    <div id="wrapper">
        <a href="#" id="back-to-top"></a>

        <!-- preloader begin -->
        <div id="de-loader"></div>
        <!-- preloader end -->

        <Header />
        <slot />
        <Footer />
    </div>
    <AppointmentModal />
</template>