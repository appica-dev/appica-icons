<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m17 13 4-4m0 0-4-4m4 4h-4a5 5 0 0 0-5 5m-5-1L3 9m0 0 4-4M3 9h4a5 5 0 0 1 5 5m0 0v5\"/>";
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
