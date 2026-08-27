<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 0v-5c0-1.632.782-3.082 1.992-4M19 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 0v5c0 .594-.104 1.164-.294 1.692m-1.692 2.298A4.98 4.98 0 0 1 14 18h-3m0 0 3-3m-3 3 3 3M10 6h3m0 0-3-3m3 3-1.499 1.499M3 3l18 18\"/>";
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
