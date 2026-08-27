<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 17a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0H3v-6m6 6h6m.584-1.412a2 2 0 0 0 2.828 2.83M3 11l2-5h1m-3 5h8m-1-5h4l4 5m0 0h1a2 2 0 0 1 2 2v4m-3-6h-3m-3-3V6M3 3l18 18\"/>";
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
