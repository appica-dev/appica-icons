<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16 4h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3zm0 0-4 4-4-4m0 0v16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM4 6.5l8 7.5 8-7.5\"/>";
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
