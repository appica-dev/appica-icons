<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8.997 9.983a.5.5 0 0 0 1 0v-1a.5.5 0 1 0-1 0zm0 0a5 5 0 0 0 4.998 5m0 0h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1M3 20.983l1.65-3.8A9 9 0 0 1 5.942 5.35a8.994 8.994 0 0 1 14.967 5.378 9 9 0 0 1-6.53 9.953 9 9 0 0 1-6.332-.597z\"/>";
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
