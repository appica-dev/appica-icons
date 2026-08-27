<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m16.123 16.092-.177.177a5.81 5.81 0 1 1-8.215-8.215l.159-.159M4 20l3.5-3.5M15 4l-3.5 3.5M20 9l-3.5 3.5M3 3l18 18\"/>";
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
