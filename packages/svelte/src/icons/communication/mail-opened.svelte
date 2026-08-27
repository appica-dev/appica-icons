<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m3 9 9 6 9-6M3 9l9-6 9 6M3 9v10M21 9v10m0 0a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m18 0-6-6M3 19l6-6\"/>";
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
