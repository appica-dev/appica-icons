<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20 15.003v-.01M20 20v-.01M15 20v-.01M9 20v-.01M9 4.01V4M4 20v-.01m0-4.987v-.01m0-5.986v-.01M4 4.01V4m15 7.006h-5a1 1 0 0 1-1-1V5.01a1 1 0 0 1 1-.999h5a1 1 0 0 1 1 1v4.996a1 1 0 0 1-1 1\"/>";
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
