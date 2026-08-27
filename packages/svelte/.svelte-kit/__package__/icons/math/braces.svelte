<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 4a2 2 0 0 0-2 2v3c0 .796-.21 1.559-.586 2.121C4.04 11.684 3.53 12 3 12c.53 0 1.04.316 1.414.879C4.79 13.44 5 14.204 5 15v3a2 2 0 0 0 2 2M17 4a2 2 0 0 1 2 2v3c0 .796.21 1.559.586 2.121.375.563.884.879 1.414.879-.53 0-1.04.316-1.414.879C19.21 13.44 19 14.204 19 15v3a2 2 0 0 1-2 2\"/>";
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
