<script setup>
import { reactiveOmit } from "@vueuse/core";
import { StepperTrigger, useForwardProps } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
});

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <StepperTrigger
    v-bind="forwarded"
    :class="
      cn(
        'tw:p-1 tw:flex tw:flex-col tw:items-center tw:text-center tw:gap-1 tw:rounded-md',
        props.class,
      )
    "
  >
    <slot />
  </StepperTrigger>
</template>
