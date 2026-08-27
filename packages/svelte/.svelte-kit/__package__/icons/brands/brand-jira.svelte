<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 8h-1.5A2.5 2.5 0 0 1 11 5.5V4h9v9h-1.5a2.5 2.5 0 0 1-2.5-2.5V9m-1-1a1 1 0 0 1 1 1m-1-1H7v1.5A2.5 2.5 0 0 0 9.5 12H11m5-3v8h-1.5a2.5 2.5 0 0 1-2.5-2.5V13m-1-1a1 1 0 0 1 1 1m-1-1H3v1.5A2.5 2.5 0 0 0 5.5 16H7a1 1 0 0 1 1 1v1.5a2.5 2.5 0 0 0 2.5 2.5H12v-8\"/>";
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
