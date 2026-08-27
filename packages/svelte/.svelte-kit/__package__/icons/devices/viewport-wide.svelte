<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10 12H3m0 0 3-3m-3 3 3 3m8-3h7m0 0-3-3m3 3-3 3M3 6V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1M3 18v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1\"/>";
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
