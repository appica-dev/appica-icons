<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14 16.002c2.5 0 6.42-1.467 7-3.998h-6c3-1 6.44-3.531 7-5.997h-4c-3.03 0-3.764-.196-5 1.5m-4.5-1.5A6.5 6.5 0 0 0 2 12.504 6.495 6.495 0 0 0 8.5 19a6.5 6.5 0 0 0 6.5-6.496 6.495 6.495 0 0 0-6.5-6.497m0 8.995A2.5 2.5 0 0 1 6 12.504a2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.498\"/>";
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
