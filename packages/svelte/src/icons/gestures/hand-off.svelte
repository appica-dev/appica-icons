<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m3 3 18 18M8 13.5V8m.44-3.562A1.5 1.5 0 0 1 11 5.5m0 0V7m0-1.5v-2a1.5 1.5 0 1 1 3 0V10m-3 1.008V12m3-6.5a1.5 1.5 0 1 1 3 0V12m0-4.5a1.5 1.5 0 1 1 3 0V16a6 6 0 0 1-6 6h-2c-2.114-.292-3.956-1.397-5-3l-2.7-5.25a1.7 1.7 0 0 1 2.75-2l.9 1.75\"/>";
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
