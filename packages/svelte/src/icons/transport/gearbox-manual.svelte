<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 0v8m7-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 0v8m7-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 0v2a2 2 0 0 1-2 2H5m0 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4m7 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4\"/>";
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
