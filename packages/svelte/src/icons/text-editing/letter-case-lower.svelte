<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10 12v7m11-7v7M3 15.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0m11 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0\"/>";
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
