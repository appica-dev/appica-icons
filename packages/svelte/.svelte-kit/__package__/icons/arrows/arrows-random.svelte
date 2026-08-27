<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20 21h-4m0 0v-4m0 4 5-5M6.5 9.504l-3.5-2m0 0L5 4M3 7.504l6.83-1.87M4 16l4-1m0 0 1 4m-1-4-3.5 6M21 5l-.5 4m0 0-4-.5m4 .5L16 3.5\"/>";
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
