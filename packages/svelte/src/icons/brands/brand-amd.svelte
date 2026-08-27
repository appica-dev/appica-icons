<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16 16V9c0-.566-.434-1-1-1H8m8 8 5 5V4c0-.566-.434-1-1-1H3l5 5m8 8-4.707 4.707a1 1 0 0 1-.707.293H4a1 1 0 0 1-1-1v-6.586a1 1 0 0 1 .293-.707L8 8m8 8H9a1 1 0 0 1-1-1V8\"/>";
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
