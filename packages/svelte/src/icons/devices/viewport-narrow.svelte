<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 12h7m0 0L7 9m3 3-3 3m14-3h-7m0 0 3-3m-3 3 3 3M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M9 18v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1\"/>";
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
