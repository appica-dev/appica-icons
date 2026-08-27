<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 19h16M10 6h8a1 1 0 0 1 1 1v8m-3 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1M3 3l18 18\"/>";
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
