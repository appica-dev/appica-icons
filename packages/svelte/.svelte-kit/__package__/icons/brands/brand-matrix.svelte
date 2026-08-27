<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 3H3v18h1m16 0h1V3h-1M7 9v6m5 0v-3.5m0 0a2.5 2.5 0 0 0-5 0v.5m5-.5a2.5 2.5 0 0 1 5 0V15m-5-3.5v.5\"/>";
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
