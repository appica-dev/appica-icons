<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 16h.013m3.997 0h.005m4 0h.005m-.005-4h.005m-8.01 0h.005m3.995 0h.005m4.005-4h.005m-8.01 0h.005m3.995 0h.005M7 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1M17 4h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-1\"/>";
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
