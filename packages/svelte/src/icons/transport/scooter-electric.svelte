<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h5a6 6 0 0 1 5-5V7a2 2 0 0 0-2-2h-1m-5-1L8 8h3l-2 4m7 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
