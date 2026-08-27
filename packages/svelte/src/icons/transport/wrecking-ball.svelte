<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M19 11a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 0V4l-6 7m-9 8a2 2 0 1 1 0-4m0 4a2 2 0 1 0 0-4m0 4h9m-9-4h9m0 4a2 2 0 0 1 0-4m0 4a2 2 0 0 0 0-4m0 0v-5a3 3 0 0 0-3-3H8v5m-3 3v-2a1 1 0 0 1 1-1h7\"/>";
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
