<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10.5 8 10 7m3.5 7 .5 1m-5-2.5L8 13m3 1-.5 1M13 8l.5-1m2.5 5.5-1-.5m-6-2-1-.5m12 1.49c-.01 5.52-4.48 10-10 10.01v-2.26l-.01-.01c-4.28-1.11-6.86-5.47-5.76-9.75a8 8 0 0 1 9.74-5.76C17.5 4.13 20 7.35 20 11z\"/>";
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
