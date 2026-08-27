<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 4H6L3 14v2.5m0 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0M16 4h2l3 10v2.5m0 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M10 16h4\"/>";
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
