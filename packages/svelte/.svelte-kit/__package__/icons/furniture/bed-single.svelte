<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M21.5 17.194h-19m0 3.306v-4.722c0-1.781 0-2.671.557-3.225C3.613 12 4.509 12 6.3 12h11.4c1.791 0 2.687 0 3.244.553.556.553.556 1.444.556 3.225V20.5M15.8 12v-1.305c0-.48-.087-.64-.532-.829-.928-.393-2.054-.7-3.268-.7s-2.34.307-3.268.7c-.445.189-.532.35-.532.829V12m11.4 0V7.618c0-.653 0-.98-.162-1.288s-.394-.468-.856-.787A11.55 11.55 0 0 0 12 3.5c-2.448 0-4.718.755-6.582 2.043-.462.319-.694.479-.856.787S4.4 6.965 4.4 7.618V12\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
