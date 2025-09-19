<script setup>
import { reactiveOmit } from "@vueuse/core";
import { StepperIndicator, useForwardProps } from "reka-ui";
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
  <StepperIndicator
    v-slot="slotProps"
    v-bind="forwarded"
    :class="
      cn(
        'tw:inline-flex tw:items-center tw:justify-center tw:rounded-full tw:text-muted-foreground/50 tw:w-8 tw:h-8',
        // Disabled
        'tw:group-data-[disabled]:text-muted-foreground tw:group-data-[disabled]:opacity-50',
        // Active
        'tw:group-data-[state=active]:bg-primary tw:group-data-[state=active]:text-primary-foreground',
        // Completed
        'tw:group-data-[state=completed]:bg-accent tw:group-data-[state=completed]:text-accent-foreground',
        props.class,
      )
    "
  >
    <slot v-bind="slotProps" />
  </StepperIndicator>
</template>
