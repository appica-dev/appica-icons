<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 10a5 5 0 0 0-5-5m5 5H7m10 0a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1m-5-8a5 5 0 0 0-5 5m5-5V3m-5 7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1m10 0H7m10 0-1.81 7.243a1 1 0 0 1-.97.757H9.78a1 1 0 0 1-.97-.757L7 13\"/>";
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
