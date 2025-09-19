<script setup>
    import { useModalStore } from "@/stores/modal";
    import { Button } from '@/components/ui/button';
    
    import { Activity, CalendarPlus } from "lucide-vue-next";
    import { Stepper, StepperDescription, StepperIndicator, StepperItem, StepperSeparator, StepperTitle, StepperTrigger } from "@/components/ui/stepper";

    let appointmentInstance = null;
    const appointmentRef = ref(null);
    const modalStore = useModalStore()

    const open = () => appointmentInstance?.show();
    const close = () => appointmentInstance?.hide();

    const stepIndex = ref(1)
    const steps = [
        {
            step: 1,
            title: "Service",
            description: "Select a service/s",
            icon: Activity,
        }, {
            step: 2,
            title: "Schedule",
            description: "Set schedule appoint",
            icon: CalendarPlus,
        }
    ];

    onMounted(() => {
        appointmentInstance = new bootstrap.Modal(appointmentRef.value);
        modalStore.register("appointmentModal", { open, close })
    });
</script>

<template>
    <div class="modal fade" id="appointmentModal" ref="appointmentRef" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="appointmentModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content mt-5">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="appointmentModalLabel">Schedule an appointment</h1>
                    <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <Stepper class="tw:!justify-center">
                        <StepperItem
                            v-for="item in steps"
                            :key="item.step"
                            class="tw:basis-1/4"
                            :step="item.step"
                        >
                        <StepperTrigger>
                            <StepperIndicator>
                                <component :is="item.icon" class="tw:w-4 tw:h-4" />
                            </StepperIndicator>
                            <div class="flex flex-col">
                                <StepperTitle>
                                    {{ item.title }}
                                </StepperTitle>
                                <StepperDescription>
                                    {{ item.description }}
                                </StepperDescription>
                            </div>
                        </StepperTrigger>
                        <StepperSeparator
                            v-if="item.step !== steps[steps.length - 1].step"
                            class="tw:w-full tw:h-px"
                        />
                        </StepperItem>
                    </Stepper>
                    <div class="flex flex-col gap-4 mt-4">
                        <template v-if="stepIndex === 1">
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
                        </template>
                         <template v-if="stepIndex === 2">
                            Step 2
                        </template>
                    </div>
                    <!-- FEATURED -->
                </div>
                <div class="modal-footer">
                    <Button class="tw:bg-red-700 tw:hover:bg-red-800 tw:focus:ring-4 tw:focus:ring-red-300" @click="close">Close</Button>
                    <Button class="tw:bg-blue-700 tw:hover:bg-blue-800 tw:focus:ring-4 tw:focus:ring-red-300">Next</Button>
                </div>
            </div>
        </div>
    </div>
</template>