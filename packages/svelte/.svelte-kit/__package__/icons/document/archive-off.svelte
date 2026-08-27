<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 4h11a2 2 0 1 1 0 4m0 0h-7m7 0v7M8 8H5m0 0a2 2 0 0 1-.827-3.822M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 1.824-1.18M10 12h2M3 3l18 18\"/>";
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
