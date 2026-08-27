<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3.5 9.034v5.932m8.956-5.932V5.488a.98.98 0 0 1 .614-.913 1 1 0 0 1 1.085.214l6.554 6.512a.985.985 0 0 1 0 1.398l-6.554 6.512a.997.997 0 0 1-1.699-.7v-3.545h-5.97V9.034z\"/>";
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
