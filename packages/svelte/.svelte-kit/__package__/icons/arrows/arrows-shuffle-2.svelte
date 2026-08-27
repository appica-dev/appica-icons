<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m18 4 3 3m0 0-3 3m3-3h-5a5 5 0 0 0-5 5m7 8 3-3m0 0-3-3m3 3h-5a5 5 0 0 1-5-5M3 7h3a5 5 0 0 1 5 5m0 0a5 5 0 0 1-5 5H3\"/>";
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
