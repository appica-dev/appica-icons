<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 10V5c0-1.38.62-2 2-2s2 .62 2 2v5m0-3h-4m4 14h-4l4-7h-4M4 15l3 3m0 0 3-3m-3 3V6\"/>";
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
