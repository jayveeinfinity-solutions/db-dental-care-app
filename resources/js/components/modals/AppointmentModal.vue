<script setup>
    import { useModalStore } from "./../../stores/modal"

    let appointmentInstance = null;
    const appointmentRef = ref(null);
    const modalStore = useModalStore()

    const open = () => appointmentInstance?.show();
    const close = () => appointmentInstance?.hide();

    onMounted(() => {
        appointmentInstance = new bootstrap.Modal(appointmentRef.value);
        modalStore.register("appointmentModal", { open, close })
    });
</script>

<template>
    <Teleport to="body">
        <div class="modal fade" id="appointmentModal" ref="appointmentRef" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="appointmentModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content mt-5">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="appointmentModalLabel">Schedule an appointment</h1>
                        <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h2 class="tw:!text-lg">What service are you looking for?</h2>
                        <!-- SERVICES -->
                        <div class="tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:lg:grid-cols-3 tw:gap-4 tw:place-items-center-safe">
                            <label class="custom-card">
                                <input class="custom-card-input" type="checkbox">
                                <div class="custom-card-body">
                                    <div class="custom-card-body-cover">
                                        <img class="custom-card-body-cover-image" src="https://i.ibb.co/zXmHzBk/category-a.png">
                                        <span class="custom-card-body-cover-checkbox"> 
                                            <svg class="custom-card-body-cover-checkbox--svg" viewBox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="custom-card-body-header">
                                        <h2 class="custom-card-body-header-title">Category A</h2>
                                        <p class="custom-card-body-header-subtitle">Motorcycles</p>
                                    </div>
                                </div>
                            </label>
                            <label class="custom-card">
                                <input class="custom-card-input" type="checkbox">
                                <div class="custom-card-body">
                                    <div class="custom-card-body-cover">
                                        <img class="custom-card-body-cover-image" src="https://i.ibb.co/cXjw2Gz/category-b.png">
                                        <span class="custom-card-body-cover-checkbox"> 
                                            <svg class="custom-card-body-cover-checkbox--svg" viewBox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="custom-card-body-header">
                                        <h2 class="custom-card-body-header-title">Category B</h2>
                                        <p class="custom-card-body-header-subtitle">Cars and ATVs</p>
                                    </div>
                                </div>
                            </label>
                            <label class="custom-card">
                                <input class="custom-card-input" type="checkbox">
                                <div class="custom-card-body">
                                <div class="custom-card-body-cover"><img class="custom-card-body-cover-image" src="https://i.ibb.co/nDbfH9B/category-c.png"><span class="custom-card-body-cover-checkbox"> 
                                    <svg class="custom-card-body-cover-checkbox--svg" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                    </svg></span></div>
                                <div class="custom-card-body-header">
                                    <h2 class="custom-card-body-header-title">Category C</h2>
                                    <p class="custom-card-body-header-subtitle">Large goods vehicle</p>
                                </div>
                                </div>
                            </label>
                            <label class="custom-card">
                                <input class="custom-card-input" type="checkbox">
                                <div class="custom-card-body">
                                <div class="custom-card-body-cover"><img class="custom-card-body-cover-image" src="https://i.ibb.co/7gSQMmm/category-d.png"><span class="custom-card-body-cover-checkbox"> 
                                    <svg class="custom-card-body-cover-checkbox--svg" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                    </svg></span></div>
                                <div class="custom-card-body-header">
                                    <h2 class="custom-card-body-header-title">Category D</h2>
                                    <p class="custom-card-body-header-subtitle">Buses</p>
                                </div>
                                </div>
                            </label>
                            <label class="custom-card">
                                <input class="custom-card-input" type="checkbox">
                                <div class="custom-card-body">
                                <div class="custom-card-body-cover"><img class="custom-card-body-cover-image" src="https://i.ibb.co/0F3SdsX/category-t.png"><span class="custom-card-body-cover-checkbox"> 
                                    <svg class="custom-card-body-cover-checkbox--svg" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                    </svg></span></div>
                                <div class="custom-card-body-header">
                                    <h2 class="custom-card-body-header-title">Category T</h2>
                                    <p class="custom-card-body-header-subtitle">Tractors and SMV</p>
                                </div>
                                </div>
                            </label>
                            <label class="custom-card">
                                <input class="custom-card-input" type="checkbox" disabled="disabled">
                                <div class="custom-card-body">
                                <div class="custom-card-body-cover"><img class="custom-card-body-cover-image" src="https://i.ibb.co/WDwmPy5/other.png"><span class="custom-card-body-cover-checkbox"> 
                                    <svg class="custom-card-body-cover-checkbox--svg" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                    </svg></span></div>
                                <div class="custom-card-body-header">
                                    <h2 class="custom-card-body-header-title">Other</h2>
                                    <p class="custom-card-body-header-subtitle">Additional categories</p>
                                </div>
                                </div>
                            </label>
                            </div>
                        <!-- FEATURED -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="close" >Close</button>
                        <button type="button" class="btn btn-primary">Next</button>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>