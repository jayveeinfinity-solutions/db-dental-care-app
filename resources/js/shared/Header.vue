<script setup>
    import { useAuthStore } from "../stores/auth";
    import { useModalStore } from "../stores/modal";

    const authStore = useAuthStore();
    const modalStore = useModalStore();

    const openAppointmentModal = () => modalStore.open("appointmentModal");

    onMounted(() => {
        authStore.initUser();
    });
</script>

<template>
    <!-- header begin -->
    <header class="transparent scroll-light">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="de-flex sm-pt10">
                        <div class="de-flex-col">
                            <!-- logo begin -->
                            <div id="logo">
                                <a href="index.html">
                                    <img class="logo-main" src="https://madebydesignesia.com/themes/dentia/images/logo-white.webp" alt="" >
                                    <img class="logo-scroll" src="https://madebydesignesia.com/themes/dentia/images/logo-black.webp" alt="" >
                                    <img class="logo-mobile" src="https://madebydesignesia.com/themes/dentia/images/logo-white.webp" alt="" >
                                </a>
                            </div>
                            <!-- logo end -->
                        </div>
                        <div class="de-flex-col header-col-mid">
                            <!-- mainemenu begin -->
                            <ul id="mainmenu">
                                <li><a class="menu-item" href="index.html">Home</a></li>
                                <li><a class="menu-item" href="services.html">Services</a>
                                    <ul>
                                        <li><a href="service-general-dentistry.html">General Dentistry</a></li>
                                        <li><a href="service-cosmetic-dentistry.html">Cosmetic Dentistry</a></li>
                                        <li><a href="service-pediatric-dentistry.html">Pediatric Dentistry</a></li>
                                        <li><a href="service-restorative-dentistry.html">Restorative Dentistry</a></li>
                                        <li><a href="service-preventive-dentistry.html">Preventive Dentistry</a></li>
                                        <li><a href="service-orthodontics.html">Orthodontics</a></li>
                                        <li><a href="services.html">All Services</a></li>
                                    </ul>
                                </li>
                                <li><a class="menu-item" href="contact.html">Contact</a></li>
                                <li><a class="menu-item" href="about.html">About Us</a></li>
                            </ul>
                            <!-- mainmenu end -->
                        </div>
                        <div class="de-flex-col">
                            <div class="menu_side_area" v-if="!authStore.isAuth">
                                <a href="javascript:void(0)" class="btn-main fx-slide" @click="openAppointmentModal"><span>Book Appointment</span></a>
                                <span id="menu-btn"></span>
                            </div>
                            <div v-else>
                                <span>Hello, {{ authStore.user.name }}</span>
                            </div>

                            <div id="btn-extra">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- header end -->
</template>