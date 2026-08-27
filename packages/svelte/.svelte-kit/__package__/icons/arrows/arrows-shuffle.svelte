<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m18 4 3 3m0 0-3 3m3-3h-5a4.98 4.98 0 0 0-3 1m5 12 3-3m0 0-3-3m3 3h-5a5 5 0 0 1-5-5 5 5 0 0 0-5-5H3m6 9a5 5 0 0 1-3 1H3\"/>";
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
