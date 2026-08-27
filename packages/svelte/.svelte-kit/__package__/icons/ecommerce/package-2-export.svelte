<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 7.5v9l8 4.5v-9M4 7.5 12 3l8 4.5m-16 0 8 4.5m8-4.5V12m0-4.5L12 12m3 6h7m0 0-3-3m3 3-3 3\"/>";
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
