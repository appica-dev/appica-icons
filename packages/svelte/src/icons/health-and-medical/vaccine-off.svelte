<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m17 3 4 4m-2-2-4.5 4.5m-3-3 6 6m-1-1-.5.5m-2 2-4 4H6m0 0v-4l4-4m-4 8-3 3m9-13 .5-.5m-5 5L9 14M3 3l18 18\"/>";
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
