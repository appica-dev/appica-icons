<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 0v10m14 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 0V7m0 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4M5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4m1.5.5 11-11\"/>";
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
