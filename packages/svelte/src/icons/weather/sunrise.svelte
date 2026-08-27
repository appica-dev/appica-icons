<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 17h1m16 0h1M5.6 10.6l.7.7m12.1-.7-.7.7M8 17a4 4 0 1 1 8 0M3 21h18M12 9V3m0 0 3 3m-3-3L9 6\"/>";
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
