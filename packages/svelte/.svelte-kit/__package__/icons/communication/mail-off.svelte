<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 5h10a2 2 0 0 1 2 2m0 0v10m0-10-6 4m4 8H5a2 2 0 0 1-2-2V7m0 0a2 2 0 0 1 2-2M3 7l9 6 .565-.377M3 3l18 18\"/>";
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
