<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 12h6.5m0-6h-5M6 4c-.5 2.5-1.5 3.5-2.5 4.5M8 6v7m0 0c0 4.5-2 5.5-4 7m4-7 3 5m3-12h6v12h-2l-2 2-1-2h-1z\"/>";
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
