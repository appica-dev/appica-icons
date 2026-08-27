<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 13h1m16 0h1M5.6 6.6l.7.7m12.1-.7-.7.7M8 13a4 4 0 1 1 8 0M3 17h18M7 20h5m4 0h1M12 5V4\"/>";
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
