<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10 9h.01M14 9h.01M12 3a7 7 0 0 1 7 7v1h1a2 2 0 0 1 0 4h-1v3l2 3H11a6 6 0 0 1-6-5.775v-.226H4a2 2 0 1 1 0-4h1v-1A7 7 0 0 1 12 3m-1 11h2a1 1 0 0 0-2 0\"/>";
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
